import { useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { signOut, useSession } from 'next-auth/react'
import {
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import ProfilePic from './ProfilePic'

export default function User() {
  const { data: session, status } = useSession()

  const [user, setUser] = useState<typeof session.user>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'authenticated') {
      setUser(session.user)
      setLoading(false)
    }
  }, [session, status])

  return (
    <>
      <div className="hidden lg:flex gap-5">
        <button className="header-btn">
          <UserCircleIcon />
          <span>Profile</span>
        </button>
        <button
          onMouseEnter={() =>
            document.querySelector('.bye')?.classList.add('-translate-y-1/2')
          }
          onMouseLeave={() =>
            document.querySelector('.bye')?.classList.remove('-translate-y-1/2')
          }
          className="select-none py-4 px-3 text-lg flex gap-3 items-center rounded-md transition hover:bg-red-700/50"
          onClick={() => signOut()}
        >
          <ProfilePic />
          <div className="overflow-hidden relative">
            {loading && (
              <div className="w-52 h-2 rounded bg-gray-500 animate-pulse"></div>
            )}
            {!loading && (
              <>
                <div className="bye transition flex flex-col absolute">
                  <span>Hey, </span>
                  <span>Bye, </span>
                </div>
                <div className="ml-11 font-medium">{user.name}</div>
              </>
            )}
          </div>
        </button>
      </div>

      {/* mobile */}
      <Menu as="div" className="relative block lg:hidden">
        <Menu.Button>
          <ProfilePic />
        </Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items
            as="ul"
            className="w-max absolute top-2 right-0 rounded-md bg-gray-800 p-2 drop-shadow-md before:content-['\01F891'] before:absolute before:bottom-[calc(100%)] before:right-2 before:text-gray-800 before:text-4xl"
          >
            <Menu.Item className="w-full mb-3" as="li">
              <button className="header-btn--mobile">
                <UserCircleIcon />
                <span>Profile</span>
              </button>
            </Menu.Item>
            <Menu.Item className="w-full" as="li">
              <button
                className="header-btn--mobile bg-red-700 hover:bg-red-600"
                onClick={() => signOut()}
              >
                <ArrowRightOnRectangleIcon />
                <span>Sign out</span>
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
