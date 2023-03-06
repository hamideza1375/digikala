import React from 'react';
import _useEffect from '../../controllers/_initial';
import {Form} from '../../other/Components/Html'

const Notifee = (p) => {
  _useEffect(()=>{return()=>{p.settitle('');p.setInfo('')}},[])
  const createNotifee = () => p._admin.notifee()
  return <Form webStyle={{height:'calc(100vh - 68px)'}} t i {...p} onClick={createNotifee} />
}
export default Notifee
