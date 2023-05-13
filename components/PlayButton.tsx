import { useRouter } from 'next/router'
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

interface PLayButtonProps {
  movieId: string
}

const PlayButton: React.FC<PLayButtonProps> = ({ movieId }) => {

  const router = useRouter()
  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className='
        bg-white
        rounded-md
        py-1 md:py-2
        px-2 md:px-4
        w-auto
        text-xs lg:text-lg
        font-medium
        flex
        items-center
        hover:bg-neutral-300
        transition
      '
    >
      <BsFillPlayFill size={25} className='mr-1' />
      Play
    </button>
  )
}

export default PlayButton