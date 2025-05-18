import ProfileCard from "./ProfileCard";


const profiles = [{
        name: "Alex",
        age: 25,
        bio: "A software engineer who loves hiking."},
    {
        name: "Taylor",
        age: 30,
        bio: "A designer passionate about photography.",
    },
    {
        name: "Jordan",
        age: 28,
        bio: "A data scientist who enjoys traveling the world."
    },
];

const ProfileContainer = () => {
    return (
        <div id="card-container">
            { profiles.map((profile => <ProfileCard profile={profile} />)) }
        </div>
    )
}

export default ProfileContainer;