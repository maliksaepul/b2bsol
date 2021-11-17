import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { maxTitlesLength } from '@/utils/function'

const AudioGrid = props => {
    const podcastMockupData = [
        {
            title: 'Living with Mindfulness',
            deeplink: 'https://sc6d7.app.goo.gl/L6MQ',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/e7cc00e8cc5c579aalb103-md.jpg',
            author: 'John Due',
        },
        {
            title: 'The Art of Everyday Diplomacy',
            deeplink: 'https://sc6d7.app.goo.gl/PjY4',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/0a063b09e2db8922alb361-md.jpg',
            author: 'John Due',
        },
        {
            title: 'The Secret of Happiness',
            deeplink: 'https://sc6d7.app.goo.gl/FUXn',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/2ad62ff13129e76aalb481-md.jpg',
            author: 'John Due',
        },
        {
            title: 'Menjadi Introvert di Dunia Extrovert',
            deeplink: 'https://sc6d7.app.goo.gl/cznS',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/03efe6de9161d1f8alb1044-md.jpg',
            author: 'John Due',
        },
        {
            title: 'Meredefinisikan Kepemimpinan & Pengembangannya',
            deeplink: 'https://sc6d7.app.goo.gl/rcxA',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/7e94b15b6612c705alb1012-md.jpg',
            author: 'John Due',
        },
        {
            title: 'Complex Problem Solving',
            deeplink: 'https://sc6d7.app.goo.gl/FpkD',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/edd1b19581ef556calb154-md.jpg',
            author: 'John Due',
        },
        {
            title: "Let's Talk About Life",
            deeplink: 'https://sc6d7.app.goo.gl/aBoL',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/f6405c3276b732bdalb852-md.jpg',
            author: 'John Due',
        },
        {
            title: 'Creativity',
            deeplink: 'https://sc6d7.app.goo.gl/Ctq3',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/ea9634819548959ealb1-md.jpg',
            author: 'John Due',
        },
        {
            title: 'The Road To Decision Making',
            deeplink: 'https://sc6d7.app.goo.gl/MYeu',
            cover: 'https://cdn.inspigo.id/public/compressed/cover/album/4ace68c004a4db49alb227-md.jpg',
            author: 'John Due',
        },
    ]

    const renderLink = (link = null) => {
        if (link) {
            window.open(link, '_blank')
        }
    }

    const renderAudioCard = () => {
        return podcastMockupData.map((c, i) => (
            <div key={i} className={styles.object}>
                <img
                    src={c.cover}
                    alt={c.title}
                    onClick={() => renderLink(c.deeplink)}
                />
                <div>
                    <h6>{maxTitlesLength(c.title)}</h6>
                    <p className={'p2'}>{c.author}</p>
                </div>
            </div>
        ))
    }

    return <div className={styles.audio}>{renderAudioCard()}</div>
}

AudioGrid.propTypes = {
    data: PropTypes.array,
}

export default AudioGrid
