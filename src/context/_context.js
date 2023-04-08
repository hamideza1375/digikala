import { createContext, useContext, useEffect } from 'react';
import { initial } from './_initialState';
import { client } from './clientState';
import { admin } from './adminState';
import { user } from './userState';
import { useNavigation } from '@react-navigation/native';

function State() {

  const init = new initial()
  let _user = new user()
  let _client = new client()
  let _admin = new admin()


  this.init = { ...init.all }
  this.user = { ...init.all, ..._user.user }
  this.client = { ...init.all, ..._client.client }
  this.admin = { ...init.all, ..._admin.admin, }

}
export const states = () => new State()
export const contextStates = createContext(states);
export const context = () => useContext(contextStates)



export const propTypes = (component) => {
  component.propTypes = {

  }
}