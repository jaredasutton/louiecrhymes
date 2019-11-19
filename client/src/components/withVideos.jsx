import React from 'react';
import Context from '../context/Context';

export default Component => {
  return props => (
    <Context.Consumer>
      {state => <Component {...props} videos={state} />}
    </Context.Consumer>
  );
};
