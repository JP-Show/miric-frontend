import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { MediaController, IMedia, ICateg } from '../../hooks/MediaController'

import { Card } from '../../components/Card'
import { ButtonIcon } from '../../components/ButtonIcon'
import { TextInput } from '../../components/TextInput'
import { Text } from '../../components/Text'
import { ButtonString } from '../../components/ButtonString'
import { Button } from '../../components/Button'

import { Camera, Plus, ArrowLeft, CaretDown } from 'phosphor-react'

export function MediaInfo() {
  const params = useParams()
  const navigate = useNavigate()
  const obj: Array<IMedia> = JSON.parse(localStorage.getItem('@Media')!)

  const mediaArray = obj.filter(media => media.title == params.id)
  const media: IMedia = mediaArray[0]

  const [tag, useTag] = useState<ICateg>({
    create_at: new Date(),
    name: ''
  })
  const [categ, useCateg] = useState<Array<ICateg>>([])

  const [desc, setDesc] = useState<string>(media.desc!)
  const [status, setStatus] = useState<string>(media.status!)

  const [sourceImg, setSourceImg] = useState<
    string | ArrayBuffer | null | undefined
  >(media.cover)

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

  async function handleUpdateMedia() {
    const cover = await handleCompressCover()
    const title = media.title
    const newMedias = obj.filter(media => media.title !== params.id)
    localStorage.setItem('@Media', JSON.stringify(newMedias))
    new MediaController().update({
      title,
      desc,
      status,
      categ,
      cover
    })
    alert('successfully updated')
    navigate('/')
  }

  function handleBack() {
    navigate('/')
  }
  function handleAddCateg() {
    useCateg(prevState => [...prevState, tag])
  }

  function handleRemoveTag(deleted: string) {
    const pim = useCateg(prevState =>
      prevState.filter(item => item.name !== deleted)
    )
  }

  function handleRemoveMedia() {
    new MediaController().delete(params.id!)
    navigate('/')
  }

  useEffect(() => {
    ;(document.getElementById('description') as HTMLInputElement)!.value =
      media.desc!
    ;(document.getElementById('status') as HTMLInputElement)!.value =
      media.status!
    useCateg(media.categ!)
  }, [])

  return (
    <div className="bg-gray-900 w-screen h-auto">
      <ButtonIcon.root onClick={handleBack} className="absolute left-3 top-3">
        <ArrowLeft />
      </ButtonIcon.root>
      <div className="flex flex-col items-center">
        <form className="max-w-sm w-full flex flex-col items-center ml-5 mr-5 mb-8 mt-7">
          <div className="relative mb-16 ">
            <Card asChild={true} img={String(media.cover ?? '')} />

            <label htmlFor="newImage" className="absolute -right-7 -bottom-5">
              <ButtonIcon.root asChild={true} className="w-14 h-14">
                <span>
                  <ButtonIcon.icon>
                    <Camera weight="bold" className="h-10 w-10" />
                  </ButtonIcon.icon>
                  <input
                    id="newImage"
                    type="file"
                    className=" opacity-0 w-0 h-0 "
                    accept=".jpg, .jpeg, .png"
                    onChange={e => handleConvertImage64(e.target.files)}
                  />
                </span>
              </ButtonIcon.root>
            </label>
          </div>
          <label htmlFor="title" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Title</Text>
            <TextInput.root>
              <TextInput.input
                placeholder="Title"
                id="title"
                type="text"
                readOnly
                defaultValue={media.title}
              />
            </TextInput.root>
          </label>

          <label htmlFor="description" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Description</Text>
            <TextInput.root className="h-28 items-baseline">
              <textarea
                id="description"
                placeholder="Description"
                className="h-24 bg-transparent flex-1 text-gray-200  placeholder:text-gray-400 outline-none resize-none"
                onChange={e => setDesc(e.target.value)}
              />
            </TextInput.root>
          </label>

          <label htmlFor="Status" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Status</Text>

            <TextInput.root asChild={true} className="bg-gradient-to-tl">
              <select
                id="status"
                className="text-gray-200 appearance-none outline-none"
                onChange={e =>
                  setStatus(e.target.value ? e.target.value : media.status!)
                }
              >
                <option value="watching">Watching/reading</option>
                <option value="planToWatch">Plan to watch/read</option>
                <option value="completed">Completed</option>
                <option value="drop">Drop</option>
              </select>
            </TextInput.root>
          </label>
          <label htmlFor="tags" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Categories</Text>

            <TextInput.root>
              <TextInput.input
                onChange={e =>
                  useTag({
                    create_at: new Date(),
                    name: e.target.value
                  })
                }
                placeholder="Tags"
                id="tags"
                type="text"
              />
              <TextInput.icon type="plus">
                <Plus onClick={handleAddCateg} />
              </TextInput.icon>
            </TextInput.root>
          </label>
          <div
            className="w-11/12
         flex flex-wrap justify-center gap-5 mb-8 mt-5"
          >
            {categ.map((item, key) =>
              categ.length == 0 ? (
                ''
              ) : (
                <ButtonString.root key={key} asChild={true}>
                  <span onClick={() => handleRemoveTag(String(item.name))}>
                    {item.name}
                  </span>
                </ButtonString.root>
              )
            )}
          </div>
          <Button type="button" types="normal" onClick={handleUpdateMedia}>
            UPDATE
          </Button>
          <Button
            className="mt-6"
            type="button"
            types="delete"
            onClick={handleRemoveMedia}
          >
            DELETE MEDIA
          </Button>
        </form>
      </div>
      <div id="mm"></div>
      {/* <img src={String(cover64)} alt="" />
       */}
    </div>
  )
}
