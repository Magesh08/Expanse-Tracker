import './App.css';
import Expanseitem from './components/Expanseitem';
import NewExpanse from './form/NewExpanse';

function App(props) {
  
  const expenses = [
    {
      id: 'e1',
      title: 'Boulty',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },

    { id: 'e2', 
      title: 'Rolty', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    
    {
      id: 'e3',
      title: 'Vraty',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  
  return (
    
    
    <div>
        <NewExpanse/>
      <div>
        
      </div>
      {
        expenses.map((expense, i) => (
          <Expanseitem key={i} title={expense.title} amount={expense.amount} date={expense.date}/>  
          // .toLocaleString('en-US',{ mount: 'long'})
        ))
      }
      

    </div>


    
  );
}

export default App;
