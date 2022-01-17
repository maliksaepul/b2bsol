import Link from 'next/link'
import React from 'react'
import Icon from '../icon'
import { inspirationBlue } from '@/styles/App.module.scss'

const Logo = () => {
    return (
        <Link href={'/'}>
            <a>
                <Icon
                    name="InspigoLogo"
                    multiplier={1}
                    fill={inspirationBlue}
                />
            </a>
        </Link>
    )
}

export default Logo
