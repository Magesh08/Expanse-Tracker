import React from "react";
import './Expanseitem.css';
import ExpanseDate from "./ExpanseDate";
import { useState } from "react";

function Expanseitem(props) {
 
const[title,setTitle]= useState(props.title);

  let Change = () =>{
    setTitle("Magesh varan") 
  }

    return( 
        <div className="expense-item">
          <ExpanseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
          
                <div className="expense-item__price">{props.amount}</div>

              </div>
              <button onClick={Change}>Change</button>
        </div>
    )
}

export default Expanseitem;