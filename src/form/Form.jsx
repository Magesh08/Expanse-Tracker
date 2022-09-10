import React, { useState } from 'react';
import './Form.css';


const Form =()=>{
    const [enterTitle, setTitle] = useState("")
    const [enterDate, setDate]   =useState('')
    const [enterAmount, setAmount]   =useState('')

    const TitleChange=(event)=>{
        setTitle(event.target.value);
    }

    const DateChanger =(event)=>{
        setDate(event.target.value);
    }
    
    const AmountChanger =(event)=>{
        setAmount(event.target.value);
    }

const SumitPage = (event)=>{
        event.preventDefault();

       const SumitHold = {
            title: enterTitle,
            amount:enterAmount,
            date:new Date(enterDate),

       };
       console.log(SumitHold);
       setTitle('')
       setDate('')
       setAmount('')
}

    return( 
    
    <form onSubmit={SumitPage}>
        <div className="new-expense__controls">
        
        <div className="new-expense__control">
            <label>title</label> 
            <input type="text" value={enterTitle}  onChange={TitleChange}/>
        </div>
        
        <div className="new-expense__control">
            <label>date</label>
            <input type="date" min="2020.02.23" max="2097.12.12"  value={enterDate} onChange={DateChanger} />
        </div>
        
        <div className="new-expense__control">
            <label >amount</label>
            <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={AmountChanger}/>
        </div>
        
        <div className="new-expense__actions">
        <button type='submit'>Track</button>
        </div>
        
    </div>
    </form>
    
    )
}

export default Form;