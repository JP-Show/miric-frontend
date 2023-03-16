import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Card } from '../../components/Card'
import { ButtonIcon } from '../../components/ButtonIcon'
import { TextInput } from '../../components/TextInput'
import { Text } from '../../components/Text'
import { ButtonString } from '../../components/ButtonString'
import { Button } from '../../components/Button'

import { Camera, Plus, ArrowLeft } from 'phosphor-react'

export function NewMedia() {
  const navigate = useNavigate()

  const [tag, useTag] = useState('')
  const [tags, useTags] = useState<string[]>([])

  const [cover, setCover] = useState<FileList | null>()
  const [cover64, setCover64] = useState<string | ArrayBuffer | null>()
  const [newCover64, setNewCover64] =
    useState<CanvasRenderingContext2D | null>()

  function handleConvertImage() {
    const image = cover![0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(image)

    fileReader.onload = function (e) {
      const image64 = e.target?.result
      setCover64(image64)
      const newImage: HTMLImageElement = document.createElement('img')
      newImage.src = String(image)

      newImage.onload = function (e) {
        const canvas: HTMLCanvasElement = document.createElement('canvas')
        const ratio = 800 / (e.target as HTMLImageElement).width
        canvas.width = 800
        canvas.height = (e.target as HTMLImageElement).height * ratio

        const context = canvas.getContext('2d')
        context?.drawImage(newImage, 0, 0, canvas.width, canvas.height)

        setNewCover64(context)
      }
    }
    console.log(newCover64)
    console.log(cover64)
  }

  function handleBack() {
    navigate(-1)
  }

  function handleAddTags() {
    useTags(prevState => [...prevState, tag])
  }

  function handleRemoveTag(deleted: string) {
    const pim = useTags(prevState => prevState.filter(item => item !== deleted))
    console.log(pim)
  }

  useEffect(() => {}, [])

  return (
    <div className="bg-gray-900 w-screen h-auto">
      <ButtonIcon.root onClick={handleBack} className="absolute left-3 top-3">
        <ArrowLeft />
      </ButtonIcon.root>
      <div className="flex flex-col items-center">
        <form className="max-w-sm w-full flex flex-col items-center ml-5 mr-5 mb-8 mt-7">
          <div className="relative mb-16 ">
            <Card asChild={true} />
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
                    onChange={e => setCover(e.target.files)}
                  />
                </span>
              </ButtonIcon.root>
            </label>
          </div>
          <label htmlFor="title" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Title</Text>
            <TextInput.root>
              <TextInput.input placeholder="Title" id="title" type="text" />
            </TextInput.root>
          </label>

          <label htmlFor="description" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Description</Text>
            <TextInput.root className="h-28 items-baseline">
              <textarea
                id="description"
                placeholder="Description"
                className="h-24 bg-transparent flex-1 text-gray-200  placeholder:text-gray-400 outline-none resize-none"
              />
            </TextInput.root>
          </label>

          <label htmlFor="Status" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Status</Text>
            <TextInput.root>
              <select
                placeholder="kajhdaskjdhas"
                className="flex flex-1 h-12  bg-gray-600 border-none text-gray-200 outline-none"
              >
                <option value="watching">Watching/reading</option>
                <option value="planToWatch">Plan to watch/read</option>
                <option value="completed">Completed</option>
                <option value="drop">Drop</option>
              </select>
            </TextInput.root>
          </label>
          <label htmlFor="tags" className="w-11/12 flex flex-col mb-3">
            <Text className="mb-2 ml-3">Title</Text>
            <TextInput.root>
              <TextInput.input
                onChange={e => useTag(e.target.value)}
                placeholder="Tags"
                id="tags"
                type="text"
              />
              <TextInput.icon type="plus">
                <Plus onClick={handleAddTags} />
              </TextInput.icon>
            </TextInput.root>
          </label>
          <div
            className="w-11/12
         flex flex-wrap justify-center gap-5 mb-8 mt-5"
          >
            {tags.map(item =>
              tags.length == 0 ? (
                ''
              ) : (
                <ButtonString.root asChild={true}>
                  <span onClick={() => handleRemoveTag(item)}>{item}</span>
                </ButtonString.root>
              )
            )}
          </div>
          <Button types="normal" onClick={handleConvertImage}>
            ADD MEDIA
          </Button>
        </form>
        <Button types="normal" onClick={handleConvertImage}>
          ADD MEDIA
        </Button>
      </div>
      <img src={String(cover64)} alt="" />
      <img src="" alt="" />
    </div>
  )
}
