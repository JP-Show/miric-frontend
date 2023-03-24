export function compressImage(fileSource: FileList | null) {
  let sourceImg: string | ArrayBuffer | null | undefined = 'null'
  async function handleConvertImage64() {
    const file = fileSource
    console.log(file)
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
        sourceImg = e.target?.result
      }
    } catch (err) {
      console.log(err)
    }
  }

  handleConvertImage64()

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
    console.log(FinalImg)
    return FinalImg
  }

  return handleCompressCover()
}
