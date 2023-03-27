import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { UserController, usuario } from '../../hooks/UserController'

import { Heading } from '../../components/Heading'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'
import { Button } from '../../components/Button'

import { Envelope, Lock, IdentificationCard } from 'phosphor-react'

export function SignUp() {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [passwordAgain, setPasswordAgain] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const newUser: usuario = {
    firstName,
    lastName,
    email,
    password
  }!

  function handleNewUser() {
    try {
      const user = new UserController()
      user.create(newUser, passwordAgain)
      navigate('/')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    alert(
      'Bem-vindo ao meu Miric, esse site é um projetinho para adicionar ao meu portifolio. Acesse github.com/JP-Show/miric-frontend para mais informações :)'
    )
  }, [])

  return (
    <div className="h-auto w-screen lg:h-screen bg-gray-900 flex flex-col justify-center items-center">
      <header className="text-center mb-10">
        <Heading
          className="text-gold-500 tracking-tighter mb-3 mt-28 lg:text-2xl lg:mb-1"
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
      <form
        action=""
        className="flex flex-col lg:flex-row w-full lg:gap-7 justify-center max-w-xs"
      >
        <div className="lg:flex lg:flex-col">
          <label
            htmlFor="firstName"
            className="w-full flex flex-col mb-6 justify-center"
          >
            <Text className="mb-2 ml-3 lg:text-md">First Name</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input
                id="firstName"
                placeholder="Andre"
                sizeText="sm"
                type="text"
                onChange={e => setFirstName(e.target.value)}
              />
            </TextInput.root>
          </label>
          <label htmlFor="lastName" className="w-full flex flex-col mb-6">
            <Text className="mb-2 ml-3 lg:text-md">Last Name</Text>
            <TextInput.root>
              <TextInput.icon>
                <IdentificationCard />
              </TextInput.icon>
              <TextInput.input
                id="lastName"
                placeholder="Luiz"
                sizeText="sm"
                type="text"
                onChange={e => setLastName(e.target.value)}
              />
            </TextInput.root>
          </label>
        </div>
        <div className="lg:flex lg:flex-col">
          <label htmlFor="email" className=" w-full flex flex-col mb-6">
            <Text className="mb-2 ml-3 lg:text-md">Email</Text>
            <TextInput.root>
              <TextInput.icon>
                <Envelope />
              </TextInput.icon>
              <TextInput.input
                id="email"
                placeholder="example@gmail.com"
                sizeText="sm"
                type="email"
                onChange={e => setEmail(e.target.value)}
              />
            </TextInput.root>
          </label>
        </div>
        <div className="lg:flex lg:flex-col">
          <label htmlFor="password" className="w-full flex flex-col mb-6">
            <Text className="mb-2 ml-3 lg:text-md">Password</Text>
            <TextInput.root>
              <TextInput.icon>
                <Lock />
              </TextInput.icon>
              <TextInput.input
                id="password"
                placeholder="*************"
                sizeText="sm"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </TextInput.root>
          </label>
          <label htmlFor="passwordAgain" className=" w-full flex flex-col mb-6">
            <Text className="mb-2 ml-3 lg:text-md">Password Again</Text>
            <TextInput.root>
              <TextInput.icon>
                <Lock />
              </TextInput.icon>
              <TextInput.input
                id="passwordAgain"
                placeholder="*************"
                sizeText="sm"
                type="password"
                onChange={e => setPasswordAgain(e.target.value)}
              />
            </TextInput.root>
          </label>
        </div>
      </form>
      <Button
        type="button"
        onClick={handleNewUser}
        className="mt-10 w-72"
        types="normal"
      >
        SIGN UP
      </Button>
      <footer className="text-left flex flex-col gap-4 mb-28 mt-16">
        <Text className="text-gray-400" size="md">
          Do you have account?{' '}
          <Link
            to="/"
            className=" cursor-pointer text-gold-500 hover:text-gold-200"
          >
            Sign in here!
          </Link>
        </Text>
      </footer>
    </div>
  )
}
