import { Home } from '../pages/Home'
import { Config } from '../pages/Config'
import { Account } from '../pages/Account'
import { NewMedia } from '../pages/NewMedia'

import { Route, Routes } from 'react-router-dom'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/config" element={<Config />} />
      <Route path="/account" element={<Account />} />
      <Route path="/newmedia" element={<NewMedia />} />
    </Routes>
  )
}
