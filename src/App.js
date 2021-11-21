 
import './App.css';
import GetTime from './GetTime';

   
   
function GetDateToday(props) {
  var today = new Date(2021, 11, 11, 0, 15, 0, 0);
  const hour = today.getHours();
  const wish = `${(hour < 6 && 'Ночь') || (hour < 12 && 'Утро')|| (hour < 18 && 'День') || 'Вечер'} `;   
  return (
    <div>
    <h1>Дата: {today.toLocaleDateString() + ""} </h1>
    <GetTime />
    <h1>Время суток: {wish} </h1>
    </div>
   
)
 
}
function App() {
  return ( 
    <div name="email-value">
      <GetDateToday/>  
      </div> 
  );
}

export default App