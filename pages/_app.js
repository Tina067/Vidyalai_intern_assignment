import React from 'react';
import PropTypes from 'prop-types';
import { WindowWidthProvider } from '../components/hooks/useWindowWidth';

function MyApp({ Component, pageProps }) {
  return (
    <WindowWidthProvider>
      <Component {...pageProps} />
    </WindowWidthProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
