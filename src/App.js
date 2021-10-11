import React, {Component} from 'react';
import './App.css';
import FirstFunctionComponent from './components/practise-components/FirstFunctionComponent';
import FirstComponent ,{SecondComponent} from './components/practise-components/FirstComponent';
import MainCounter from './components/counter-application/MainCounter';

// This is how comments are used
/* This is how multi line comments are used
 */
function App() {
  return (
    <div className="App">
      {/* <PractiseComponent/> */}
      <MainCounter/>

    </div>
  );
}

class PractiseComponent extends Component{
  render(){
    return(
      <div class ="PractiseComponent">
        {/* Class component should be linked to Root Component. */}
        <FirstComponent/>
           <SecondComponent/>
           <FirstFunctionComponent/>
    
      </div>
    )
  }
}

export default App;
