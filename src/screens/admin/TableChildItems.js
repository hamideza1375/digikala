import React from 'react';
import { Pagination, Loading, Button, Span } from '../../other/Components/Html';
import s from "./style/Admin.module.scss"
import ChildItemTableComponent from './components/chidItemTable/ChildItemTableComponent';
import TableChildItemsModal from './components/chidItemTable/TableChildItemsModal';

const TableChildItems = (p) => {
  // p._food.getChildFood()

  return (
    <Span class={s.container}>

      <Span class={s.containChildTable} >
        <Button h={40} w='98%' alignSelf='center' mv={5} onPress={() => p.navigation.navigate("CreateChildFood", { id: p.route.params.id, title: p.route.params.title })}>ساخت </Button>
        <Span webStyle={{ height: 'calc(100vh - 178px)' }} class={s.containerChildTable}>
          {!p.current ?
            <Loading />
            :
            <Span webStyle={{ maxHeight: "100%" }} >
              <ChildItemTableComponent {...p} />
            </Span>
          }
        </Span>
        <>
          <TableChildItemsModal {...p} />
        </>
      </Span>

      <Span class={s.paginationContainer} >
        {p.foodMap.get(p.route.params.id) &&
          <Pagination
            food={p.foodMap.get(p.route.params.id)}
            setcurrent={p.setcurrent}
            pageLimit={p.pageLimit}
            ass={p.ass}
            page={p.page}
            setpage={p.setpage}
            currentPage={p.currentPage}
            setcurrentPage={p.setcurrentPage}
          />}
      </Span>

    </Span>
  )
}
export default TableChildItems

