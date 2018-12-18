import React from 'react';
import PropTypes from 'prop-types';

// function Hello(props) {
//   return <b>Hello {props.name}</b>;
// }

const Hello = ({name = ''}) => (
  <b>Hello {name}</b>
);

Hello.propTypes = {
  name: PropTypes.string,
};

/*
Hello.defaultProps = {
  name: '',
};
*/

export default Hello;