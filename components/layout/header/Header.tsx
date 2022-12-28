import Friends from './Friends'
import Logo from './Logo'
import User from './User'

export default function Header({ user }) {
  return (
    <header className="container my-5 mx-auto flex items-center justify-between gap-5">
      <div className="order-1 md:order-2">
        <Friends />
      </div>
      <div className="order-2 md:order-1 md:flex-1">
        <Logo />
      </div>
      <div className="order-3 md:order-3">
        <User user={user} />
      </div>
    </header>
  )
}
