import Logout from '@/components/atoms/logout'
import { fetchRevokeUser } from '@/redux/actions/_signout'
import { connect } from 'react-redux'

export default connect(null, { fetchRevokeUser })(Logout)
