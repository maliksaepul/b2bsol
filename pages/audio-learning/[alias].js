import PodcastPlayer from '@/views/PodcastPlayer'
import React from 'react'
import { useRouter } from 'next/router'

const PodcastPlayerPage = () => {
    const router = useRouter()
    const { alias } = router.query
    return <PodcastPlayer alias={alias} />
}

export default PodcastPlayerPage
