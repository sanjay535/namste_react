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

   componentDidUpdate(){
    console.log("parent componentDidUpdate");
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
 *
 */

export default ClassTest;