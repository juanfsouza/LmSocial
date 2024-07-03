
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export const Navbar = () => {
    return (
    <div className='h-24 flex items-center justify-between'>
        {/* LEFT BAR */}
        <div className=''>
            <Link 
                href="/" 
                className='font-bold text-xl text-blue-600'>
            LAMASOCIAL
            </Link>
        </div>
        {/* CENTER BAR */}
        <div className='hidden'></div>
        {/* RIGHT BAR */}
        <div className=''>
            <MobileMenu />
        </div>
    </div>
  )
}
