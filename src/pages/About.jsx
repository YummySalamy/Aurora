import React, {useState} from 'react';
import Grid from '../helpers/Grid';
import Card from '../components/Card';
import './assets/PagesStyles.css';

const cards = [
    {
        title: 'Our Mission',
        content: 'Our mission is to provide high-quality products and services to our customers.',
    },
    {
        title: 'Our Vision',
        content: 'Our vision is to become the leading provider of products and services in our industry.',
    },
    {
        title: 'Our Values',
        content: 'Our values are integrity, excellence, and customer satisfaction.',
    }
];

const About = () => {
    const [elements, setElements] = useState(cards);
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>Welcome to our website!</p>
            <p>We are a team of passionate individuals dedicated to providing high-quality products and services.</p>
            
            <span>We are currently in the process of building our website, so please check back soon for updates.</span>
        </div>
    );
};

export default About;
