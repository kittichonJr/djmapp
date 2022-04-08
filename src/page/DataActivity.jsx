import Header from '../component/header/Header'
import Profile from '../component/profile/Profile';
import Tr from '../component/Tr/Tr'
import './css/DataActivity.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

const DataActivity = () => {
    const [data,setData] = useState([{}]);
    useEffect(()=>{
        (async ()=>{
            const client = axios.create({
                baseURL: 'http://localhost:7001',
            })
            const res = await client.get('/users/me/activitiesReccord')
            setData(res.data)
        })();
    },[])

    return (<>
        <Header>Data Activity</Header>
        <div className="body-container">
            <Profile></Profile>
            {/* <!-- body-table--> */}
            <div className="body-data-contain">
                <div className="table-contain">
                    <table id="table-data">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Activity Type</th>
                                <th>KiloCalories</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Tr data={data} />
                        </tbody>
                    </table>
                </div>
                <div className="table-button">
                    <Link to="/AddActivity">
                        <input type="button" value="+ Add Activity" />
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
};

export default DataActivity;