import React from 'react';
import { Pagination, Button, Span, ContainerTab, Container, Column } from '../../other/Components/Html';
import s from "./style/Admin.module.scss"
import ChildItemTableComponent from './components/chidItemTable/ChildItemTableComponent';

const TableChildItems = (p) => {
  p._admin.getChildItemsTable()

  return (
    <ContainerTab >
      <Button h={40} w='98%' alignSelf='center' mv={5} onPress={() => p.navigation.navigate("CreateChildItem", { id: p.route.params.id, sellerId: p.route.params.sellerId })}>ساخت محصول </Button>
      <Column f={1} w='95%' ai='center' as='center' >
        <ChildItemTableComponent {...p} />
      </Column>
    </ContainerTab>
  )
}
export default TableChildItems

