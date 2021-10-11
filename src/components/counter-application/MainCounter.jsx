import React, {Component} from 'react';
import Counter from './Counter'
import './mainCounter.css';



class MainCounter extends Component{

    constructor(){
        super();
        this.state={
            counter_val:0
        }

        this.increment=this.increment.bind(this)
        this.reset_value=this.reset_value.bind(this)
    }

    render()
    {
        return (
            <div className="MainCounter">
            <div>
             <div class="float-child">
              <Counter incrementMethodProps={this.increment}/>
              <Counter by={10} incrementMethodProps={this.increment} /> 
              </div>
              <div class="float-child">
              <Counter by={20} incrementMethodProps={this.increment}/>
              <Counter by={30} incrementMethodProps={this.increment}/>
              </div>
                  
              </div>
              
              <br></br>
              <br></br>
              <div class="float-down">

              <button onClick={this.reset_value}>ResetButton</button>
              <span className="incrementValue">{this.state.counter_val}</span>
              </div>
            </div>
          );
    }

    reset_value(){
         this.setState({counter_val:0})
    }

    increment(by)
    {

        //this.setState({counter_val : this.state.counter_val + by});
        this.setState(
            (prevState)=>{return {counter_val : prevState.counter_val + by}}
        );


    }
}

 export default MainCounter