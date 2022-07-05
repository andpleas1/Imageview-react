import { useEffect, useState } from "react";

const Recommended = ({data, removeItem})=>{
   
    const [hover, setHover] = useState(false)

    const removeNewItem = () => {
        removeItem(data);
    }
    return(
        <div className='col-lg-2 text-center' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={data.img}/>
            <p>{data.title}</p>
            <button onClick={removeNewItem} style={{ visibility: hover ? "visible": "hidden" }} >Remove Button</button>
        </div>
    );
}

export default Recommended;