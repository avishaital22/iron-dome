import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from "./Canvas";
class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Canvas/>
                <div>
                    <button onClick={()=>{return;}}>Start</button>
                    <button onClick={()=>{return;}}>Stop</button>
                </div>
            </div>
        );
    }}

export default App;
