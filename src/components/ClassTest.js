import React from 'react';

class ClassTest extends React.Component{
    // render is mandatory method of class
    // without defining constructor function we can use props 
    /* 
        1. we can add state anywhere in this.state={} but best place to define inside constructor
        2. constructor call first then render method and when any data change only render will call again not constructor, 
        constructor call only intial.
    
    */
   constructor(props){
     super(props)
     console.log("constructor");
   }

   componentDidMount(){
    console.log("componentDidMount");
   }

    render(){
        console.log(this);
        return (
            <div>
            <h1>Class Component called here</h1>
            <button onClick={()=>this.setState((prevState)=>{
                if(!prevState){
                    return {age:45}
                }else{
                    return {age:prevState.age+2}
                }
            })}>AgeBtn</button>
            </div>
        );
    }
}

export default ClassTest;