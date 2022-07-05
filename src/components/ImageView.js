// * Dependencies
import { useState } from "react";

const ImageView = ({data, clickFunction, btnState})=>{
    
    // useState to set hover button
    const [hover, setHover] = useState(false)
   
    // Function associated with the button event
    const clickNewFunction = () => {
        clickFunction(data);
    }

    return (
        <div 
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={data.img} alt=""/>
            <p>{data.title}</p>
            { 
                btnState === "Add"
                ? <button onClick={clickNewFunction} style={{ visibility: hover ? "visible": "hidden" }} >Add</button>
                : <button onClick={clickNewFunction} style={{ visibility: hover ? "visible": "hidden" }} >Remove</button>
            }              
        </div>
    );
}

export default ImageView;