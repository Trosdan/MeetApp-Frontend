import React from 'react';

import PropTypes from 'prop-types';
// import { Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <h1>default</h1>
      {children}
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
