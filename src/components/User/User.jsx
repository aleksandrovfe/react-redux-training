import './user.css'

export const User = ({user}) => {
    return (
        <div className="user">
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
        </div>
    )
}
