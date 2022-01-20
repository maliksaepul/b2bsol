import Link from 'next/link'
import React from 'react'
import Icon from '../icon'
import { inspirationBlue } from '@/styles/App.module.scss'
import { useRouter } from 'next/router'

const Logo = () => {
    const Router = useRouter()
    return (
        <Link href={`${Router.query.path || '/'}`}>
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
