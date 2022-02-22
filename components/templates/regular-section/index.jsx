import React from 'react'
import PropTypes from 'prop-types'
import WithIllu from '../with-illu'
import Card from '@/components/organisms/card'
import styles from './style.module.scss'

const RegularSection = props => {
    return (
        <WithIllu
            className={styles[props.reverse ? 'reverse' : '']}
            illu={props.illu}>
            <Card title={props.title} body={props.body} cta={props.cta} />
        </WithIllu>
    )
}

RegularSection.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    cta: PropTypes.array,
    reverse: PropTypes.bool,
    illu: PropTypes.object,
}

RegularSection.defaultProps = {
    reverse: true,
}

export default RegularSection
