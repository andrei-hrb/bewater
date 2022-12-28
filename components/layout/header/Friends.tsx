import { UserPlusIcon } from '@heroicons/react/24/solid'

export default function Friends() {
  return (
    <button className="flex gap-3 transition hover:bg-gray-700 rounded-md py-4 px-3 items-center">
      <UserPlusIcon className="inline w-8 h-8" />
      <span className="text-lg">Friends</span>
    </button>
  )
}
