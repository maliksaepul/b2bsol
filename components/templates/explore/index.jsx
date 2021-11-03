

import React from 'react'
import styles from './style.module.scss'
import CardEvent from '@/components/molecules/card-event'
import Carousel from '@/components/molecules/carousel'
import Label from '@/components/molecules/label'
import PropTypes from 'prop-types'

const Explore = ({user}) => {
    return (
        <div className={styles.explore}>
            <Label title={`Halo ${user.name}`} description={"<p>Lanjutkan materi yang telah kamu mulai sebelumnya</p>"} />

            <Carousel>
            <CardEvent banner={"https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365"} event={{title : "Collaboration A cross Generation", content : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"} } cta={[{title : "Gabung", url : 'https://google.com'}]} varian={"column"} />
            <CardEvent banner={"https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365"} event={{title : "Collaboration A cross Generation", content : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"} } cta={[{title : "Gabung", url : 'https://google.com'}]} varian={"column"} />
            <CardEvent banner={"https://ik.imagekit.io/145agqxu54x/b2bsol-tes/event_FlPh15e0-N.png?updatedAt=1635751095365"} event={{title : "Collaboration A cross Generation", content : "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"} } cta={[{title : "Gabung", url : 'https://google.com'}]} varian={"column"} />
            </Carousel>
             
        </div>
    )
}
Explore.propTypes = {
    user : PropTypes.shape({
        name : PropTypes.string,
    })
}

export default Explore

