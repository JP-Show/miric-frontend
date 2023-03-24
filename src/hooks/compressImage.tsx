import { useState } from 'react'

export function compressImage(fileSource: FileList | null) {
  const [sourceImg, setSourceImg] =
    useState<string | ArrayBuffer | null | undefined>(null)
  function handleConvertImage64(file: FileList | null) {
    file = fileSource
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
  return handleCompressCover()
}
