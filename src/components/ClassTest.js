import React from 'react';
import ClassTestChild from './ClassTestChild';

class ClassTest extends React.Component{
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
            </div>

        );
    }
}
/**
 * Parent constructor
 * Parent render
 * Child constructor 1st
 * Child render 1st
 * Parent componentDidMount
 * child componentDidMount <- because of async
 * child render 1st <- again (if setState called because it call update cycle)
 * 
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */

export default ClassTest;