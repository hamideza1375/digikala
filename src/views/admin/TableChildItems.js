import React from 'react';
import { Pagination, Loading, Button, Span } from '../../other/Components/Html';
import s from "./style/Admin.module.scss"
import ChildItemTableComponent from './components/chidItemTable/ChildItemTableComponent';

const TableChildItems = (p) => {
  p._client.getChildItems()

  return (
    <Span class={s.container}>

      <Span class={s.containChildTable} >
        <Button h={40} w='98%' alignSelf='center' mv={5} onPress={() => p.navigation.navigate("CreateChildItem", { id: p.route.params.id })}>ساخت </Button>
        <Span webStyle={{ height: 'calc(100vh - 178px)' }} class={s.containerChildTable}>

            <Span webStyle={{ maxHeight: "100%" }} >
              <ChildItemTableComponent {...p} />
            </Span>
        </Span>
      </Span>

      <Span class={s.paginationContainer} >
        {p.childItemsTable &&
          <Pagination
            food={p.childItemsTable}
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

