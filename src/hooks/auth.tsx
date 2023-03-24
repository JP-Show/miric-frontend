import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

import { UserController, usuario } from './UserController'

interface IAuthProviderProps {
  children: ReactNode
}

interface ISignIn {
  email: string
  password: string
}

interface IAuthContext {
  user: usuario | undefined
  signIn: (credentials: ISignIn) => void
  signOut: () => void
}

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  signIn: () => {},
  signOut: () => {}
})

function AuthProvider({ children }: IAuthProviderProps) {
  const [data, setData] = useState<usuario>()

  function handleSignOut() {
    localStorage.removeItem('@logged')
    setData(undefined)
  }

  function handleSignIn(credentials: ISignIn) {
    const user = new UserController().login(
      credentials.email,
      credentials.password
    )
    setData(user)
    localStorage.setItem(`@logged`, JSON.stringify(user ?? ''))
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(`@logged`)!)
    setData(user)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data, signIn: handleSignIn, signOut: handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
