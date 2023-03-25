import { useEffect, useState } from 'react'

import { Button } from '../../components/Button'
import { ButtonString } from '../../components/ButtonString'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'

import { MediaController, IMedia } from '../../hooks/MediaController'

import { MagnifyingGlass, Gear } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import noneCover from '../../img/noneCover.png'

export function Home() {
  const { user } = useAuth()
  console.log(user?.avatar)

  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(10)

  const medias = new MediaController().show()

  console.log(medias)

  const tagObject = [
    {
      id: 1,
      anime_id: 1,
      name: 'Drama'
    },
    {
      id: 2,
      anime_id: 1,
      name: 'Suspense'
    },
    {
      id: 3,
      anime_id: 1,
      name: 'TVShow'
    },
    {
      id: 4,
      anime_id: 1,
      name: 'War'
    },
    {
      id: 5,
      anime_id: 1,
      name: 'Anime'
    },
    {
      id: 6,
      anime_id: 1,
      name: 'Terror'
    },
    {
      id: 7,
      anime_id: 1,
      name: 'Terror'
    },
    {
      id: 8,
      anime_id: 1,
      name: 'Terror'
    },
    {
      id: 9,
      anime_id: 1,
      name: 'Terror'
    }
  ]

  function handleMediaInfo(idTitle: string) {
    navigate(`mediainfo/${idTitle}`)
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entries => entries.isIntersecting))
        setCurrentPage(inside => inside + 8)
      console.log('está visivel ' + currentPage)
    })
    intersectionObserver.observe(document.getElementById('sentinel')!)

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <div className="h-screen w-full absolute">
      <div className="lg:h-full lg:grid lg:grid-rows-[15%_85%]">
        <header>
          <nav>
            <ul className="flex gap-3 ml-8 mt-8 items-center lg:justify-between">
              <li className="hidden lg:block">
                <Link className="flex items-center gap-4" to="/account">
                  <img
                    className="h-28 w-28 rounded-full object-cover"
                    src={user?.avatar ? user?.avatar : noneCover}
                    alt=""
                  />
                  <Text className="lg:text-lg">André Luiz</Text>
                </Link>
              </li>

              <li className="lg:w-8/12 lg:flex lg:justify-center">
                <ButtonIcon.root className="lg:w-3/4">
                  <ButtonIcon.icon className="lg:hidden">
                    <MagnifyingGlass />
                  </ButtonIcon.icon>
                  <ButtonIcon.input />
                </ButtonIcon.root>
              </li>

              <li className="flex w-full justify-center items-center lg:hidden">
                <Button types="normal" asChild={true}>
                  <Link to={'/newmedia'}>New Media</Link>
                </Button>
              </li>

              <li>
                <ButtonIcon.root className="lg:hidden">
                  <Link to="/config">
                    <ButtonIcon.icon>
                      <Gear weight="fill" />
                    </ButtonIcon.icon>
                  </Link>
                </ButtonIcon.root>
              </li>
            </ul>
          </nav>
        </header>
        <div className="lg:grid lg:grid-cols-[20%_auto]">
          <nav
            id="tags"
            className="flex flex-col items-center justify-between lg:items-start mt-8"
          >
            <ul className="flex flex-wrap lg:flex-col gap-2 w-full justify-center lg:items-center lg:gap-6">
              {tagObject.map(categ => (
                <li key={categ.id}>
                  <ButtonString.root className="font-bold lg:text-md">
                    {categ.name}
                  </ButtonString.root>
                </li>
              ))}
            </ul>

            <Button
              asChild={true}
              className="hidden lg:flex w-full h-1/5 justify-center items-center"
              types="normal"
            >
              <Link to="/newmedia">NEW MEDIA</Link>
            </Button>
          </nav>

          <section className="mt-5 mx-6 mb-8 flex lg:overflow-auto">
            <ul
              className="flex gap-3 justify-center flex-wrap 
            lg:nowrap 
            lg:grid 
            lg:grid-rows-2 
            lg:grid-flow-col 
            lg:auto-cols-auto
            lg:gap-5
            lg:h-auto"
            >
              {medias
                ? medias.slice(0, currentPage).map((media: IMedia) => (
                    <li
                      key={String(media.createAt)}
                      onClick={() => handleMediaInfo(media.title!)}
                    >
                      <Card
                        key={String(media.createAt)}
                        img={media.cover}
                        title={media.title}
                      ></Card>
                    </li>
                  ))
                : ''}
              <li className="h-1 w-1" id="sentinel"></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
