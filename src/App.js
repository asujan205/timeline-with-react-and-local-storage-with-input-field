
import React,{useState,useEffect} from 'react';
import TimelineItem from './timelineitem.js';

function App() {
  const[user,setData]=useState([]);
  
  const saveuser = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: e.target.Name.value,
    };
    setData([...user, newUser]);
    e.target.Name.value = "";
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
  return (
    <div>
    <form onSubmit={saveuser}>
      
        <lable>Name:</lable>
<input type="text" name="Name"/>
<input type="submit" />
    
    </form>
    <div className="timeline-container">
            {user.map((data) => (
                <TimelineItem data={data}  />
            ))}
        </div>
    </div>
    
  );
}

export default App;
