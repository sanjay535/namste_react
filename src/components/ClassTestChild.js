import React from 'react';

class ClassTestChild extends React.Component{
    constructor(){
        super()
        this.state={
            user:{}
        }
        // console.log("Child constructor "+props?.name);
    }

   async componentDidMount(){
       // console.log("Child componentDidMount "+this.props?.name); // it doesn't wait for promise resoilved
        const data=await fetch('https://dummyjson.com/users/1');
        const jsonData=await data.json();
        this.setState(jsonData);
    }

    componentDidUpdate(){
       // console.log("Child componentDidUpdate "+this.props?.name);
    }

    render(){
        //console.log("child render "+this.props?.name)
          return (
             <>
            <h2>Child class component</h2>
            <h4>Name= {this.state.firstName}</h4>
            </>
        )
    }
}

/**

"SEPRATE"
 When update happen in parent Component
'SEPRATE'

 Parent render
 child render 1st
 Child componentDidUpdate 1st
 parent componentDidUpdate
 */

export default ClassTestChild;