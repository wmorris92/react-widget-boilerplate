import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  width: 600px;
  height: 300px;
  background-color: ${({ colour }) => colour};
`;

const Widget = ({ colour }) => (
  <Box colour={colour} />
);

Widget.propTypes = {
  colour: PropTypes.string.isRequired,
};

export default Widget;
