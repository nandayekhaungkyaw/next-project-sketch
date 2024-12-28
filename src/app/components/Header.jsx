import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' flex flex-row gap-4 '>
      <Link href={'/'} className=''>Home</Link>
      <Link href={'/about-us'} className=''>About</Link>
      
      <Link href={'/products'} className=''>Products</Link>
      <Link href={'/faq'} className=''>Faq</Link>
      <Link href={'/contact-us'} className=''>ContactUs</Link>
    </div>
  )
}

export default Header
