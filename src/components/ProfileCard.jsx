
const ProfileCard = (props) => {
    const { name, age, bio } = props.profile;
    return (
        <div className="card">
            <h3>{ name }</h3>
            <p>Age: { age }</p>
            <p>Bio: { bio }</p>
        </div>
    )
}

export default ProfileCard;