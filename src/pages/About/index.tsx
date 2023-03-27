import { Link, useNavigate } from 'react-router-dom'
import { Text } from '../../components/Text'
import { Heading } from '../../components/Heading'
import { ButtonIcon } from '../../components/ButtonIcon'
import { ArrowLeft } from 'phosphor-react'

export function About() {
  const navigate = useNavigate()
  function handleBack() {
    navigate(-1)
  }

  return (
    <div className=" bg-gray-900 w-screen h-screen absolute">
      <ButtonIcon.root onClick={handleBack} className="absolute left-3 top-3">
        <ArrowLeft />
      </ButtonIcon.root>
      <div className="flex flex-col justify-center items-center ">
        <header className="text-center mb-16 ">
          <Heading
            className="text-gold-500 tracking-tighter mb-3 lg:text-2xl lg:mb-1"
            size="sm"
          >
            MIRIC
          </Heading>
          <Text
            className="text-gray-400 line leading-5 tracking-widest lg:text-md"
            size="md"
          >
            Organize your favorites
          </Text>
        </header>
        <div className="text-center mr-8 ml-8 mb-28">
          <Text asChild={true} className="text-md lg:text-lg">
            <p>
              This is a another version of Miric, this version use localstorage
              instead Postgres or other relation database, this version was
              developer for to be presentation within my portfolio, so it don’t
              save any data or medias, account stay saved into your browser, if
              case you change your browser or clear your data of your browser,
              medias saved and account it’ll be deleted (in case changed
              browser, it’ll not show up but your medias and account stay in
              browser where you created the account )
            </p>
          </Text>
          <br />
          <Text className="text-md lg:text-lg">
            <p>
              I still developing, so if case you downloaded repository and you
              running in your PC, don’t panic if it’s different from the website
              hahaha I'm just developing and improving something in the
              interface.
              <a
                target="_blank"
                className="text-gold-500"
                href="https://github.com/JP-Show/miric-frontend"
              >
                {' repositorio of site'}
              </a>
            </p>
          </Text>
          <br />
          <Text className="text-md lg:text-lg">
            <p>
              In pages you can access the site's storybook, where you have the
              components made for this site
            </p>
          </Text>
        </div>
      </div>
    </div>
  )
}
