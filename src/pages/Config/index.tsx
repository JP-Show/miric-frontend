import { Link } from 'react-router-dom'
import { Heading } from '../../components/Heading'
import { useAuth } from '../../hooks/auth'

export function Config() {
  const { signOut } = useAuth()

  function handleLogout() {
    signOut()
  }

  return (
    <div className="flex justify-center items-center bg-gray-900 w-screen h-screen absolute ">
      <ul className="flex flex-col text-center">
        <Heading
          asChild={true}
          size="sm"
          className="mb-10 text-white hover:text-gold-500"
        >
          <Link to="/account">
            <li>Account</li>
          </Link>
        </Heading>
        <Heading
          asChild={true}
          size="sm"
          className="mb-10 text-white hover:text-gold-500"
        >
          <Link to="/about">
            <li>About</li>
          </Link>
        </Heading>
        <Heading
          asChild={true}
          size="sm"
          className="mb-10 text-white hover:text-gold-500"
        >
          <Link to="/">
            <li onClick={handleLogout}>Logout</li>
          </Link>
        </Heading>
        <Heading
          asChild={true}
          size="sm"
          className="mb-10 text-white hover:text-gold-500"
        >
          <Link to="/">
            <li>Back</li>
          </Link>
        </Heading>
      </ul>
    </div>
  )
}
