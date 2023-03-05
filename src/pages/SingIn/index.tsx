import { Link } from 'react-router-dom'

import { Heading } from '../../components/Heading'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'
import { CheckBox } from '../../components/CheckBox'
import { Button } from '../../components/Button'

import { Envelope, Lock, Check } from 'phosphor-react'

export function SignIn() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col justify-center items-center">
      <header className="text-center mb-28">
        <Heading
          className="text-gold-500 tracking-tighter mb-3 mt-28"
          size="sm"
        >
          MIRIC
        </Heading>
        <Text
          className="text-gray-400 line leading-5 tracking-widest"
          size="md"
        >
          Organize your favorites
        </Text>
      </header>
      <form action="" className="w-full max-w-xs flex flex-col items-center">
        <label htmlFor="email" className=" w-11/12 flex flex-col mb-12">
          <Text className="mb-2 ml-3">Email</Text>
          <TextInput.root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>
            <TextInput.input
              id="email"
              placeholder="notAndre@gmail.com"
              sizeText="sm"
              type="email"
            />
          </TextInput.root>
        </label>

        <label htmlFor="password" className=" w-11/12 flex flex-col mb-12">
          <Text className="mb-2 ml-3">Password</Text>
          <TextInput.root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>
            <TextInput.input
              id="password"
              placeholder="*************"
              sizeText="sm"
              type="password"
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
          <Text className="text-gray-400">Remember me for 30 days</Text>
        </label>
        <Button className="mt-8 " type="normal">
          SIGN IN
        </Button>
      </form>
      <footer className="text-left flex flex-col gap-4 mb-28 mt-16">
        <Text className="text-gray-400" size="sm">
          Did forget your password?{' '}
          <a className=" cursor-pointer text-gold-500 hover:text-gold-200">
            Click here!
          </a>
        </Text>
        <Text className="text-gray-400" size="sm">
          Don't you have account?{' '}
          <a className="text-gold-500 cursor-pointer hover:text-gold-200">
            Sing up here!
          </a>
        </Text>
      </footer>
    </div>
  )
}
