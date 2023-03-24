import { Heading } from '../../components/Heading'
import { TextInput } from '../../components/TextInput'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'
import { Envelope, Lock, IdentificationCard, ArrowLeft } from 'phosphor-react'

import { Camera } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { UserController, usuario } from '../../hooks/UserController'
import { useEffect, useState } from 'react'
import noneAvatar from '../../img/noneCover.png'

export function Account() {
  const { user } = useAuth()

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState(user!.firstName)
  const [lastName, setLastName] = useState(user!.lastName)
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [newAgainPassword, setNewAgainPassword] = useState<string>('')

  const [sourceImg, setSourceImg] =
    useState<string | ArrayBuffer | null | undefined>(null)

  function handleConvertImage64(file: FileList | null) {
    try {
      if (file == null || undefined) {
        throw ''
      }

      if (file[file.length - 1].type != 'image/jpeg') {
        throw alert('please only jpeg, jpg or png')
      }

      const fileReader = new FileReader()
      fileReader.readAsDataURL(file![0])
      fileReader.onload = e => {
        setSourceImg(e.target?.result)
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function handleCompressCover() {
    const HEIGHT = 256
    const newImage = new Image()
    newImage.src = String(sourceImg)
    const FinalImg: string = await new Promise(resolve => {
      newImage.onload = event => {
        const canvas: HTMLCanvasElement = document.createElement('canvas')
        const ratio = HEIGHT / (event.target as HTMLImageElement).height
        canvas.height = HEIGHT
        canvas.width = (event.target as HTMLImageElement).width * ratio

        const context: CanvasRenderingContext2D = canvas.getContext('2d')!
        context?.drawImage(newImage, 0, 0, canvas.width, canvas.height)

        const newImageURL = context.canvas.toDataURL(
          'image/jpeg' || 'image/jpg' || 'image/png',
          90
        )

        resolve(newImageURL)
      }
    })
    return FinalImg
  }

  function handleUpdate() {
    try {
      if (password !== user!.password) {
        throw alert('current password not same')
      }
      if (newPassword !== newAgainPassword) {
        throw alert('type same password')
      }
      const updateUser = {
        firstName,
        lastName,
        email: user!.email,
        password: newAgainPassword
      }
      new UserController().update(updateUser)
    } catch (error) {}
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    ;(document.getElementById('firstName') as HTMLInputElement).value =
      user!.firstName
    ;(document.getElementById('lastName') as HTMLInputElement).value =
      user!.lastName
    ;(document.getElementById('email') as HTMLInputElement).value = user!.email
  }, [])

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <ButtonIcon.root onClick={handleBack} className="absolute left-3 top-3">
        <ArrowLeft />
      </ButtonIcon.root>
      <div className=" bg-gray-900 w-auto h-auto  flex flex-col items-center">
        <header>
          <Heading asChild={true} size="sm" className="text-white mt-8 mb-6">
            <h1>Account</h1>
          </Heading>
        </header>
        <form
          action=""
          className=" max-w-sm w-full flex flex-col items-center ml-5 mr-5"
        >
          <div className="relative">
            <img
              src={sourceImg ? String(sourceImg) : noneAvatar}
              alt=""
              className=" brightness-95 rounded-full w-48 h-48 object-cover "
            />
            <label htmlFor="avatar" className=" absolute right-0 bottom-0">
              <ButtonIcon.root
                asChild={true}
                className="w-14 h-14 cursor-pointer"
              >
                <span>
                  <ButtonIcon.icon className="w-10 h-10">
                    <Camera weight="bold" />
                  </ButtonIcon.icon>
                  <input
                    type="file"
                    id="avatar"
                    className=" opacity-0 h-0 w-0"
                    onChange={e => handleConvertImage64(e.target.files)}
                  />
                </span>
              </ButtonIcon.root>
            </label>
          </div>

          <Heading asChild={true} size="sm" className="text-white mt-8 mb-6">
            <h2>{`${user!.firstName} ${user!.lastName}`}</h2>
          </Heading>

          <label htmlFor="firstName" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">First Name</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input
                onChange={e => setFirstName(e.target.value)}
                id="firstName"
              />
            </TextInput.root>
          </label>

          <label htmlFor="lastName" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Last Name</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input
                onChange={e => setLastName(e.target.value)}
                id="lastName"
              />
            </TextInput.root>
          </label>

          <label htmlFor="email" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Email</Text>
            <TextInput.root>
              <TextInput.icon>
                <Envelope />
              </TextInput.icon>
              <TextInput.input readOnly id="email" />
            </TextInput.root>
          </label>

          <label htmlFor="newPassword" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">New Password</Text>
            <TextInput.root>
              <TextInput.icon>
                <Lock />
              </TextInput.icon>
              <TextInput.input
                type="password"
                onChange={e => setNewPassword(e.target.value)}
                id="newPassword"
                placeholder="**********"
              />
            </TextInput.root>
          </label>

          <label
            htmlFor="newPasswordAgain"
            className="w-11/12 flex flex-col mb-3"
          >
            <Text className="mb-2 ml-3">New Password Again</Text>
            <TextInput.root>
              <TextInput.icon>
                <Lock />
              </TextInput.icon>
              <TextInput.input
                type="password"
                onChange={e => setNewAgainPassword(e.target.value)}
                id="newPasswordAgain"
                placeholder="**********"
              />
            </TextInput.root>
          </label>

          <label
            htmlFor="currentPassword"
            className="w-11/12 flex flex-col mb-3"
          >
            <Text className="mb-2 ml-3">Current Password</Text>
            <TextInput.root>
              <TextInput.icon>
                <Lock />
              </TextInput.icon>
              <TextInput.input
                type="password"
                onChange={e => setPassword(e.target.value)}
                id="currentPassword"
                placeholder="**********"
              />
            </TextInput.root>
          </label>
          <Button
            onClick={handleUpdate}
            className="mt-10"
            type="button"
            types="normal"
          >
            UPDATE
          </Button>
          <Button className="mt-12 mb-12" type="button" types="delete">
            DELETE
          </Button>
        </form>
      </div>
    </div>
  )
}
