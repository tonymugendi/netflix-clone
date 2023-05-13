import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import useBillboard from '@/hooks/useBillboard'
import PlayButton from './PlayButton'

const Billboard = () => {

  const { data } = useBillboard()
  return (
    <div className='relative h-[56.25vh]'>
      <video
        className='w-full h-full object-cover brightness-[40%]'
        src={data?.videoUrl}
        poster={data?.thumbnail}
        autoPlay
        muted
        loop
      >
      </video>
      <div className='absolute top-1/3 md:top-[40%] ml-4 md:ml-16'>
        <p className='text-white text-xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl'>{data?.title}</p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>{data?.description}</p>
        <div className='flex items-center mt-3 md:mt-4 gap-3'>
          <PlayButton movieId={data?.id} />
          <button className='
            bg-white
            text-white
            bg-opacity-30
            rounded-md
            py-1 md:py-2
            px-2 md:px-4
            w-auto
            text-xs lg:text-lg
            font-semibold
            flex
            items-center
            hover:bg-opacity-20
            transition

          '>
            <AiOutlineInfoCircle className='mr-1'/>
            More Info
          </button>
        </div>

      </div>

    </div>
  )
}

export default Billboard