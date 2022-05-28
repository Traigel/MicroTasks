import React from 'react';
import './App.css';
import {Header} from "./components/01/Header";
import {Body} from "./components/01/Body";
import {Footer} from "./components/01/Footer";
import {NewComponent} from "./components/02/NewComponent";
import {Button} from './components/03/Button';
import {UseState} from "./components/04/UseState";
import {FilterComponent} from "./components/05/Filter";

const App = () => {

    const topCars = [
        {id: 1, manufacturer: 'BMW', model: 'm5cs'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 3, manufacturer: 'Audi', model: 'rs6'}
    ]
    const buttonFoo = (name: string, age: number) => console.log(name, age)
    const buttonStopFoo = () => console.log('Stop')

    return <div className="App">
        <div className={'01'}>
            <Header titleFoHeader={'Hello, I`m new Header'}/>
            <Body titleFoBody={'Hello I`m new Body'}/>
            <Footer titleFoFooter={'Hello I`m new Footer'}/>
        </div>
        <div className={'02'}>
            <NewComponent topCars={topCars}/>
        </div>
        <div className={'03'}>
            <Button name={'One button'} callBack={() => buttonFoo('Vova', 28)}/>
            <Button name={'Two button'} callBack={() => buttonFoo('Alex', 23)}/>
            <Button name={'Stop'} callBack={buttonStopFoo}/>
        </div>
        <div className={'04'}>
            <UseState/>
        </div>
        <div className={'05'}>
            <FilterComponent/>
        </div>
    </div>;
}

export default App;