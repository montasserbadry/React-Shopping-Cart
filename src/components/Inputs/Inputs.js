import React from 'react'

function Inputs(props) {
    return (
        
            <div>
                <label> {props.label}</label>
                <input type={props.type}
                    required name={props.name} onChange={props.onChange} />
            </div>
            
      
    )
}


export default Inputs;