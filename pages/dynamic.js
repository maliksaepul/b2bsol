// Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RegularSection from '@/components/templates/regular-section'

const HomePage = props => {
    return (
        <div>
            <RegularSection />
        </div>
    )
}

HomePage.propTypes = {
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
}

const mapStateToProps = ({ path }) => ({ path })

export default connect(mapStateToProps)(HomePage)
