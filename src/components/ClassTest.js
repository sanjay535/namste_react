import React from 'react';
import ClassTestChild from './ClassTestChild';

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
     console.log("parent constructor");
   }

   componentDidMount(){
    console.log("parent componentDidMount");
   }

    render(){
        console.log("Parent render");
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
            <ClassTestChild name={"1st"}/>
            <ClassTestChild name={"2nd"}/>
            </div>

        );
    }
}
/**
 * parent constructor
 * parent render
 *  Child constructor 1st
 *  child render 1st
 *  child constructor 2nd
 *  child render 2nd
 *  child componentDidMount 1st
 *  child componentDidMount 2nd
 * Parent componentDidMount 2nd
 */

export default ClassTest;