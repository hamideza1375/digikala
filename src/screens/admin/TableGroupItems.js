import React from 'react';
import { Loading, Button, Scroll, Span } from '../../other/Components/Html';
import s from "./style/Admin.module.scss"
import Modal from './Modal';
import GroupItemsTableComponent from './components/tableGroupItems/GroupItemsTableComponent';


const TableGroupItems = function (p) {
  // p._food.setPagination()
  // p._food.getTitleFood()

  return (
      <Scroll containClass={s.container}>
      <Button mt={2} h={40} w='89.8%' onPress={() => p.navigation.navigate("CreateTitleAllFood")}>ساخت دسته ی اغذیه</Button>

        <Span class={s.containTable} >
          {
            !p.foods.length ?
              <Loading style={{ top: 30 }} animating={p.foods.length ? false : true} />
              :
        <Span nativeStyle={{height:p.height - 150}} webStyle={{maxHeight:'calc(90vh - 75px)'}} >

         <GroupItemsTableComponent {...p} />
        </Span>

          }

        <Modal showModal={p.showModal} setshowModal={p.setshowModal} id={p.id} message={'حذف شود؟ ' + " (" + p.foods[p.$food[1]]?.title + ')'} _admin={p._admin} />
        </Span>
      </Scroll>

  )
}

export default TableGroupItems