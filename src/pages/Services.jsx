import React, { useState } from 'react';
import Grid from '../helpers/Grid';
import Card from '../components/Card';

const Services = () => {
    const [elements, setElements] = useState([
        {
            title: 'Web Development',
            content: 'We design and develop websites for businesses and individuals.',
        },
        {
            title: 'AI Solutions',
            content: 'We provide AI solutions to businesses and individuals.',
        },
        {
            title: 'Consulting',
            content: 'We provide consulting services to businesses and individuals.',
        },
    ]);
    const isMobile = window.innerWidth < 768;
    return (
        <div className="services">
            <h1>Our Services</h1>
            <p>Check out our services below.</p>
            <Grid columns={isMobile ? 1 : 3}>
                {elements.map((element, index) => (
                    <Card key={index}>
                        <h2>{element.title}</h2>
                        <p>{element.content}</p>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}

export default Services;
