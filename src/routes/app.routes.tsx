import { Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/SingIn'
import { SignUp } from '../pages/SingUp'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
