import PropTypes from 'prop-types'
function UserGreeting(props) {
    return props.isLoggedIn ? <h2>Wellcome {props.username}</h2>:<h2>please Login</h2>;
}
UserGreeting.prototype ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"guest"
}
export default UserGreeting