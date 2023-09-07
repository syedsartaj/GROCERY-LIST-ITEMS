import { FaPlus} from 'react-icons/fa';

const AddItems = ({newitems,setnewitems,handleSubmit}) => {
    return(
        <form className= 'addForm' onSubmit={handleSubmit}>
            <input
                autoFocus
                id='additem'
                type='text'
                placeholder="Add item"
                required
                value={newitems}
                onChange={(e) => setnewitems(e.target.value)}
                />
            <button
                type = 'submit'
                aria-label="Add-item">
                    <FaPlus/>
                </button>

        </form>
    )
}

export default AddItems