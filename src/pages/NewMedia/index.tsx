import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { MediaController } from '../../hooks/MediaController'

import { Card } from '../../components/Card'
import { ButtonIcon } from '../../components/ButtonIcon'
import { TextInput } from '../../components/TextInput'
import { Text } from '../../components/Text'
import { ButtonString } from '../../components/ButtonString'
import { Button } from '../../components/Button'
import * as Select from '@radix-ui/react-select'

import { Camera, Plus, ArrowLeft, CaretDown } from 'phosphor-react'
import React from 'react'

export function NewMedia() {
  const navigate = useNavigate()

  const [tag, useTag] = useState('')
  const [categ, useCateg] = useState<string[]>([])

  const [title, setTitle] = useState<string>()
  const [desc, setDesc] = useState<string>()
  const [status, setStatus] = useState<string>('watching')

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

        // const resizedImg = new Image()
        // resizedImg.src = newImageURL
        // console.log(sourceImg)
        // console.log(newImageURL)
        // document.getElementById('mm')?.appendChild(resizedImg)

        resolve(newImageURL)
      }
    })
    return FinalImg
  }

  async function handleMedia() {
    const cover = await handleCompressCover()

    new MediaController().create({ title, desc, status, categ, cover })
  }

  function handleBack() {
    navigate(-1)
  }
  function handleAddCateg() {
    useCateg(prevState => [...prevState, tag])
  }

  function handleRemoveTag(deleted: string) {
    const pim = useCateg(prevState =>
      prevState.filter(item => item !== deleted)
    )
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
            <Card asChild={true} img={String(sourceImg ?? '')} />

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
                onChange={e => setTitle(e.target.value)}
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
                className="text-gray-200 appearance-none outline-none"
                onChange={e => setStatus(e.target.value)}
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
                  <span onClick={() => handleRemoveTag(item)}>{item}</span>
                </ButtonString.root>
              )
            )}
          </div>
          <Button types="normal">ADD MEDIA</Button>
        </form>
        <Button types="normal" onClick={handleMedia}>
          ADD MEDIA
        </Button>
      </div>
      <div id="mm"></div>
      {/* <img src={String(cover64)} alt="" />
       */}
    </div>
  )
}
