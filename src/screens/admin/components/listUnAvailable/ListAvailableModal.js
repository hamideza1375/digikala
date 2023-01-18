import React from 'react';
import { View, Text } from 'react-native';
import { Modal, Button } from '../../../../Components/Html';

const ListAvailableModal = (p) => {
  const sendTrueAvailable = () => p._admin.sendAvailable()

  return (
    <Modal style={{ width: 333, height: 165, backgroundColor: '#eee', justifyContent: 'space-around' }} setshow={p.setshowModalAvailabe} show={p.showModalAvailabe}>
      <Text style={{ fontSize: 17 }} >از انتخابتون مطمئنید</Text>
      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
        <Button color='#fff' bgcolor='#9ad' onPress={sendTrueAvailable} style={{ fontSize: 14, width: 78, marginVertical: 11 }}>بله</Button>
      </View>
    </Modal >)
}

export default ListAvailableModal