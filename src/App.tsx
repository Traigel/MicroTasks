import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/01/Header";
import {Body} from "./components/01/Body";
import {Footer} from "./components/01/Footer";
import {NewComponent} from "./components/02/NewComponent";
import {Button} from './components/03/Button';
import {UseState} from "./components/04/UseState";
import {FilterComponent} from "./components/05/Filter";
import {FullInput} from "./components/06/FullInput";
import {InputComponent} from "./components/06/InputComponent";
import {ButtonComponent} from "./components/06/ButtonComponent";
import {FullInputComponent} from "./components/06/FullInputComponent";
import {Examples} from "./examples/Examples";

const App = () => {

    const topCars = [
        {id: 1, manufacturer: 'BMW', model: 'm5cs'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 3, manufacturer: 'Audi', model: 'rs6'}
    ]
    const buttonFoo = (name: string, age: number) => console.log(name, age)
    const buttonStopFoo = () => console.log('Stop')

    const [message, setMessage] = useState([
            {message: 'Hello'},
        ]
    )
    const addMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }

    return <div className="App">
        <div className={'06'}>
            06
            <FullInputComponent/>
            <FullInput messagesArr={message} addMessage={addMessage}/>
        </div>
        <hr/>
        <div className={'05'}>
            05
            <FilterComponent/>
        </div>
        <hr/>
        <div className={'04'}>
            04
            <UseState/>
        </div>
        <hr/>
        <div className={'03'}>
            03
            <Button name={'One button'} callBack={() => buttonFoo('Vova', 28)}/>
            <Button name={'Two button'} callBack={() => buttonFoo('Alex', 23)}/>
            <Button name={'Stop'} callBack={buttonStopFoo}/>
        </div>
        <hr/>
        <div className={'02'}>
            02
            <NewComponent topCars={topCars}/>
        </div>
        <hr/>
        <div className={'01'}>
            01
            <Header titleFoHeader={'Hello, I`m new Header'}/>
            <Body titleFoBody={'Hello I`m new Body'}/>
            <Footer titleFoFooter={'Hello I`m new Footer'}/>
        </div>

        Examples:
        <Examples/>

    </div>;
}

export default App;