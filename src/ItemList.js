import LinwItem from './LinwItem'

const ItemList = ({ items, handlecheck , handledelete}) => {
    return(
        <ul>
            {items.map((item) =>(
            <LinwItem
                key = {item.id}
                item ={item}
                handlecheck ={handlecheck}
                handledelete = {handledelete}
                />  
            ))}
        </ul>
    )
}

export default ItemList