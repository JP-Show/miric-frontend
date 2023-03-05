import { Button } from '../../components/Button'
import { ButtonString } from '../../components/ButtonString'
import { ButtonIcon } from '../../components/ButtonIcon'

import { MagnifyingGlass, Gear } from 'phosphor-react'

export function Home() {
  return (
    <div className="bg-gray-900 w-screen h-screen absolute">
      <header className="flex gap-6 mt-6 mr-6 ml-6">
        <ButtonIcon.root>
          <ButtonIcon.icon>
            <MagnifyingGlass />
          </ButtonIcon.icon>
          <ButtonIcon.input />
        </ButtonIcon.root>
        <Button type="normal">New Media</Button>
        <ButtonIcon.root>
          <ButtonIcon.icon>
            <Gear weight="fill" />
          </ButtonIcon.icon>
        </ButtonIcon.root>
      </header>
      
    </div>
  )
}
