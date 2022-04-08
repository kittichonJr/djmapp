import {Link} from 'react-router-dom'
const Navigator = ()=>{
    return (<>
        <Link to="AddActivity">
            <button>AddActivity</button>
        </Link>
        <Link to="DataActivity">
            <button>DataActivity</button>
        </Link>
    </>
    )
}

export default Navigator;