
import React,{useState,useEffect, createElement} from 'react';
import TimelineItem from './timelineitem.js';
import renderToString from 'react-dom/server';
import ReactDOMServer from 'react-dom/server';
function App() {
  const[user,setData]=useState([]);
  
  const saveuser = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: e.target.Name.value,
      svgUrl:e.target.svgUrl.value,
    };
    setData([...user, newUser]);
    e.target.Name.value = "";
    e.target.svgUrl.value="";
  };
  const[svg,setSvg]=useState(null);
    
    
  useEffect(() => {
      fetch(svgUrl)
          .then(res => res.text())
          .then(setSvg)
      
           }, [svgUrl]);
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
<input type="text" name="Name"/>
<input type='text' name='svgUrl' />
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
//    Parse(html,App);
export default App;
