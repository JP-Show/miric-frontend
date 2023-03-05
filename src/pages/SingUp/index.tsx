import { Link } from 'react-router-dom'

import { Heading } from '../../components/Heading'
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput'
import { Button } from '../../components/Button'

import { Envelope, Lock, IdentificationCard } from 'phosphor-react'

export function SignUp() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col justify-center items-center">
      <header className="text-center mb-10">
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
        <label htmlFor="firstName" className=" w-11/12 flex flex-col mb-6">
          <Text className="mb-2 ml-3">First Name</Text>
          <TextInput.root>
            <TextInput.icon>
              <IdentificationCard />
            </TextInput.icon>
            <TextInput.input
              id="firstName"
              placeholder="Andre"
              sizeText="sm"
              type="text"
            />
          </TextInput.root>
        </label>
        <label htmlFor="lastName" className=" w-11/12 flex flex-col mb-6">
          <Text className="mb-2 ml-3">Last Name</Text>
          <TextInput.root>
            <TextInput.icon>
              <IdentificationCard />
            </TextInput.icon>
            <TextInput.input
              id="lastName"
              placeholder="Luiz"
              sizeText="sm"
              type="text"
            />
          </TextInput.root>
        </label>
        <label htmlFor="email" className=" w-11/12 flex flex-col mb-6">
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
        <label htmlFor="password" className="w-11/12 flex flex-col mb-6">
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

        <label htmlFor="passwordAgain" className=" w-11/12 flex flex-col mb-6">
          <Text className="mb-2 ml-3">Password Again</Text>
          <TextInput.root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>
            <TextInput.input
              id="passwordAgain"
              placeholder="*************"
              sizeText="sm"
              type="password"
            />
          </TextInput.root>
        </label>

        <Button className="mt-10 " type="normal">
          SIGN UP
        </Button>
      </form>
      <footer className="text-left flex flex-col gap-4 mb-28 mt-16">
        <Text className="text-gray-400" size="md">
          Do you have account?{' '}
          <a className=" cursor-pointer text-gold-500 hover:text-gold-200">
            Sing in here!
          </a>
        </Text>
      </footer>
    </div>
  )
}
