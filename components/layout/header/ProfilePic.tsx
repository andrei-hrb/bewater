import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function ProfilePic() {
  const { data: session, status } = useSession()

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <div className="animate-pulse rounded-full bg-gray-500 w-8 h-8 md:w-9 md:h-9" />
    )
  }

  return (
    <Image
      className="rounded-full select-none w-8 h-8 md:w-9 md:h-9"
      width={36}
      height={36}
      src={session.user.image}
      alt={`${session.user.name} profile picture`}
    />
  )
}
