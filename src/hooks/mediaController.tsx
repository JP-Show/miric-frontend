enum Categ {
  watching = 'watching/reading',
  planToWatch = 'plan to watch/read',
  completed = 'completed',
  drop = 'drop'
}

interface IMedia {
  title: string
  desc: string
  status: string
  categ: Categ
  cover: string
}

interface IMediaController {
  create: (credentials: IMedia) => void
}

export class MediaController implements IMediaController {
  create(credentials: IMedia) {
    
  }
}
