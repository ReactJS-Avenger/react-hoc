//This is the HOC component

import React from 'react';

const UpdatedComponent = (OriginalComponent, incrementNumber) =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
    
            this.state= {
                count: 0
            }
        }
    
        handleClick =()=>{
            this.setState( prevState =>{
                return {count: prevState.count+ incrementNumber}
            })
        }
        render(){
            return <OriginalComponent count={this.state.count} handleClick={this.handleClick} {...this.props}/>
            // ...this.props will pass whatever the props from the component
        }
    }
    return NewComponent;
}
export default UpdatedComponent;