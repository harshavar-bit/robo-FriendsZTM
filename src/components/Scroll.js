import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div    className='scrollbar'
                style={
                    {   overflowY:'scroll',
                        border:'5px solid', 
                        borderColor:'' , 
                        height:'700px', 
                        width:'auto'}
                        }>
            {props.children}
        </div>
    )
}

export default Scroll