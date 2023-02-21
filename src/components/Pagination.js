import React,{ useState, useEffect } from "react";
import NEXT from "../assets/next.png";


export const Pagination = ({page, totalPages, onLeftClick, onRightClick}) =>{

    const [divPagination, setDivContainerPagination] = useState(false);

     useEffect(()=>{
        setDivContainerPagination(true)
    },[]);

    return(
        <div className={divPagination? "container-pagination" : "container-pagination-transition"}>
            <img className="back-page" src={NEXT}  alt="back" onClick={onLeftClick} />
            <p className="num-page">Page {page} of {totalPages}</p>
            <img className="next-page" src={NEXT}  alt="next" onClick={onRightClick} />
        </div>
    )
}