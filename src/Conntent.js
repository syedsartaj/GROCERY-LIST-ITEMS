import ItemList from "./ItemList"
const Conntent = ({ items, handlecheck , handledelete}) =>{
    
    return (
        <>
            {items.length ? (
                <ItemList
                items = {items}
                handlecheck = {handlecheck}
                handledelete={handledelete} 
                />

            ) : (
            <p style ={{marginTop:'2rem'}}>your list is empty</p>
            )}
        </>
    )
}

export default Conntent