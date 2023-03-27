import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Heading } from '../../components/Heading'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'
import { CheckBox } from '../../components/CheckBox'
import { Button } from '../../components/Button'

import { Envelope, Lock, Check } from 'phosphor-react'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  function handleLogin() {
    try {
      signIn({ email, password })
    } catch (err) {
      console.log(err)
    }
  }

  alert(
    'Bem-vindo ao meu Miric, esse site é um projetinho para adicionar ao meu portifolio. Acesse github.com/JP-Show/miric-frontend para mais informações :)'
  )

  return (
    <div className="h-max w-screen bg-gray-900 flex flex-col justify-center items-center">
      <header className="text-center mb-28 ">
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
        className="w-full max-w-xs flex flex-col items-center lg:max-w-sm"
      >
        <label htmlFor="email" className="w-11/12 flex flex-col mb-12">
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

        <label htmlFor="password" className="w-11/12 flex flex-col mb-12 ">
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
        <label
          htmlFor="rememberThirty"
          className=" ml-2 self-start flex gap-3 items-center"
        >
          <CheckBox.root>
            <CheckBox.input id="rememberThirty" />
            <CheckBox.icon>
              <Check weight="bold" />
            </CheckBox.icon>
          </CheckBox.root>
          <Text className="text-gray-400 lg:text-md">
            Remember me for 30 days
          </Text>
        </label>
      </form>
      <Button onClick={handleLogin} className="mt-8 w-72" types="normal">
        SIGN IN
      </Button>
      <footer className="text-left flex flex-col gap-4 mb-28 mt-16">
        {/* <Text className="text-gray-400 lg:text-sm" size="sm">
          Did forget your password?{' '}
          <a className=" cursor-pointer text-gold-500 hover:text-gold-200 ">
            Click here!
          </a>
        </Text> */}
        <Text className="text-gray-400 lg:text-sm" size="sm">
          Don't you have account?{' '}
          <Link
            to="/signup"
            className="text-gold-500 cursor-pointer hover:text-gold-200"
          >
            Sign up here!
          </Link>
        </Text>
      </footer>
    </div>
  )
}
