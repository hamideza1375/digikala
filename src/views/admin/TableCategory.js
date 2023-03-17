import React from 'react';
import { Loading, Button, Scroll, Span, Container } from '../../other/Components/Html';
import s from "./style/Admin.module.scss"
import Modal from './Modal';
import GroupItemsTableComponent from './components/tableGroupItems/GroupItemsTableComponent';


const TableCategory = function (p) {
  // p._food.setPagination()
  p._admin.getCategory()

  return (
    <Container ai='center' >

      <Button mt={2} h={40} w='90%' onPress={() => p.navigation.navigate("CreateCategory",{id:p.route.params.id})}>ساخت دسته ی اغذیه</Button>

      <Span class={s.containTable} >
          <GroupItemsTableComponent {...p} />
        {/* <Modal showModal={p.showModal} setshowModal={p.setshowModal} id={p.id} message={'حذف شود؟ ' + " (" + p.foods[p.$food[1]]?.title + ')'} _admin={p._admin} /> */}
      </Span>
    </Container>

  )
}

export default TableCategory