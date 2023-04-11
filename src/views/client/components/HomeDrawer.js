import React from 'react'
import { Scroll, Press, Py, Column, P } from '../../../other/Components/Html'

const HomeDrawer = (p) => {
  return (

    <Scroll m={2} border={[3, '#ee4499fa']} br={6} ccStyle={{ flexGrow: 1, paddingTop:20 }} >

<Py pr={15} >دسته بندی محصولات</Py>

      <Column mt={35} >
        <Py pr={22} pb={5} >گوشی</Py>
        <P onClick={()=>{p.navigation.navigate('ChildPopulars')}} pv={5} pr={35} fs={11} >جدید ترین ها</P>
        <P onClick={()=>{p.navigation.navigate('ChildOffers')}} pv={5} pr={35} fs={11} >تخفیف ها</P>
        <P onClick={()=>{p.navigation.navigate('ChildPopulars')}} pv={5} pr={35} fs={11} >محبوب ترین ها</P>
      </Column>

      <Column mt={15} >
        <Py pr={22} pb={5} >تبلت</Py>
        <P onClick={()=>{p.navigation.navigate('ChildPopulars')}} pv={5} pr={35} fs={11} >جدید ترین ها</P>
        <P onClick={()=>{p.navigation.navigate('ChildOffers')}} pv={5} pr={35} fs={11} >تخفیف ها</P>
        <P onClick={()=>{p.navigation.navigate('ChildPopulars')}} pv={5} pr={35} fs={11} >محبوب ترین ها</P>
      </Column>

      <Column mt={15} >
        <Py pr={22} pb={5} >ویژه</Py>
        <P onClick={()=>{p.navigation.navigate('ChildOffers')}} pv={5} pr={35} fs={11} >بیشترین تخفبف</P>
        <P onClick={()=>{p.navigation.navigate('')}} pv={5} pr={35} fs={11} >پیشنهادات</P>
      </Column>

    </Scroll>
  )
}

export default HomeDrawer