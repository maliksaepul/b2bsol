import Link from 'next/link'
import React from 'react'
import Icon from '../icon'
import { inspirationBlue } from '@/styles/App.module.scss'
import PropTypes from 'prop-types'
import { BASEURL } from '@/utils/constants'

const Logo = ({ link }) => {
    return (
        <Link href={`${BASEURL}/${link}`}>
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

Logo.propTypes = {
    link: PropTypes.string,
}

export default Logo
