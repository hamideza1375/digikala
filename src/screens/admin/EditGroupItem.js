import React from 'react'
import {Form} from '../../other/Components/Html';
import  Title from '../../other/utils/setTitle';

const EditGroupItem = (p) => {
  Title()
  p._food.getSingleTitleFoods()
  const editeTitltFood = () => p._admin.editeFoods()
  return <Form t im edit {...p} onClick={() => { editeTitltFood(); }}/>
}
export default EditGroupItem
