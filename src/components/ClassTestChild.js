import React from 'react';

class ClassTestChild extends React.Component{
    constructor(props){
        super(props)
        console.log("Child constructor "+this.props.name);
    }

   async componentDidMount(){
         console.log("Child componentDidMount "+this.props.name); // it doesn't wait for promise resoilved
        const data=await fetch('https://dummyjson.com/users/1');
        const jsonData=await data.json();
        console.log("jsonData= ",jsonData);
        console.log("Child componentDidMount "+this.props.name); // it wait for promise to resoilve it can execute
    }

    render(){
        console.log("child render "+this.props.name)
        return(
            <h2>Child class component</h2>
        )
    }
}

export default ClassTestChild;