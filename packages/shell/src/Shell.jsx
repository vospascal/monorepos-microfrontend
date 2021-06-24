import React from 'react';

import Footer from 'footer/Footer';
import Header from 'header/Header';
import Content from 'content/Content';
import Counter from "./components/Counter/Counter";

const Shell = () => {
    return (
    <div style={{border: '2px dashed LightSlateGray', padding: '5px', margin: '5px'}}>
        <Counter></Counter>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>)
}

export default Shell