import React from 'react'

interface MobileMenuProps {
  visible?: boolean
}

const menuItems = ['Home', 'Series', 'Films', 'New & Popular', 'My List', 'Browse by languages']

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {

  if (!visible) {
    return null;
  }


  return (
    <div className='bg-black w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-gray-800'>
      <div className='flex flex-col gap-4'>

        {menuItems.map((item, index) => (
          <div className='text-white px-3 text-center hover:underline' key={index}>{item}</div>
        ))}

      </div>

    </div>
  )
}

export default MobileMenu