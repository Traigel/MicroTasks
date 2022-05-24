import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {NewComponent} from "./components/NewComponent";

const App = () => {

    const topCars = [
        {id: 1, manufacturer:'BMW', model:'m5cs'},
        {id: 2, manufacturer:'Mercedes', model:'e63s'},
        {id: 3, manufacturer:'Audi', model:'rs6'}
    ]

    return <div className="App">
        <Header titleFoHeader={'Hello, I`m new Header'}/>
        <Body titleFoBody={'Hello I`m new Body'}/>
        <Footer titleFoFooter={'Hello I`m new Footer'}/>
        <NewComponent topCars={topCars}/>
    </div>
}

export default App;