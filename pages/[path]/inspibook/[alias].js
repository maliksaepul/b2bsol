import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import InspiBookPlayer from '@/views/InspiBookPlayer'
import { fetchRelatedInspibook } from '@/redux/actions/content/_relatedContent'

const InspiBookPlayerPage = ({
    fetchRelatedInspibook,
    relatedInspibook,
    path,
}) => {
    const router = useRouter()
    const { alias } = router.query
    useEffect(() => {
        fetchRelatedInspibook(path.path)
    }, [])
    return (
        <InspiBookPlayer
            alias={alias}
            relatedInspibook={relatedInspibook}
            path={path.path}
        />
    )
}

InspiBookPlayerPage.propTypes = {
    fetchRelatedInspibook: PropTypes.func.isRequired,
    relatedInspibook: PropTypes.array,
    path: PropTypes.any,
}
const mapStateToProps = ({ relatedInspibook }) => ({ relatedInspibook })

export default connect(mapStateToProps, { fetchRelatedInspibook })(
    InspiBookPlayerPage
)
