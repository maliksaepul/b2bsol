import dynamic from 'next/dynamic'
import Modal from '@/components/molecules/modals/modal'
import GeneralModal from '@/components/molecules/modals/general-modal'
import { modalClose } from '@/redux/actions/widgets/_modal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import React, { useState } from 'react'
import { getModal, saveModal } from '@/utils/helpers'
const Header = dynamic(() => import('@/containers/components/Header'))
const Footer = dynamic(() => import('@/components/templates/footer'))
const HeaderBackground = dynamic(() =>
    import('@/components/templates/header/background')
)
const EventModal = dynamic(() =>
    import('@/components/molecules/modals/event-modal')
)
const Share = dynamic(() => import('@/components/molecules/share'))
const Copy = dynamic(() => import('@/components/atoms/copy'))

const common = props => {
    const [showModal, setShowModal] = useState(getModal())
    return (
        <>
            <Header />
            <HeaderBackground
                foreground={'/images/header/home/bg_ds.png'}
                foregroundMobile={'/images/header/home/bg_res.png'}
            />
            <main className={styles.main}>{props.children}</main>
            <Footer />
            <Modal close={showModal}>
                <GeneralModal
                    illu={'/images/loginsign_1.png'}
                    title={`Selamat datang di Inspigo For Business!`}
                    description={
                        'Dapatkan inspirasi, pengetahuan dan pengalaman belajar yang lengkap melalui satu platform.'
                    }
                    ctaLabel="Eksplor"
                    cta={() => {
                        saveModal(!getModal)
                        setShowModal(!showModal)
                    }}
                />
            </Modal>
            <Modal
                close={props.modal.close}
                handleClose={() => props.modalClose(!props.modal.close)}>
                <EventModal
                    illu={props.modal.event.banner}
                    title={props.modal.event.title}
                    description={props.modal.event.content}
                    date={props.modal.event.date}>
                    <Share
                        align={'center'}
                        url={props.modal.event.url}
                        description={props.modal.event.description}
                    />

                    <Copy url={props.modal.event.url} label="Copy" />
                </EventModal>
            </Modal>
        </>
    )
}

const mapStateToProps = ({ closeModal, path, modal }) => ({
    closeModal,
    path,
    modal,
})

common.propTypes = {
    modalClose: PropTypes.func,
    closeModal: PropTypes.bool,
    path: PropTypes.any,
    modal: PropTypes.any,
}

export default connect(mapStateToProps, { modalClose })(common)
