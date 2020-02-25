import React, {useState} from 'react';
import search_icon from './search_icon.png';
import SearchField from './SearchField';

export default function Search(props){


  const [showInput, renderInput] = useState(false);


  const handleClick = () => {
    console.log(showInput);
    renderInput(true)
  }



  return(
    <div style={{display: "flex"}}>
    <img src={search_icon} style={{width: "25px", paddingRight: "20px"}} onClick={handleClick} />
    {showInput ? <input style={{height: "20px"}} type="text"/> : null}
    </div>
  )
}
