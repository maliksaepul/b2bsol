import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchRelatedAudioPlaybook } from '@/redux/actions/_relatedContent'
import InspiBookPlayer from '@/views/InspiBookPlayer'
import withAuth from '@/hoc/wrappers/withAuthStrict'

const InspiBookPlayerPage = ({
    fetchRelatedAudioPlaybook,
    relatedAudioPlaybook,
}) => {
    const router = useRouter()
    const { alias } = router.query
    useEffect(() => {
        fetchRelatedAudioPlaybook()
    }, [])
    return (
        <InspiBookPlayer
            alias={alias}
            relatedAudioPlaybook={relatedAudioPlaybook}
        />
    )
}

InspiBookPlayerPage.propTypes = {
    fetchRelatedAudioPlaybook: PropTypes.func.isRequired,
    relatedAudioPlaybook: PropTypes.array,
}
const mapStateToProps = ({ relatedAudioPlaybook }) => ({ relatedAudioPlaybook })

export default connect(mapStateToProps, { fetchRelatedAudioPlaybook })(
    withAuth(InspiBookPlayerPage)
)
