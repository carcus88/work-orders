// Main React component, that we'll import in `src/app.js`
//
// Note a few points from this file:
//
// 1.  We're using the format `main/index.js` for this file, which means we
// can simply import 'src/components/main', which will auto-default to index.js.
// This is a useful pattern when you have styles/images to pull from, and you
// want to keep the component tree organised.
//
// 2.  We import SASS and a logo SVG file directly.  Classnames will be hashed
// automatically, and images will be compressed/optimised in production.  File
// names that are made available in the import variable will be identical on
// both the server and browser.
//
// 3.  We're introducing React Router in this component.  In RR v4, routes are
// not defined globally-- they're defined declaratively on components, so we
// can respond to route changes anywhere.
//
// 4.  We're using `react-helmet`, which allows us to set <head> data like
// a <title> or <meta> tags, which are filtered up to the main <Html> component
// before HTML rendering.

// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';

// Routing via React Router
import {
    Link,
    Route,
    Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';

/* ReactQL */

// NotFound 404 handler for unknown routes, and the app-wide `history` object
// we can use to make route changes from anywhere
import { Redirect, history } from 'kit/lib/routing';

/* App */

// Child React components. Note:  We can either export one main React component
// per file, or in the case of <Home>, <Page> and <WhenFound>, we can group
// multiple components per file where it makes sense to do so
import GraphQLMessage from 'components/graphql';
import { Home, Page, WorkOrders, WhenNotFound } from 'components/routes';

// Styles
import bootstrap from 'node_modules/bootstrap';ç
import css from './main.scss';

function Nav(props) {
    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/work_orders">Work Orders</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/page/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/page/contact">Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/old/path">Go Back</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default () => (
    <div className='container'>
        <Helmet>
            <title>ReactQL application</title>
            <meta name="description" content="ReactQL starter kit app"/>
            {/* <base href="http://localhost:8081/" /> */}
            <link href="/Users/mat/projects/work-orders/node_modules/bootstrap/dist/js/bootstrap.js" type="style/css"/>
        </Helmet>
        <Nav />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/work_orders" component={WorkOrders}/>
            <Route path="/page/:name" component={Page}/>
            <Redirect from="/old/path" to="/new/path"/>
            <Route component={WhenNotFound}/>
        </Switch>
    </div>
);
