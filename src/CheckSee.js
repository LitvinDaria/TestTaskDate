import React from 'react';
import App from './App';
const CheckSee = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
    const ch = `${(checked && 'Скрыть дату')  || 'Отобразить дату'} `;  
  return (
    <div>
     <Checkbox   value={checked} onChange={handleChange} />     {ch}  
    </div>
  );
};
const Checkbox = ({ label, value, onChange }) => {
  let element;
  if (value.toString() === "true"){      
    element = (
      <div>      
        <App/>
        <input type="checkbox" checked={value} onChange={onChange} />         
      </div>
    );
  
  }
    else {
      element = (
        <div>          
          <p>Информация скрыта</p>
          <input type="checkbox" checked={value} onChange={onChange} /> 
        </div>
      ); 
    }  
  return (    
    element 
  );
};
export default CheckSee 