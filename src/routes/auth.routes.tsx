import { Home } from '../pages/Home'
import { Config } from '../pages/Config'
import { Account } from '../pages/Account'
import { NewMedia } from '../pages/NewMedia'
import { MediaInfo } from '../pages/MediaInfo'
import { About } from '../pages/About'

import { Route, Routes } from 'react-router-dom'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/config" element={<Config />} />
      <Route path="/account" element={<Account />} />
      <Route path="/newmedia" element={<NewMedia />} />
      <Route path="/mediainfo/:id" element={<MediaInfo />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
