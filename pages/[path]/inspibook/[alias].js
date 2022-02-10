import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import InspiBookPlayer from '@/views/InspiBookPlayer'
import { fetchRelatedInspibook } from '@/redux/actions/content/_relatedContent'
import dynamic from 'next/dynamic'
const InspiBookPlayer = dynamic(() => import('@/views/InspiBookPlayer'))

const InspiBookPlayerPage = ({
    fetchRelatedInspibook,
    relatedInspibook,
    path,
    loading,
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
            loading={loading}
        />
    )
}

InspiBookPlayerPage.propTypes = {
    fetchRelatedInspibook: PropTypes.func.isRequired,
    relatedInspibook: PropTypes.array,
    path: PropTypes.any,
    loading: PropTypes.object,
}
const mapStateToProps = ({ relatedInspibook, loading }) => ({
    relatedInspibook,
    loading,
})

export default connect(mapStateToProps, { fetchRelatedInspibook })(
    InspiBookPlayerPage
)
