import Header from '../component/header/Header'
import Profile from '../component/profile/Profile';
import Tr from '../component/Tr/Tr'
import './css/DataActivity.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import EditModal from '../component/Modal/EditModal';

const DataActivity = () => {
    const [data,setData] = useState([{}]);
    const [isEdit, setIsEdit] = useState("")
    useEffect(()=>{
        (async ()=>{
            const client = axios.create({
                baseURL: 'http://localhost:7001',
            })
            const res = await client.get('/users/me/activitiesReccord')
            setData(res.data)
        })();
    },[])
    const onEdit = (id)=>{
        setIsEdit(id)
    }
    const onModalOff = ()=>{
        setIsEdit("")
    }
    const onDelete = async (id)=>{
        const client = axios.create({
            baseURL: 'http://localhost:7001',
        })
        const res = await client.delete(`/users/me/activitiesReccord/${id}`)
        console.log(res)
        alert('Delete Success')
        window.location.reload();
    }
    return (<>
        <EditModal id={isEdit} edit={isEdit && true} onOff={onModalOff} />
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
                            <Tr data={data} onEdit={onEdit} onDelete={onDelete} />
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