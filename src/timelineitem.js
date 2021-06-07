import React from 'react';
import './App.css';
import {renderToString} from 'react-dom/server';
const TimelineItem = ({ data }) => {
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
            
            <p>{data.name}</p>
            
            <span className="circle" />
        </div>
    </div>
    );
}
export default TimelineItem;
