import { Heading } from '../../components/Heading'
import { TextInput } from '../../components/TextInput'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Text } from '../../components/Text'
import { Button } from '../../components/Button'
import { Envelope, Lock, IdentificationCard, ArrowLeft } from 'phosphor-react'

import { Camera } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Account() {
  const navigate = useNavigate()
  function handleBack() {
    navigate(-1)
  }

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <ButtonIcon.root onClick={handleBack} className="absolute left-3 top-3">
        <ArrowLeft />
      </ButtonIcon.root>
      <div className=" bg-gray-900 w-auto h-auto  flex flex-col items-center">
        <header>
          <Heading size="sm" className="text-white mt-8 mb-6">
            <h1>Account</h1>
          </Heading>
        </header>
        <form
          action=""
          className=" max-w-sm w-full flex flex-col items-center ml-5 mr-5"
        >
          <div className="relative">
            <img
              src="https://cdn.discordapp.com/attachments/1020756939296227362/1080522438313513091/Screenshot_49.png"
              alt=""
              className="rounded-full w-48 h-48 object-cover "
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
                  />
                </span>
              </ButtonIcon.root>
            </label>
          </div>

          <Heading size="sm" className="text-white mt-8 mb-6">
            <h2>André Luiz</h2>
          </Heading>

          <label htmlFor="firstName" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">First Name</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input id="firstName" value="andre" />
            </TextInput.root>
          </label>

          <label htmlFor="lastName" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Last Name</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input id="lastName" value="Luiz" />
            </TextInput.root>
          </label>

          <label htmlFor="email" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Email</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input id="email" value="notAndre@gmail.com" />
            </TextInput.root>
          </label>

          <label htmlFor="newPassword" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">New Password</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input id="newPassword" placeholder="**********" />
            </TextInput.root>
          </label>

          <label
            htmlFor="newPasswordAgain"
            className="w-11/12 flex flex-col mb-3"
          >
            <Text className="mb-2 ml-3">New Password Again</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input id="newPasswordAgain" placeholder="**********" />
            </TextInput.root>
          </label>

          <label
            htmlFor="currentPassword"
            className="w-11/12 flex flex-col mb-3"
          >
            <Text className="mb-2 ml-3">Current Password</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input id="currentPassword" placeholder="**********" />
            </TextInput.root>
          </label>
          <Button className="mt-10" type="normal">
            UPDATE
          </Button>
          <Button className="mt-12 mb-12" type="delete">
            DELETE
          </Button>
        </form>
      </div>
    </div>
  )
}
