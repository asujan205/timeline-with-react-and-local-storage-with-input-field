
import React,{useState,useEffect, createElement} from 'react';
import TimelineItem from './timelineitem.js';
import Select from 'react-select';
import {groupedOptions} from'./docs/data';

// import required react-datepicker styling file
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const[user,setData]=useState([]);
  
  const saveuser = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: e.target.Name.value,
      svgUrl:e.target.svgUrl.value,
      bgColor:e.target.color.value,
      dateTime:e.target.date.value,
    };
    setData([...user, newUser]);
    e.target.Name.value = "";
    e.target.svgUrl.value="";
    e.target.color.value="";
    e.target.date.value='';
  };

  useEffect(() => {
    const json = JSON.stringify(user);
    localStorage.setItem("users", json);
  }, [user]);

  useEffect(() => {
  const json = localStorage.getItem("users");
  const users = JSON.parse(json);
  if (users) {
    setData(users);
  }
}, []);

const a=()=>{
  
  const inerPart=document.getElementById('timeline').innerHTML;
   const orderHtml = '<html><head><title></title></head><body>' + inerPart + '</body></html>'
  console.log(orderHtml); 

 
}
  return (

    <div>
    <form onSubmit={saveuser}>
      
        <lable>Name:</lable>
<input type="text" name="Name"/><br/>
<lable>SVG:</lable>
<input type='text' name='svgUrl' /><br/>
<lable>backgroundColor:</lable>
<Select
        className="basic-single"
        classNamePrefix="select"
        name="color"
        options={groupedOptions}
        
      /><br/>
      <label>Date</label>
      <input type="date" name="date" /><br/>
<input type="submit" onClick={a} />
    
    </form>
    <div id="timeline">
    <div className="timeline-container"   >
 
            {user.map((data) => (
                <TimelineItem data={data}  />
            ))}
        </div>
      
    </div>
   </div>
  );
  

 
}

export default App;
