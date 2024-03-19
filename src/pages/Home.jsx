import React from 'react';
import ComponentsRender from '../helpers/ComponentsRender';
import MainInfo from './home-misc/MainInfo';

import './assets/PagesStyles.css';

const Home = () => {
    return (
            <div className="home">
                <h1>Welcome to <span>Aurora</span></h1>
                <p>This is the beginning.</p>
            </div>
    );
};

export default Home;
