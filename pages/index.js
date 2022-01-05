// Libraries
import React from 'react'
import Head from 'next/head'
import Home from '@/views/Home/Home'
import withAuth from '@/hoc/wrappers/withAuthStrict'
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

            <Home account={props.account} />
            <Modal close={props.closeModal}>
                <GeneralModal
                    illu={'/images/loginsign_1.png'}
                    title={`Selamat datang di ${
                        props.account.organizationName || 'Inspigo'
                    } Learning Platform !`}
                    description={
                        'Kembangkan diri bersama dan nikmati ragam fitur pembelajaran menarik dengan berbagai topik.'
                    }
                    ctaLabel="explore"
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
}

const mapStateToProps = ({ closeModal }) => ({
    closeModal,
})

export default connect(mapStateToProps, { modalClose })(withAuth(HomePage))
