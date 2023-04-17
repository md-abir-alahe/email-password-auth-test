import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-100'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;