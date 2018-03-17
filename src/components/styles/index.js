// Example of CSS, SASS and LESS styles being used together

// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* App */

// Styles
import css from './styles.css';
import sass from './styles.scss';
import less from './styles.less';

import bs from './bootstrap/bootstrap.scss';

// ----------------------

const cssButton = `${bs.btn} ${bs['btn-primary']}`;

export default () => (
  <ul className={css.styleExamples}>
    <li className={css.example}>Styled by CSS</li>
    <li className={sass.example}>Styled by SASS</li>
    <li className={less.example}>Styled by LESS</li>
    <li className={bs.btn}>
      <button type="button" className={cssButton} data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
      </button>
    </li>
  </ul>
);
