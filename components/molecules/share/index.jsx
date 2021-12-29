import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@/components/atoms/icon'
import styles from './style.module.scss'
import { ShareLink } from 'social-media-sharing'
import cx from 'classnames'

const Share = ({ align, url, description, tag }) => {
    const shareTextToWhatsApp = (text, url) => {
        const texts = `description : ${text} link : ${url}`
        const message = texts.trim().replace(/\s/g, '%20').toLowerCase()
        const link = `https://wa.me/?text=${message}`
        window.open(link)
    }

    const sentMessageToSocial = type => {
        const message = url
        const text = description || ''
        const hashtag = tag || ''
        switch (type) {
            case 'whatsapp':
                shareTextToWhatsApp(text, message)
                break
            case 'facebook':
                getMediaSourceAndProperties(type, {
                    url: message,
                    text,
                    hashtag,
                })
                break
            case 'telegram':
                getMediaSourceAndProperties(type, {
                    url: message,
                    text,
                    hashtags: hashtag,
                })
                break
            case 'twitter':
                getMediaSourceAndProperties(type, { url: message, text })
                break
            default:
                break
        }
    }

    const getMediaSourceAndProperties = (type, data) => {
        // let source = "";
        let properties = {}
        switch (type) {
            case 'facebook':
                // source = type;
                properties = { u: data.url, quote: data.text }
                break
            case 'telegram':
                // source = type;
                properties = data
                break
            case 'twitter':
                // source = type;
                properties = data
                break
            default:
                break
        }
        const socialMediaLinks = new ShareLink(type)
        socialMediaLinks.get({ ...properties })
        socialMediaLinks.open()
    }

    return (
        <div className={cx(styles.share, styles[align])}>
            <div className={styles.share_container}>
                <div
                    onClick={() => sentMessageToSocial('whatsapp')}
                    className={cx(styles.rounded, styles.whatsapp)}>
                    <Icon name="whatsapp" multiplier={1.5} />
                </div>
                <div
                    onClick={() => sentMessageToSocial('facebook')}
                    className={cx(styles.rounded, styles.facebook)}>
                    <Icon name="facebook" multiplier={1.5} />
                </div>
                <div
                    onClick={() => sentMessageToSocial('twitter')}
                    className={cx(styles.rounded, styles.twitter)}>
                    <Icon name="twitter" multiplier={1} />
                </div>
                <div
                    onClick={() => sentMessageToSocial('telegram')}
                    className={cx(styles.rounded, styles.telegram)}>
                    <Icon name="telegram" multiplier={1} />
                </div>
            </div>
        </div>
    )
}

Share.propTypes = {
    align: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    tag: PropTypes.string,
}

export default Share
