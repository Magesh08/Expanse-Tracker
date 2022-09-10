import './ExpanseDate.css'

function ExpanseDate(props) {
       
    const month= props.date.toLocaleString('en-US',{mounth: 'long'});
    const day=props.date.toLocaleString('en-US',{day: '2-digit'});
    const year= props.date.getFullYear();
    
    return(
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expens-date__date'>{day}</div>
    </div>
    )
}

export default ExpanseDate;