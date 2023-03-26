import { useEffect, useMemo, useState } from 'react'

import { Button } from '../../components/Button'
import { ButtonString } from '../../components/ButtonString'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Card } from '../../components/Card'
import { Text } from '../../components/Text'

import { MediaController, IMedia, ICateg } from '../../hooks/MediaController'

import { MagnifyingGlass, Gear } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import noneCover from '../../img/noneCover.png'

export function Home() {
  const { user } = useAuth()

  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(10)
  const [selectTags, setSelectTags] = useState<String[]>([])
  const [filteredCards, setFilteredCards] = useState<Array<IMedia>>()
  const [search, setSearch] = useState<string>('')

  const medias: Array<IMedia> = new MediaController().show()

  function HandleAddSelectTags(nameTag: string) {
    const alreadySelected = selectTags.includes(nameTag)
    if (alreadySelected) {
      const filteredTags = selectTags.filter(tag => tag !== nameTag)
      setSelectTags(filteredTags)
    } else {
      setSelectTags(prevState => [...prevState, nameTag])
      console.log(selectTags)
    }
  }

  const tags = medias?.map((media: IMedia) => {
    return media.categ.map((tag: ICateg) => {
      return {
        name: tag.name,
        create_at: tag.create_at
      }
    })
  })
  const tagsOneArray = tags[0].concat(tags[1])

  function handleMediaInfo(idTitle: string) {
    navigate(`mediainfo/${idTitle}`)
  }

  // useEffect(() => {
  //   const intersectionObserver = new IntersectionObserver(entries => {
  //     if (entries.some(entries => entries.isIntersecting))
  //       setCurrentPage(inside => inside + 8)
  //   })
  //   intersectionObserver.observe(document.getElementById('sentinel')!)

  //   return () => intersectionObserver.disconnect()
  // }, [])

  useEffect(() => {
    if (selectTags.length === 0) {
      setFilteredCards(medias)
    }

    let filtered = medias.filter((media: IMedia) => {
      return selectTags.every(tag =>
        media.categ.map(tags => tags.name).includes(String(tag))
      )
    })

    const regex = new RegExp(search, 'i')

    filtered = filtered.filter((media: IMedia) => {
      return regex.test(media.title!)
    })

    setFilteredCards(filtered)
  }, [selectTags, search])

  return (
    <div className="h-screen w-full absolute">
      <div className="lg:h-screen lg:grid lg:grid-rows-[20%_80%]">
        <header>
          <nav>
            <ul className="flex gap-3 ml-8 mr-8 mt-8 mb-8 items-center lg:justify-between">
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
                  <ButtonIcon.input onChange={e => setSearch(e.target.value)} />
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
        <div className="lg:h-full lg:grid lg:grid-cols-[20%_auto]">
          <nav
            id="tags"
            className="ml-8 mr-8 flex flex-col items-center justify-between lg:mr-0 lg:ml-0 lg:max-h-screen lg:grid lg:grid-rows-[80%_20%] lg:grid-cols-1 lg:h-full lg:w-full grid-nowrap lg:items-start overflow-y-auto"
          >
            <ul className=" w-full gap-2 grid grid-rows-3 grid-flow-col lg:flex lg:flex-col  lg:overflow-y-auto lg:gap-6 lg:max-h-[100%] lg:items-center">
              {medias &&
                // tags.filter((tag, index, self) => {
                //   // console.log(self.indexOf(tag), index)
                //   return self.indexOf(tag) === index

                tagsOneArray
                  ?.filter((tag, index, self) => {
                    // console.log(self.map(e => e.name).indexOf(tag.name), index)
                    return self.map(e => e.name).indexOf(tag.name) === index
                  })
                  .map(categ => (
                    <ButtonString.root
                      isActive={selectTags.includes(categ.name!)}
                      key={String(categ.create_at)}
                      asChild={true}
                      className=" mx-auto my-auto w-min lg:w-auto justify-center lg:break-all font-bold lg:text-md "
                    >
                      <li onClick={() => HandleAddSelectTags(categ.name!)}>
                        {categ.name}
                      </li>
                    </ButtonString.root>
                  ))}
            </ul>

            <Button
              asChild={true}
              className="hidden lg:flex lg:w-full lg:h-full justify-center items-center "
              types="normal"
            >
              <Link to="/newmedia">NEW MEDIA</Link>
            </Button>
          </nav>

          <section className="mt-5 mx-6 mb-8 flex lg:overflow-auto">
            <ul
              className="flex gap-3 justify-center flex-wrap overflow-auto
            lg:nowrap 
            lg:grid 
            lg:grid-rows-2 
            lg:grid-flow-col 
            lg:auto-cols-auto
            lg:gap-5
            lg:h-auto"
            >
              {filteredCards
                ? filteredCards.slice(0, currentPage).map((media: IMedia) => (
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
