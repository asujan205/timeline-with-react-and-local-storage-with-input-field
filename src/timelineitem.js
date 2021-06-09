import React,{useState,useEffect} from 'react';
import './App.css';
import {renderToString} from 'react-dom/server';
const TimelineItem = ({ data }) => {

    const[svg,setSvg]=useState(null);
    const url=data.svgUrl
    useEffect(() => {
        fetch(data.svgUrl)
            .then(res => res.text())
            .then(setSvg)
             }, [data.svgUrl]);
    return(
    <div className="timeline-item" style={ {
        display: 'flex',
        justifycontent: 'flex-end',
        paddingright: '30px',
        position: 'relative',
        margin: '10px 0' ,
        width: '50%'
      }}>
        <div className="timeline-item-content">
            <span className="tag">
                
            </span>
            <p>SVG:</p>
            <div dangerouslySetInnerHTML={{ __html:svg}} />
            <p>{data.name}</p>
            
            <span className="circle" />
        </div>
    </div>
    );
}
export default TimelineItem;
