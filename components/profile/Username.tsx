import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Source_Code_Pro } from '@next/font/google'
import { XMarkIcon } from '@heroicons/react/24/outline'

const scp = Source_Code_Pro({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export default function Username() {
  const [username, setUsername] = useState('')

  return (
    <>
      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => undefined}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    🫗 Welcome to BeWater!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm">
                      Your account has been successfully created. Now it&apos;s
                      time to set your username, so that your friends will find
                      you easier.
                    </p>
                  </div>
                  <div className="mt-4 flex relative">
                    <span className="text-xl font-medium p-2">@</span>
                    <input
                      className={
                        scp.className +
                        ' p-2 text-xl flex-1 font-medium placeholder:font-normal rounded-lg bg-gray-700'
                      }
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="username"
                      minLength={3}
                      maxLength={20}
                    />
                    <Transition
                      as={Fragment}
                      appear
                      show={username !== ''}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <button
                        onClick={() => setUsername('')}
                        className="absolute top-1/2 right-2 transform-gpu -translate-y-1/2"
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </button>
                    </Transition>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      disabled={username === ''}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
