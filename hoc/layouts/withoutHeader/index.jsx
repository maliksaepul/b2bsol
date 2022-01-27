import dynamic from 'next/dynamic'

// import Footer from '@/components/templates/footer'
// import Header from '@/containers/components/Header'
import React from 'react'
// import Modal from '@/components/molecules/modals/modal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

import { modalClose } from '@/redux/actions/_modal'
// import GeneralModal from '@/components/molecules/modals/general-modal'

const Header = dynamic(() => import('@/containers/components/Header'))
const Footer = dynamic(() => import('@/components/templates/footer'))
const Modal = dynamic(() => import('@/components/molecules/modals/modal'))
const GeneralModal = dynamic(() =>
    import('@/components/molecules/modals/general-modal')
)

const withoutHeader = ({ children, closeModal, modalClose }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
            <Modal close={closeModal}>
                <GeneralModal
                    illu={'/images/loginsign_1.png'}
                    title={'Selamat datang di Learning Platform !'}
                    description={
                        'Kembangkan diri bersama dan nikmati ragam fitur pembelajaran menarik dengan berbagai topik.'
                    }
                    ctaLabel="Eksplor"
                    cta={() => {
                        modalClose(!closeModal)
                    }}
                />
            </Modal>
        </>
    )
}

withoutHeader.propTypes = {
    modalClose: PropTypes.func,
    closeModal: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
}

const mapStateToProps = ({ closeModal }) => ({
    closeModal,
})

export default connect(mapStateToProps, { modalClose })(withoutHeader)
