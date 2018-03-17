// Example of CSS, SASS and LESS styles being used together

// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* App */

// ----------------------

export default () => (
  <div className="row">
    <div className="col-12">
      <div className="input-group">
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">Go!</button>
        </span>
        <input type="text" className="form-control" placeholder="Search for..." />
      </div>
    </div>
  </div>
);
