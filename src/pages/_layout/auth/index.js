import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function AuthLayout({ children }) {
  return (
    <>
      <h1>Auth</h1>
      {children}
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
