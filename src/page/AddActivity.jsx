import Header from '../component/header/Header'
import Profile from '../component/profile/Profile';

function AddActivity() {
    return (<>
        <Header>Add Activity</Header>
        <div class="body-container">
            <Profile></Profile>
            {/* <!-- body-input --> */}
            <div class="body-label-input-contain">
                <div class="body-input-label">
                    <div class="body-input-description">
                        <label for="description">Description</label>
                        <input type="text" id="description" />
                    </div>
                    <div class="body-input-Activity" >
                        <label for="activity">Activity List</label>
                        <select name="activity" id="activity">
                            <option value="0">-- Please Select --</option>
                            <option value="run">Run</option>
                            <option value="walk">Walk</option>
                            <option value="bicycle">bicycle</option>
                            <option value="swimming">Swimming</option>
                            <option value="hiking">Hiking</option>
                        </select>
                    </div>
                    <div class="body-input-kcal">
                        <label for="kcal">Kcalories</label>
                        <input type="number" id="kcal" />
                    </div>
                    <div class="body-input-date">
                        <label for="date">Date</label>
                        <input type="date" id="date" />
                    </div>
                </div>
            </div>
            <div class="body-button">
                <a href="data-activity.html">
                    <input type="button" class="save-button" id="submit" value="SAVE" />
                </a>
            </div>
        </div>
    </>
    )
}

export default AddActivity;
