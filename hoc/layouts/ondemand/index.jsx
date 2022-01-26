import Footer from '@/components/templates/footer'
import Header from '@/containers/components/Header'
import styles from './style.module.scss'
import React from 'react'
import HeaderBackground from '@/components/templates/header/background'
import Modal from '@/components/molecules/modals/modal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { modalClose } from '@/redux/actions/_modal'
import GeneralModal from '@/components/molecules/modals/general-modal'

const ondemand = ({ children, closeModal, modalClose, account, path }) => {
    return (
        <>
            <Header />
            <HeaderBackground
                foreground={
                    'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/ondemand_fg_87vo1LsOhqw.png?updatedAt=1636432770590'
                }
                foregroundMobile={
                    'https://ik.imagekit.io/145agqxu54x/b2bsol-tes/ondemand_mobile_llT-uKq67II.png?updatedAt=1636428541030'
                }
                height={'25rem'}
            />
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

ondemand.propTypes = {
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

export default connect(mapStateToProps, { modalClose })(ondemand)
