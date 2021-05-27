import React from 'react';
import UpdatedComponent from './withCounter'

class HoverCounter extends React.Component{

    render(){
        const {count, handleClick} = this.props
        return(
            <div>
                {/* <h2>{this.props.name}</h2> */}
                <h1 onMouseOverCapture={handleClick}>Hover {count} times</h1>
            </div>
        )
    }
}
export default UpdatedComponent(HoverCounter, 50);