// Libraries
import React from 'react'
import Head from 'next/head'
import Home from '@/views/Home/Home'
import { modalClose } from '@/redux/actions/_modal'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from '@/components/molecules/modals/modal'
import GeneralModal from '@/components/molecules/modals/general-modal'

// Views

const HomePage = props => {
    return (
        <React.Fragment>
            <Head>
                <title>Beranda</title>
            </Head>

            <Home account={props.account} path={props.path} />
            <Modal close={props.closeModal}>
                <GeneralModal
                    illu={'/images/loginsign_1.png'}
                    title={`Selamat datang di ${
                        props.path.name || 'Inspigo'
                    } Learning Platform !`}
                    description={
                        'Kembangkan diri bersama dan nikmati ragam fitur pembelajaran menarik dengan berbagai topik.'
                    }
                    ctaLabel="Eksplor"
                    cta={() => {
                        props.modalClose(!props.closeModal)
                    }}
                />
            </Modal>
        </React.Fragment>
    )
}

HomePage.propTypes = {
    modalClose: PropTypes.func,
    closeModal: PropTypes.bool,
    account: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    path: PropTypes.any,
}

const mapStateToProps = ({ closeModal }) => ({
    closeModal,
})

export default connect(mapStateToProps, { modalClose })(HomePage)
