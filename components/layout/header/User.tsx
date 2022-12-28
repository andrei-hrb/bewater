import Image from 'next/image'
import { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react'
import {
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'

export default function User({ user }) {
  const image = user.image
  const name = user.name

  const [bye, setBye] = useState(false)

  const showBye = (value: boolean) => setBye(value)

  return (
    <>
      <div className="hidden md:flex gap-5">
        <button className="flex gap-3 transition hover:bg-gray-700 rounded-md py-4 px-3 items-center">
          <UserCircleIcon className="inline w-8 h-8" />
          <span className="text-lg">Profile</span>
        </button>
        <button
          onMouseEnter={() => showBye(true)}
          onMouseLeave={() => showBye(false)}
          className="select-none py-4 px-3 text-lg flex gap-3 items-center rounded-md transition hover:bg-red-700/50"
        >
          <Image
            className="rounded-full select-none"
            width={32}
            height={32}
            src={image}
            alt="User profile picture"
          />
          <div className="overflow-hidden relative">
            <div
              className={
                (bye && '-translate-y-1/2') +
                ' transition flex flex-col absolute'
              }
            >
              <span>Hey, </span>
              <span>Bye, </span>
            </div>
            <div className="ml-11 font-medium">{name}</div>
          </div>
        </button>
      </div>
      <Menu as="div" className="relative block md:hidden">
        <Menu.Button>
          <>
            <Image
              className="rounded-full"
              width={44}
              height={44}
              src={image}
              alt="User profile picture"
            />
          </>
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
            className="w-max absolute top-2 right-0 rounded-md bg-gray-600 p-2 drop-shadow-md"
          >
            <Menu.Item className="w-full pb-2" as="li">
              <button className="w-full py-2 px-3 text-lg transition bg-gray-700 hover:bg-gray-800 rounded-md flex gap-2 items-center">
                <UserCircleIcon className="inline w-5 h-5" />
                <span>Profile</span>
              </button>
            </Menu.Item>
            <Menu.Item className="w-full" as="li">
              <button
                className="w-full py-2 px-3 text-lg transition bg-red-600 hover:bg-red-700 rounded-md flex gap-2 items-center"
                onClick={() => signOut()}
              >
                <ArrowRightOnRectangleIcon className="inline w-5 h-5" />
                <span>Sign out</span>
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
