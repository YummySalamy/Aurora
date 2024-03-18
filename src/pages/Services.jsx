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
            title: 'Mobile Development',
            content: 'We design and develop mobile applications for businesses and individuals.',
        },
        {
            title: 'Consulting',
            content: 'We provide consulting services to businesses and individuals.',
        },
    ]);
    return (
        <div className="services">
            <h1>Our Services</h1>
            <p>Check out our services below.</p>
            <Grid columns={3}>
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
