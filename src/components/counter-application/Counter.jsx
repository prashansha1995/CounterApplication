import React,{Component} from 'react';
import './counter.css';
import PropTypes from 'prop-types';

 class Counter extends Component
{
    //Define initial state in a Constructor
    constructor(){
        //to make "this" available in constructor call super();
        super();
        //bind "this" to a method
         this.increment_value=this.increment_value.bind(this);
         this.decrement_value=this.decrement_value.bind(this);


    }
    render(){
    return(
        <div>
            <br/>
            <br/>
        <button onClick={this.increment_value}>+{this.props.by}</button>
        <button onClick={this.decrement_value}>-{this.props.by}</button>

        </div>
    )
    }

    decrement_value()
    {
          this.props.incrementMethodProps(-this.props.by)
    }
     increment_value()
{
        // //to make "this" available inside a method,bind a method to the class using constructor

     this.props.incrementMethodProps(this.props.by);

} 

/* increment_value=()=>
{
         to make "this" available inside a method,bind a method to the class,
            but to avoid binding this in a constructor,we can convert our function to arrow function
            just like lambdas in java
      

   //  this.setState( {counter_val:this.state.counter_val + 1})

}*/
 

     
}

//Defining by default value of any property.
Counter.defaultProps={
    by:1
}

//Defining datatype of Property.So that in case datatype is number and we are providing "String",
//so it gives relevant warning in console.
Counter.propsType={
    by:PropTypes.number
}
export default Counter