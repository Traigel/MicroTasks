import React from 'react';
import './App.css';
import {Header} from "./components/HeaderComponent";
import {Body} from "./components/BodyComponent";
import {Footer} from "./components/FooterComponent";

const App = () => {
    return <div className="App">
        <Header titleFoHeader={'Hello, I`m new Header'}/>
        <Body titleFoBody={'Hello I`m new Body'}/>
        <Footer titleFoFooter={'Hello I`m new Footer'}/>
    </div>
}

export default App;