import { Unbounded } from '@next/font/google'

const unbounded = Unbounded({
  weight: '300',
  subsets: ['latin'],
})

export default function Logo() {
  return (
    <h1 className={`${unbounded.className} text-3xl md:text-5xl select-none`}>
      BeWater<span className="text-base">💧</span>
    </h1>
  )
}
