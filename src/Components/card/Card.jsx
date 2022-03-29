import "./card.css"
import React, {useState} from 'react'
import Modal from "../modal/Modal";

const Card = ({book}) => {
  const [show,setShow] = useState(false);
  const [bookItem,setBookItem] = useState();

  return (
    <>
    { book.map((i)=> {
      let thumbnail = i.volumeInfo.imageLinks && i.volumeInfo.imageLinks.smallThumbnail;
      // let price = i.saleInfo.listPrice && i.saleInfo.listPrice.price;
      if(thumbnail !== undefined){
        return(
          <>
             <div className="card" onClick={()=> {setShow(true); setBookItem(i)}}>
                 <img src={thumbnail} alt="cover" />
                 <div className="desc">
                     <h3 className="title">{i.volumeInfo.title}</h3>
                     <p className="price">Rs.400</p>
                 </div>
             </div>
             <Modal show={show} i={bookItem} onClose={()=> setShow(false)}/>
             </>
             )
      }

          })
}
    </>
  )
}

export default Card