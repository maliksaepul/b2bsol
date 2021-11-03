import Image from 'next/image'
import Logos from '@/public/inspigo-logo.svg'
import Link from 'next/link'
import React from 'react'
const Logo = () => {
    return (
        <Link href={'/'}>
            <a >
            <Image
                src={Logos}
                alt="Picture of the author"
                width={120}
                height={25}
            />
            </a>
            
        </Link>
        
    )
}

export default Logo
