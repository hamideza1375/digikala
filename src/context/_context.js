import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { initial } from './_initialState';
import { client } from './clientState';
import { admin } from './adminState';
import { user } from './userState';

function State() {
  const init = new initial()
  const _client = new client()
  const _user = new user()
  const _admin = new admin()
  return {
    ...init.all,
    ..._admin.admin,
    ..._client.client,
    ..._user.user,
  }
}
export const states = () => State()
export const contextStates = createContext(states);
export const context = () => useContext(contextStates)



export const propTypes = (component) => {
  component.propTypes = {
    
  }
}