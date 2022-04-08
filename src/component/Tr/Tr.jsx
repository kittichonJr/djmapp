const Tr = ({data})=>{
        return data.map((items,index) => {
            return <tr key={index}>
                <td>{items.description}</td>
                <td>{items.activity}</td>
                <td>{items.kcalories}</td>
                <td>{items.date}</td>
            </tr>
        })
}
export default Tr