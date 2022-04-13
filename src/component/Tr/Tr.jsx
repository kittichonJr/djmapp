import "./Tr.css"
const Tr = ({ data ,onEdit, onDelete}) => {

    const handleClick = ({target})=>{
        if (target.value === 'edit'){
            onEdit(target.id)
        }
        if (target.value === 'delete'){
            onDelete(target.id)
        }
    }
    return data.map((items, index) => {
        return <tr key={index}>
            <td>{items.description}</td>
            <td>{items.activity}</td>
            <td>{items.kcalories}</td>
            <td className="config">
                {items.date}
                <div>
                    <button id={items._id} onClick={handleClick} value="edit">Edit</button>
                    <button id={items._id} onClick={handleClick} value="delete">Delete</button>
                </div>
            </td>
        </tr>
    })
}
export default Tr