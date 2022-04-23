import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import { Wrapper } from "./styled";
import {
  getUser
} from '@actions';

export const User = () => {
  const dispatch = useDispatch();
  const user: object = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());

    console.log('USER: ', user);
    
  });

  return (
    <Wrapper>USER DOMAIN COMPONENT!</Wrapper>
  )
}


export default User;