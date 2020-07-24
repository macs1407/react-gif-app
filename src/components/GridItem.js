import React from 'react';

const GridItem = ({title, url}) => {
    return ( 
        <div className="card animate__bounceOutUp">
            <img src={url} title={title} alt={title}/>
            <p>{title}</p>
        </div>
     );
}
 
export default GridItem;