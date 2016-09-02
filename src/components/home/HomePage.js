import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Tara Ojo</h1>
                <Link to="about">About me</Link>
            </div>
        );
    }
}

export default HomePage;
