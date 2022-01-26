import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AudioBookPlayer from '@/views/AudioBookPlayer'
import { fetchRelatedAudioPlaybook } from '@/redux/actions/content/_relatedContent'
import withAuth from '@/hoc/wrappers/withAuthStrict'

const AudioBookPlayerPage = ({
    fetchRelatedAudioPlaybook,
    relatedAudioPlaybook,
}) => {
    const router = useRouter()
    const { alias } = router.query
    useEffect(() => {
        fetchRelatedAudioPlaybook()
    }, [])
    return (
        <AudioBookPlayer
            alias={alias}
            relatedAudioPlaybook={relatedAudioPlaybook}
        />
    )
}

AudioBookPlayerPage.propTypes = {
    fetchRelatedAudioPlaybook: PropTypes.func.isRequired,
    relatedAudioPlaybook: PropTypes.array,
}
const mapStateToProps = ({ relatedAudioPlaybook }) => ({ relatedAudioPlaybook })

export default connect(mapStateToProps, { fetchRelatedAudioPlaybook })(
    withAuth(AudioBookPlayerPage)
)
