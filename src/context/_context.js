import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { initial } from './_initialState';
import { client } from './client';
import { admin } from './admin';
import { user } from './user';

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
    // , phone: PropTypes.number
    // , star: PropTypes
    // , captcha: PropTypes.bool
    // , myCode: PropTypes.number
    // , token: PropTypes
    // , price: PropTypes.number
    // , code: PropTypes.number
    // , imageUrl: PropTypes.string
    showActivityHome: PropTypes.bool
    , showActivity: PropTypes.bool
    , severalTime: PropTypes.number
    , severalShow: PropTypes.bool
    , rand: PropTypes.number
    , useEffect: PropTypes.func
    , several: PropTypes.number
    , sendMessage: PropTypes.bool
    , showModalAvailabe: PropTypes.bool
    , splash: PropTypes.bool
    , list: PropTypes.array
    , timeChange: PropTypes.number
    , showModal: PropTypes.bool
    , replaceInput: PropTypes.bool
    , totalTitle: PropTypes.array
    , star5: PropTypes.bool
    , star4: PropTypes.bool
    , star3: PropTypes.bool
    , star2: PropTypes.bool
    , star1: PropTypes.bool
    , width: PropTypes.number
    , height: PropTypes.number
    , input: PropTypes.string
    , currentPage: PropTypes.number
    , current: PropTypes.array
    , pageLimit: PropTypes.number
    , page: PropTypes.number
    , ass: PropTypes.bool
    , checkbox: PropTypes.bool
    , remember: PropTypes.number
    , confirmPassword: PropTypes.string
    , password: PropTypes.string
    , email: PropTypes.string
    , fullname: PropTypes.string
    , myPhone: PropTypes.string
    , tokenValue: PropTypes.object
    , showForm: PropTypes.bool
    , message: PropTypes.string
    , allstar: PropTypes.number
    , host: PropTypes.string
    , info: PropTypes.string
    , title: PropTypes.string
  }
}