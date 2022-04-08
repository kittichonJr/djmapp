import './Profile.css';

const Profile = () => {
    return (
            <div id="profile-nav">
                <div className="profile-contain">
                    <div className="profile-pic-contain">
                        <div className="profile-circle-bg">
                            <img src="https://images.squarespace-cdn.com/content/v1/5d853fb7d7e6036c4c98b3f6/1569025053520-CA9WYWTRVQVSI25Z86GD/adorable-animal-blur-406014.jpg?format=2500w" alt="profile" />
                        </div>
                    </div>
                    <div className="profile-info">
                        <label htmlFor="profile-account">Account:</label>
                        <p id="profile-account">example@example.com</p>
                        <label htmlFor="profile-name">Name:</label>
                        <p id="profile-name">Name Surname</p>
                        <label htmlFor="profile-height">Height:</label>
                        <p id="profile-height">175 cm</p>
                        <label htmlFor="profile-weight">Weight:</label>
                        <p id="profile-weight">68 kg</p>
                        <label htmlFor="profile-age">Age:</label>
                        <p id="profile-age">27 years old</p>
                    </div>
                    <div className="profile-footer">
                            <p id="logout">Log out</p>
                    </div>
                </div>
            </div>
    )
};

export default Profile;