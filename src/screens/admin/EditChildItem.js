import React from 'react'
import { View } from 'react-native';
import {Form} from '../../other/Components/Html';
import Title from '../../other/utils/setTitle';

const EditChildItem = (p) => {
  Title()
  p._admin.getEdit()
  p._admin.unmountEditFood()
  const editeChildFood = () => p._admin.editeFoodAction()

  return (
    <View>
      <Form t pr i im edit
        {...p}
        onClick={() => editeChildFood()} />
    </View>
  )
}
export default EditChildItem
