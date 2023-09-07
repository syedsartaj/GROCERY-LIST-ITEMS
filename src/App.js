import './index.css'
import Header from './Header'
import Searchitem from './SearchItem';
import Conntent from './Conntent'
import Footer from './Footer';
import { useState, useEffect } from "react";
import AddItems from './AddItems';
import apiRequest from './apiRequest';
//npx json-server -p 3500 -w data/db.json
//npm start                              

function App() {
      const API_URL='  http://localhost:3500/items';
      
      const [items, setItems] = useState([]);
      const [newitems,setnewitems]=useState('');
      const [isLoading, setIsLoading]=useState(true)
      const [seach ,setsearch] = useState('');
      const [fetchitems , setfetchitems] = useState('');

      useEffect(() => {
        const fetchitems = async () => {
          try{
            const response = await fetch(API_URL);
            if(!response.ok) throw Error('did not get the required data');
            const listitems= await response.json();
            console.log(listitems)
            setItems(listitems);
            setfetchitems(null)
          }catch (err){
            setfetchitems(err.message)
          }finally{
            setIsLoading(false);
          }
        }

       setTimeout(async ()=> {
        (async () => await fetchitems())();
      },2000)
       },[])



      const additem = async(item) => {
            const id = items.length ? items[items.length-1].id +1 :1;
            const mynewitem = { id, checked:false, item};
            const listitems = [...items,mynewitem];
            setItems(listitems);

            const postOption = {
              method :'POST',
              headers:{
                'content-Type':'application/json'      
              },
              body:JSON.stringify(mynewitem)
              }
              const result =await apiRequest(API_URL,postOption);
              if (result)setfetchitems(result);
      }
      const handlecheck = async(id) => {
              const listitems = items.map((item) => item.id === id ? { ...item, 
              checked: !item.checked} : item);
              setItems(listitems);

              const myitem = listitems.filter((item) => item.id === id);
              const updateoption = {
                method :'PATCH',
              headers:{
                'content-Type':'application/json'      
              },
              body:JSON.stringify( {checked :myitem[0].checked})
              }
              const requrl = `${API_URL}/${id}`;
              const result =await apiRequest(requrl,updateoption);
              if (result)setfetchitems(result);

              }
      

      const handledelete=async(id) => {
              const listitems = items.filter((item) => item.id!== id);  
              setItems(listitems);

              const deleteoption = {method :'DELETE'};
              const requrl = `${API_URL}/${id}`;
              const result =await apiRequest(requrl,deleteoption);
              if (result)setfetchitems(result);
          
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        if(!newitems) return;
        additem(newitems)
        setnewitems('');
        console.log('submitted')
      }

  return (

    <div className="App">
      <Header   title ='Grocery List '/>
      <AddItems 
          newitems ={newitems}
          setnewitems ={setnewitems}
          handleSubmit ={handleSubmit}/>

      <Searchitem
          seach ={seach}
          setsearch = {setsearch}/>

      <main>
        {isLoading && <p>Loading It...</p>}
        {fetchitems && <p style={{ color: 'red'}}>{`error : ${fetchitems}`}</p>}
        {!fetchitems && !isLoading&&<Conntent 
            items = {items.filter(item => ((item.item).toLowerCase())
              .includes(seach.toLowerCase()))}
            handlecheck = {handlecheck}
            handledelete = {handledelete}
            />}
      </main>
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
