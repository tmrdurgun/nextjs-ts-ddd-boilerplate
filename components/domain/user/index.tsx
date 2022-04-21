import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from "./styled";

export const User = () => {
  return (
    <Wrapper>USER DOMAIN COMPONENT!</Wrapper>
  )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(User);