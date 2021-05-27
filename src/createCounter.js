import React from 'react';
import UpdatedComponent from './withCounter'

class ButtonCounter extends React.Component{

    render(){
        const {count, handleClick} = this.props
        return(
            <div>
                {/* <h1>{this.props.name}</h1> */}
             {this.props.name}   <button onClick={handleClick}>Increment {count} times</button>
            </div>
        )
    }
}
export default UpdatedComponent(ButtonCounter, 10)