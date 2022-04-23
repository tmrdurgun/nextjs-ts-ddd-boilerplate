import { createSelector } from '@reduxjs/toolkit';

const domain = (state) => state;

export const selectUser = () => createSelector(
  domain,
  (substate) => substate.user,
);