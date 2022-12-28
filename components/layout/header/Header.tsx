import Friends from './Friends'
import Logo from './Logo'
import User from './User'

export function HeaderUnauthenticated() {
  return (
    <header className="min-h-[68px] container my-5 flex items-center justify-center gap-5">
      <Logo />
    </header>
  )
}

export function HeaderAuthenticated() {
  return (
    <header className="container my-5 mx-auto flex items-center justify-between gap-5">
      <div className="order-1 lg:order-2">
        <Friends />
      </div>
      <div className="order-2 lg:order-1 lg:flex-1">
        <Logo />
      </div>
      <div className="order-3 lg:order-3">
        <User />
      </div>
    </header>
  )
}
