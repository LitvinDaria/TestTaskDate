 
import './App.css';
import GetTime from './GetTime';

   
   
function GetDateToday(props) {
  var today = new Date();
  const hour = today.getHours();  
  const wish = "";
  //const wish = `${(hour < 6 && 'Ночь') || (hour < 12 && 'Утро')|| (hour < 18 && 'День') || 'Вечер'} `;   
  /*if (hour >= 0 && hour < 6)  wish = "ночь";  
  else if (hour >= 6 && hour < 13) wish = "утро";
  //else if (hour >= 13 && hour < 18) wish = "день";
  //else if (hour > 12 && hour <= 18) wish = "день";
  //else if (hour > 18 && hour <= 0){ wish = "вечер";}*/
  
  return (
    <div>
    <h1>Дата: {today.toLocaleDateString() + ""} </h1>
    <GetTime />
    <h1>Время суток: {(hour < 6 ? 'Ночь': (hour < 12 ? 'Утро': (hour < 18 ? 'День' : 'Вечер') ) )} </h1>
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