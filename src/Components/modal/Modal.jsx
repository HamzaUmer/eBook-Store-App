import "./modal.css"
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({show,i,onClose}) => {
    if(!show) {
        return null;
    }
    let thumbnail = i.volumeInfo.imageLinks && i.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
    <div className="overlay">
        <div className="overlay-inner">
            <button className="close" onClick={onClose}><CloseIcon/></button>
            <div className="inner-box">
                <img src={thumbnail} alt="thumb" />
                <div className="info">
                    <h1>{i.volumeInfo.title}</h1>
                    <h3>{i.volumeInfo.authors}</h3>
                    <h4>{i.volumeInfo.publisher}<span>{i.volumeInfo.publishedDate}</span></h4>
                    <a href={i.volumeInfo.previewLink}><button>More</button></a>
                </div>
            </div>
            <h4 className="description">{i.volumeInfo.description} </h4>
        </div>
    </div>
    </>
  )
}

export default Modal