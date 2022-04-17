import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './EditModal.css'
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    overflow: 'hidden',
    width: '20%'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function EditModal({ id, edit, onOff }) {
  const initialUpdate = {
    description:"",
        activity:"",
        kcalories:"",
        date:""
  }
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState(initialUpdate)
  const [inputIsNull, setInputIsNull] = useState([])
  const [isOkToUpdate, setIsOkToUpdate] = useState(false)


  useEffect(() => {
    if (edit) {
      setIsOpen(true);
      console.log('setIsOpen is true')
    }
  }, [edit])
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    pullData();
  }
  function closeModal() {
    setIsOpen(false);
    setInputIsNull([])
    onOff()
    console.log('setIsOpen is false')
  }
  const pullData = async () => {
    const client = axios.create({
      baseURL: 'http://localhost:7001',
    })
    const res = await client.get(`/users/me/activitiesReccord/${id}`)
    setUpdateData(res.data)
  }

  const onChange = ({ target }) => {
    const { name, value } = target
    setUpdateData({ ...updateData, [name]: value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    let isNull = [];
    Object.values(updateData).map((data, index) => {
      return (data === "") && isNull.push(index)
    })
    setInputIsNull(isNull)
    if (isNull.length === 0){
      setIsOkToUpdate(true)
    }
  }
  useEffect(()=>{
    (async ()=> {const client = axios.create({
          baseURL: 'http://localhost:7001',
        })
        if (isOkToUpdate){
          const res = await client.put(`/users/me/activitiesReccord/${id}`,updateData)
          console.log(res)
          alert('Update Success')
          closeModal()
          window.location.reload();
        }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isOkToUpdate])
return (
  <div>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit Modal"
    >
      <form className='form-input' onSubmit={onSubmit}>
        <h2 style={{ color: "black" }}>Edit</h2>
        <label>Description </label>
        <input type="text" name='description' value={updateData.description} onChange={onChange} />
        {inputIsNull[0] === 1 && <p className='error'>Please fill in the blank</p>}
        <label>Activity List</label>
        <select value={updateData.activity} name='activity' onChange={onChange}>
          <option value="run">Run</option>
          <option value="walk">Walk</option>
          <option value="bicycle">bicycle</option>
          <option value="swimming">Swimming</option>
          <option value="hiking">Hiking</option>
        </select>
        <label>Kcalories</label>
        <input type="number" name='kcalories' value={updateData.kcalories} onChange={onChange} />
        {(inputIsNull[0] === 3 || inputIsNull[1] === 3) && <p className='error'>Please fill in the blank</p>}
        <label>Date</label>
        <input type="date" name='date' value={updateData.date} onChange={onChange} />
        <button type='submit'>Save</button>
        <button onClick={closeModal}>Close</button>
      </form>
    </Modal>
  </div>
);
}

export default EditModal;