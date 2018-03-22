// Demonstrates several components on one page, each with their own `export`.
//
// These are smaller components that <Main> imports, and changes depending
// on the page route (via React Router).
//
// <WhenNotFound> demonstrates the use of <NotFound>, a ReactQL helper
// component that signals to our web server that we have a 404 error, to handle
// accordingly

// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';
import PropTypes from 'prop-types';
import WorkOrdersMain from 'components/work_orders';


/* ReactQL */

//Custom Views



// NotFound 404 handler for unknown routes
import { NotFound } from 'kit/lib/routing';

// ----------------------

// We'll display this <Home> component when we're on the / route
export const Home = () => (
    <div className="container-fluid">
        <h2>The Home Page</h2>
    </div>
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works -- we have a `match`
// prop that gives us information on the route we can use within the component
export const WorkOrders = ({ match }) => (
    <div className="jumbotron">
        <WorkOrdersMain url={match.url}/>
    </div>
);

WorkOrders.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
    }).isRequired,
};

export const Clients = ({ match }) => (
    <div className="container">
        <h1>Clients</h1>
    </div>
);

Clients.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
    }).isRequired,
};

export const Contacts = ({ match }) => (
    <div className="container">
        <h1>Contacts</h1>
    </div>
);

Contacts.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object,
    }).isRequired,
};


export const Page = ({ match }) => (
  <h1>Generic Page: {match.params.name}</h1>
);


// Specify PropTypes of the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

// Create a route that will be displayed when the code isn't found
export const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);
