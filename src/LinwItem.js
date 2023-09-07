import { FaTrashAlt} from 'react-icons/fa';
const LinwItem = ({item, handlecheck , handledelete}) =>{
    return(
        <li className = "item">
                <input
                type="checkbox"
                onChange={() => handlecheck(item.id)}
                checked={item.checked}></input>
                <label 
                    style={(item.checked) ? { textDecoration:'line-through'} : null}
                    onDoubleClick={() => handlecheck(item.id)}
                >
                    {item.item}</label>
                <FaTrashAlt 
                    onClick ={()=>handledelete(item.id)}
                    role='button'
                    tabIndex="0"
                    arial-label={'Delete ${item.item}'}
                />
            </li>
    )
}

export default LinwItem