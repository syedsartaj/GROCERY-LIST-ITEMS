const Searchitem = ({ seach,setsearch}) => {
    return (
        <form ClassName ='searchForm'
                 onsubmit = {(e) => e.preventDeafult()}>
            <input
              id = 'search'
              type = 'text'
              role="searchbox"
              placeholder="Search items"
              value = {seach}
              onChange = {(e) => setsearch(e.target.value)}/>
        </form>

    )
}

export default Searchitem