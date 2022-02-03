// Utils
import { calculateAge } from 'utils/helpers'

export const MOENGAGE_PROPERTY = {
    ADD_USER_SESSION: 'add_user_session',
    REMOVE_USER_SESSION: 'remove_user_session',
    UPDATE_USER_SESSION: 'update_user_session',
    OPEN_ALBUM_OR_PLAYLIST: 'Open Album or Playlist',
    PLAY_AUDIO: 'Play Audio',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
    SIGNUP: 'Register',
}

export const MOENGAGE_AUTH_SOURCE = {
    FORM: 'form',
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
}

export const MOENGAGE_GENDER = {
    MALE: 'Male',
    FEMALE: 'Female',
}

export const initializeUserSession = data => {
    const userId = data.id
    const name = data.name

    if (!window.Moengage) {
        return
    }

    moengageTrackUser(MOENGAGE_PROPERTY.ADD_USER_SESSION, { userId })

    window.Moengage.add_first_name(name.split(' ').slice(0, -1).join(' '))
    window.Moengage.add_last_name(name.split(' ').slice(-1).join(' '))
    window.Moengage.add_email(data.email)
    window.Moengage.add_mobile(data.phone)
    window.Moengage.add_gender(data.gender)
    window.Moengage.add_birthday(new Date(data.dob))

    window.Moengage.add_user_attribute('user_id', userId)
    window.Moengage.add_user_attribute('name', name)
    window.Moengage.add_user_attribute('email', data.email)
    window.Moengage.add_user_attribute('gender', data.gender)
    window.Moengage.add_user_attribute('birth_date', new Date(data.dob))
    window.Moengage.add_user_attribute('created_at', data.c_at)
    window.Moengage.add_user_attribute('age', calculateAge(data.dob))
    window.Moengage.add_user_attribute('organization_id', data.organizationId)
    window.Moengage.add_user_attribute('is_premium_user', data.subscription)
}

export const moengageTrackUser = (property, payload) => {
    if (!window.Moengage) {
        return null
    }

    switch (property) {
        case MOENGAGE_PROPERTY.ADD_USER_SESSION:
            return window.Moengage.add_unique_user_id(payload.userId)

        case MOENGAGE_PROPERTY.UPDATE_USER_SESSION:
            return window.Moengage.update_unique_user_id(payload.userId)

        case MOENGAGE_PROPERTY.REMOVE_USER_SESSION:
            return window.Moengage.destroy_session()

        default:
            return null
    }
}

export const moengageTrackEvent = (property, payload) => {
    if (!window.Moengage) {
        return null
    }

    switch (property) {
        case MOENGAGE_PROPERTY.OPEN_ALBUM_OR_PLAYLIST:
            return window.Moengage.track_event(property, {
                type: payload.type,
                title: payload.title,
                speaker_name: payload.speaker_name,
            })

        case MOENGAGE_PROPERTY.PLAY_AUDIO:
            return window.Moengage.track_event(property, {
                source: payload.source,
                title: payload.title,
                album_title: payload.album_title,
                speaker_name: payload.speaker_name,
            })

        case MOENGAGE_PROPERTY.LOGIN:
            return window.Moengage.track_event(property, {
                login_platform: payload.login_platform,
                success_status: payload.success_status,
                email_address: payload.email_address,
            })

        case MOENGAGE_PROPERTY.LOGOUT:
            return window.Moengage.track_event(property, {
                logout_date: payload.logout_date,
                success_status: payload.success_status,
                forced_logout: payload.forced_logout,
            })

        case MOENGAGE_PROPERTY.SIGNUP:
            return window.Moengage.track_event(property, {
                signup_platform: payload.signup_platform,
                email_address: payload.email_address,
                success_status: payload.success_status,
                referral_code: payload.referral_code,
                dob: payload.dob,
                gender: payload.gender,
            })

        default:
            return null
    }
}
