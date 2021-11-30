import React , {useState} from 'react';
import './NavBar.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import ReactStars from "react-rating-stars-component";
function NavBar ({ setTitleSearch, setRatingSearch, titleSearch }){
    const [showLinks , setShowLinks] = useState(false);
    return( 
      <div className="NavBar">
        <div className="logo">
          <a href="/logo"><img src="/logo.png" alt="logo"/></a> 
        </div>
      <div className="leftSide">
      
        <div className="links" id={showLinks ?  "hidden":""}>
          <a href="/home">Home</a>
          <a href="/popular">Polpular Movies</a>
          <a href="/all">All movies</a>
        </div>
        <button onClick={()=>setShowLinks(!showLinks)}>
          <ReorderIcon style={{ color:'white', }}/>
        </button>
      </div> 
      <div className="rightSide">
        <div className="searchSection">
          <input type="text" placeholder="Search..." value={titleSearch}
                        onChange={(event) => {
                            setTitleSearch(event.target.value);
                        }} />
          <button id="searchButton"><SearchIcon style={{ color:'white',width:'22px'}}/></button>
        </div> 
        
        <div className="ratingSection">< ReactStars  count={5} 
                        onChange={setRatingSearch}
                        size={18}
                        isHalf={true}
                        activeColor=" rgb(255, 255, 0)"
                        fullIcon={<i className="fa fa-star" ></i>} />
        </div>
    </div>
    </div>
    )
       
    
}
export default NavBar;