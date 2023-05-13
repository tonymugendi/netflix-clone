import { useRouter } from 'next/router';
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'


interface MoviCardTypes {
  data: Record<string, any>;
}


const MovieCard: React.FC<MoviCardTypes> = ({ data }) => {
  const router = useRouter()
  return (
    <div className='group bg-zinc-900 col-span relative h-[20vh]'>
      <img
        className='
          cursor-pointer
          object-cover
          transition
          shadow-xl
          rounded-md
          group-hover:opacity-90
          sm:group-hover:opacity-0
          delay-100
          w-full
          h-full
      '
        src={data.thumbnail}
        alt='Thumbnail' />
      <div className='
          absolute
          top-0
          transition
          duration-200
          z-10
          invisible
          sm:visible
          delay-300
          w-full
          scale-0
          group-hover:scale-110
          group-hover:-translate-y-[6vw]
          group-hover:translate-x-[2vw]
          group-hover:opacity-100
        '>
        <img src={data.thumbnail} alt='Thumnail' />
        <div className='
            z-10
            bg-zinc-800
            p-2
            lg:p-4
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md

          '>
          <div className='flex items-center gap-3'>

            <div className='
              cursor-pointer
              w-6
              h-6
              lg:w-10
              lg:h-10
              bg-white
              rounded-full
              flex
              items-center
              justify-center
              transition
              hover:bg-neutral-300
            '
              onClick={() => { router.push(`/watch/${data.id}`) }}
            >
              <BsFillPlayFill size={30} />
            </div>
          </div>
          <p className='text-green-400 font-semibold mt-2'>
            New <span className='text-white'>2023</span>
          </p>
          <div className='flex mt-2 items-center gap-2'>
            <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
          </div>
          <div className='flex mt-2 items-center gap-2'>
            <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
          </div>

        </div>
      </div>
    </div>
  )
};


export default MovieCard