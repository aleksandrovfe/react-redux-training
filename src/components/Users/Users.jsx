import {connect} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../../store/actions/userActions";
import {User} from "../User/User";
import React from "react";

const Users = (props) => {
    const users = props.users.list
    const loading = props.app.loading

    useEffect(() => {
        props.fetchUsers()
    }, [])

    if (loading) {
        return (<h1>Load Users!!</h1>)
    } else {
        return (
            <>
                <h1>Users</h1>
                {users.map(user => (
                    <React.Fragment key={user.id}>
                        <User user={user}/>
                    </React.Fragment>
                ))}
            </>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
    app: state.app,
})

export default connect(mapStateToProps, {fetchUsers})(Users)
