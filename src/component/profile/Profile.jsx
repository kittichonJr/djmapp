import './Profile.css';

const Profile = () => {
    return (
            <div id="profile-nav">
                <div class="profile-contain">
                    <div class="profile-pic-contain">
                        <div class="profile-circle-bg">
                            <img src="https://images.squarespace-cdn.com/content/v1/5d853fb7d7e6036c4c98b3f6/1569025053520-CA9WYWTRVQVSI25Z86GD/adorable-animal-blur-406014.jpg?format=2500w" alt="profile" />
                        </div>
                    </div>
                    <div class="profile-info">
                        <label for="profile-account">Account:</label>
                        <p id="profile-account">example@example.com</p>
                        <label for="profile-name">Name:</label>
                        <p id="profile-name">Name Surname</p>
                        <label for="profile-height">Height:</label>
                        <p id="profile-height">175 cm</p>
                        <label for="profile-weight">Weight:</label>
                        <p id="profile-weight">68 kg</p>
                        <label for="profile-age">Age:</label>
                        <p id="profile-age">27 years old</p>
                    </div>
                    <div class="profile-footer">
                        <a href="#">
                            <p id="logout">Log out</p>
                        </a>
                    </div>
                </div>
            </div>
    )
};

export default Profile;