import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import { modalClose } from '@/redux/actions/widgets/_modal'
import { getModal, saveModal } from '@/utils/helpers'
// import GeneralModal from '@/components/molecules/modals/general-modal'

const Header = dynamic(() => import('@/containers/components/Header'))
const Footer = dynamic(() => import('@/components/templates/footer'))
const HeaderBackground = dynamic(() =>
    import('@/components/templates/header/background')
)
const Modal = dynamic(() => import('@/components/molecules/modals/modal'))
const GeneralModal = dynamic(() =>
    import('@/components/molecules/modals/general-modal')
)

const ondemand = ({ children, closeModal, modalClose, account, path }) => {
    const [showModal, setShowModal] = useState(getModal())
    return (
        <>
            <Header />
            <HeaderBackground
                foreground={'/images/header/ondemand/bg_ds.png'}
                foregroundMobile={'/images/header/ondemand/bg_res.png'}
                height={'25rem'}
            />
            <main className={styles.main}>{children}</main>
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
    path: PropTypes.any,
}

const mapStateToProps = ({ closeModal, path }) => ({
    closeModal,
    path,
})

export default connect(mapStateToProps, { modalClose })(ondemand)
