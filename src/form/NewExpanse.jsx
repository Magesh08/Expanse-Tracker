import Form from './Form';
import './NewExpense.css';


const NewExpanse = (props) =>{

    const saveExpanseDataHandler = (SumitHold)=>{
        const expanseData={
            ...SumitHold,
            id: Math.random().toString()
        };
        props.onAddExapanse(expanseData);
    }
    return(
        <div className='new-expense'>
            <Form onSaveExpanseData={saveExpanseDataHandler}/>
        </div>
    )
}

export default NewExpanse;