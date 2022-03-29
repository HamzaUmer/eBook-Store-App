import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Bg from "../../img/bg.png"
import "./featured.css"
import Card from '../card/Card';
import axios from "axios"

const Featured = () => {
   const [search, setSearch] = useState(" ");
   const [book,setBook] = useState([])

   const searchBook = async(evt) => {
     try{
     if(evt.key === "Enter"){
          const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBKWJTp67sS1W1Pex8ni1WU6vpG4UIiD4E&maxResults=30`);
         setBook(res.data.items);
     }
    }catch(err){
      console.log(err);
    }
   }
  return (
    <>
    <div className="wrap">
        <div className="left">
            <h2>Find Your Book</h2>
            <div className="srch">
                <input type="text" placeholder='Enter Your Book Title' 
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                onKeyPress={searchBook}
                />
                <button><SearchIcon/></button>
            </div>
            <img src={Bg} alt="bg" />
        </div>
        <div className="right">
          <h1>Reading a good book <br/> is like taking a journey..</h1>
        </div>
    </div>
            <div className="container">
              <div className='main'>
                  {
                    <Card book={book}/>
                  }
            </div>
          </div>
          </>
  )
}

export default Featured