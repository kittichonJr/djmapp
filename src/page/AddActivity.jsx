import { useState, useEffect } from 'react'
import './css/AddActivity.css'
import Header from '../component/header/Header'
import Profile from '../component/profile/Profile';
import axios from 'axios'

function AddActivity() {
    const initialValue = {
        description:"",
        activity:"",
        kcalories:"",
        date:""
    }
    const [activity,setActivity] = useState(initialValue)
    const [error, setError] = useState({})
    const [isValid, setIsValid] = useState(false)

    const handleChange = ({target})=>{
        const {id, value}= target;
        setActivity({...activity,[id]:value})
    }

    const handleClick = ()=>{
        let isNull = {
            description:false,
            activity:false,
            kcalories:false,
            date:false,
        }
        if (activity.description === ""){
            isNull.description = false;
            setError((prevError)=>{
                return {...prevError, description:"Please fill the description"}
            })
        }else{
            isNull.description = true;
            setError((prevError)=>{
                return {...prevError, description:""}
            })
        }

        if (activity.activity === "" || activity.activity === 0){
            isNull.activity = false;
            setError((prevError)=>{
                return {...prevError, activity:"Please select some option"}
            })
        }else{
            isNull.activity = true;
            setError((prevError)=>{
                return {...prevError, activity:""}
            })
        }

        if (activity.kcalories === "" ){
            isNull.kcalories = false;
            setError((prevError)=>{
                return {...prevError, kcalories:"Please fill the calories"}
            })
        }else{
            isNull.kcalories = true;
            setError((prevError)=>{
                return {...prevError, kcalories:""}
            })
        }

        if (activity.date === "" ){
            isNull.date = false;
            setError((prevError)=>{
                return {...prevError, date:"Please fill the date"}
            })
        }else {
            isNull.date = true;
            setError((prevError)=>{
                return {...prevError, date:""}
            })
        }
        const isFull = Object.values(isNull).findIndex(isFalse => isFalse === false)
        console.log('isFull',isFull)
        if (isFull === -1){
            console.log('OKay google')
            setIsValid(true)
        }
    }
    useEffect(()=>{
        (async ()=>{
            const client = axios.create({
                baseURL: 'http://localhost:7001',
            })
            if (isValid){
                await client.post('/users/me/activitiesReccord',activity)
                .then(res => {
                    if (res.status === 200) {
                        console.log(res)
                        setIsValid(false)
                    }
                })
                .catch(err => console.log(err))
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isValid])
    return (<>
        <Header>Add Activity</Header>
        <div className="body-container">
            <Profile></Profile>
            {/* <!-- body-input --> */}
            <div className="body-label-input-contain" id="addActivity-contain">
                <div className="body-input-label">
                    {/* <htmlForm></htmlForm> */}
                    <div className="body-input-description">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" onChange={handleChange} className={error.description && 'error'} />
                        {error.description && <p className='error'>{error.description}</p>}
                    </div>
                    <div className="body-input-Activity" >
                        <label htmlFor="activity">Activity List</label>
                        <select name="activity" id="activity" onChange={handleChange} className={error.activity && 'error'}>
                            <option value="">-- Please Select --</option>
                            <option value="run">Run</option>
                            <option value="walk">Walk</option>
                            <option value="bicycle">bicycle</option>
                            <option value="swimming">Swimming</option>
                            <option value="hiking">Hiking</option>
                        </select>
                        {error.activity && <p className='error'>{error.activity}</p>}
                    </div>
                    <div className="body-input-kcal">
                        <label htmlFor="kcal">Kcalories</label>
                        <input type="number" id="kcalories" onChange={handleChange} className={error.kcalories && 'error'} />
                        {error.kcalories && <p className='error'>{error.kcalories}</p>}
                    </div>
                    <div className="body-input-date">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" onChange={handleChange} className={error.date && 'error'} />
                        {error.date && <p className='error'>{error.date}</p>}
                    </div>
                </div>
            </div>
            <div className="body-button">
                <input type="button" className="save-button" id="submit" value="SAVE" onClick={handleClick}/>
            </div>
        </div>
    </>
    )
}

export default AddActivity;
