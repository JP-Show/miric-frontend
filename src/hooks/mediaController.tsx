enum Categ {
  watching = 'watching/reading',
  planToWatch = 'plan to watch/read',
  completed = 'completed',
  drop = 'drop'
}

interface IMedia {
  title: string | undefined
  desc: string | undefined
  status: string | undefined
  categ: string[] | undefined
  cover: string | undefined
}

interface IMediaController {
  create: (credentials: IMedia) => void
}

export class MediaController implements IMediaController {
  create(credentials: IMedia) {
    try {
      const newMedia = {
        title: credentials.title,
        desc: credentials.desc,
        status: credentials.status,
        categ: credentials.categ,
        cover: credentials.cover
      }

      const medias: Array<IMedia> = JSON.parse(localStorage.getItem('@Media')!)

      if (medias) {
        console.log(medias)
        let ifExist: boolean = false
        medias.map(item => {
          if (item.title == newMedia.title) {
            ifExist = true
          }
        })
        if (ifExist) {
          alert('Title already exist')
          return
        }
      }

      if (medias) {
        medias.push(newMedia)

        localStorage.setItem(`@Media`, JSON.stringify(medias))
        return
      } else {
        console.log('novo')
        localStorage.setItem(`@Media`, JSON.stringify([newMedia]))
        return
      }
    } catch (error) {
      throw error
    }
  }

  show() {
    const object = JSON.parse(localStorage.getItem('@Media')!)
    return object
  }
}
