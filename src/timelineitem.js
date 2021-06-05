import React from 'react';
import './App.css';
const TimelineItem = ({ data }) => {
    return(
    <div className="timeline-item">
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