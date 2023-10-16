import React from 'react';

class ClassTestChild extends React.Component{
    constructor(props){
        super(props)
        console.log("Child constructor"+this.props.name);
    }

    componentDidMount(){
        console.log("Child componentDidMount"+this.props.name);
    }

    render(){
        console.log("child render"+this.props.name)
        return(
            <h2>Child class component</h2>
        )
    }
}

export default ClassTestChild;