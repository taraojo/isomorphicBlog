import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import BlogsPage from './components/blog/BlogsPage';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="blog" component={BlogsPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
