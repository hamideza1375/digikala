import React from 'react';
import { Loading, Button, Scroll, Span, Container } from '../../other/Components/Html';
import s from "./style/Admin.module.scss"
import GroupItemsTableComponent from './components/tableGroupItems/GroupItemsTableComponent';


const TableCategory = function (p) {
  // p._food.setPagination()
  p._admin.getCategory()

  return (
    <Container ai='center' >

      <Button mt={2} h={40} w='90%' onPress={() => p.navigation.navigate("CreateCategory",{id:p.route.params.id})}>ساخت دسته ی اغذیه</Button>

      <Span class={s.containTable} >
          <GroupItemsTableComponent {...p} />
      </Span>
    </Container>

  )
}

export default TableCategory