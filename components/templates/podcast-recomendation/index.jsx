import Button from '@/components/atoms/button'
import Label from '@/components/molecules/label'
import Marquee from '@/components/molecules/marquee'
import styles from './style.module.scss'
import React from 'react'

const MARQUEE_ARRAY_1 = [
    {
        title: 'Living with Mindfulness',
        deeplink: 'https://sc6d7.app.goo.gl/L6MQ',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/e7cc00e8cc5c579aalb103-md.jpg',
    },
    {
        title: 'The Art of Everyday Diplomacy',
        deeplink: 'https://sc6d7.app.goo.gl/PjY4',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/0a063b09e2db8922alb361-md.jpg',
    },
    {
        title: 'The Secret of Happiness',
        deeplink: 'https://sc6d7.app.goo.gl/FUXn',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/2ad62ff13129e76aalb481-md.jpg',
    },
    {
        title: 'Menjadi Introvert di Dunia Extrovert',
        deeplink: 'https://sc6d7.app.goo.gl/cznS',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/03efe6de9161d1f8alb1044-md.jpg',
    },
    {
        title: 'Meredefinisikan Kepemimpinan & Pengembangannya',
        deeplink: 'https://sc6d7.app.goo.gl/rcxA',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/7e94b15b6612c705alb1012-md.jpg',
    },
    {
        title: 'Complex Problem Solving',
        deeplink: 'https://sc6d7.app.goo.gl/FpkD',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/edd1b19581ef556calb154-md.jpg',
    },
    {
        title: "Let's Talk About Life",
        deeplink: 'https://sc6d7.app.goo.gl/aBoL',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/f6405c3276b732bdalb852-md.jpg',
    },
    {
        title: 'Creativity',
        deeplink: 'https://sc6d7.app.goo.gl/Ctq3',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/ea9634819548959ealb1-md.jpg',
    },
    {
        title: 'The Road To Decision Making',
        deeplink: 'https://sc6d7.app.goo.gl/MYeu',
        cover: 'https://cdn.inspigo.id/public/compressed/cover/album/4ace68c004a4db49alb227-md.jpg',
    },
]

const PodcastRecomendation = () => {
    return (
        <div className={styles.recomended_podcast}>
            <div className={styles.label_container}>
                <Label
                    description={
                        'Kembangkan dirimu melalui beragam konten pembelajaran berbasis audio yang dapat kamu dengarkan kapan pun dan di mana pun!'
                    }
                    title={'Recomended Podcast'}
                    varian="center"
                />
            </div>
            <div className={styles.marquee}>
                <Marquee contents={MARQUEE_ARRAY_1} animationDuration={'32s'} />
            </div>
            <div className={styles.cta}>
                <Button size={'large'} varian={'primary'} label={'Eksplor'} />
            </div>
        </div>
    )
}

export default PodcastRecomendation
