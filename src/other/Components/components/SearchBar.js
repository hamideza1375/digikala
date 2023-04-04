import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { A_icon, Column, Dropdown2, Icon, Img, Input, M_icon, P, Press, Py, Row, Span } from '../Html'
import { context } from '../../../context/_context'
import { useNavigation } from '@react-navigation/native';
import { localhost } from '../../utils/axios/axios';
import _useEffect from '../../../controllers/_initial';

function SearchInput({ row, array, setarray, login, icon, m_icon, a_icon, src, iconPress, sort, bgcolor, profile, title, brand, product, address, home, newSearchArray }) {

  const navigation = useNavigation()

  const p = context()
  const [textSearch, settextSearch] = useState('')


  const foodAsc = () => {
    const sortArray = array.sort((a, b) => a.price - b.price)
    setarray(sortArray.concat([]))
  }


  const foodDesc = () => {
    const sortArray = array.sort((a, b) => b.price - a.price)
    setarray(sortArray.concat([]))
  }


  const searcher = (textSearch) => {
    let f = [],
      fd1,
      fd2
    if (product) fd1 = newSearchArray.filter((f) => f.title?.toLowerCase().includes(textSearch) || (f.phone?.includes(textSearch)))
    else if(brand) fd1 = newSearchArray.filter((f) => f.brand?.toLowerCase().includes(textSearch) || (f.phone?.includes(textSearch)))
    else if(address) fd1 = newSearchArray.filter((f) => f.fullname?.toLowerCase().includes(textSearch) || (f.phone?.includes(textSearch)))
    f.push(...fd1)
    if (product) fd2 = newSearchArray.filter((f) => (f.title?.toLowerCase().match(textSearch)) || (f.phone?.match(textSearch)))
    else if(brand) fd2 = newSearchArray.filter((f) => (f.brand?.toLowerCase().match(textSearch)) || (f.phone?.match(textSearch)))
    else if(address) fd2 = newSearchArray.filter((f) => (f.fullname?.toLowerCase().match(textSearch)) || (f.phone?.match(textSearch)))
    for (let i in fd1) {
      for (let n in fd2) {
        if (fd1[i]._id !== fd2[n]._id) {
          let find = f.find((f) => f._id === fd2[n]._id)
          if (!find) { textSearch[1] && f.push(fd2[n]) }
        }
      }
    }
    for (let n in fd2) {
      let find = f.find((f) => f._id === fd2[n]._id)
      if (!find) { textSearch[1] && f.push(fd2[n]) }
    }
    setarray(f)
  }



  return (
    <Span h={57} pt={2} w={'100%'} as='center' z={10000000}>
      <Span bgcolor={bgcolor} style={[styles.containHead]}>
        {(src) && (!home) && (navigation.canGoBack()) && <Press onClick={() =>  navigation.goBack() } /* mr={10} ml={5} */ ><Img bgcolor='transport' w={55} h={55} br={4} src={src} /></Press>}
        {(src) && (home) && <Press onClick={() =>{}} /* mr={10} ml={5} */ ><Img bgcolor='transport' w={55} h={55} br={4} src={src} /></Press>}
        {icon && <Icon size={24} style={[styles.iconHome, { marginTop: 3 }]} name={icon} onPress={() => { iconPress() }} />}
        {m_icon && <M_icon size={24} style={[styles.iconHome, { marginTop: 3 }]} name={m_icon} onPress={() => { iconPress() }} />}
        {a_icon && <A_icon size={24} style={[styles.iconHome, { marginTop: 4 }]} name={a_icon} onPress={() => { iconPress() }} />}
        {row && <Span mr={10} ml={5} >{row}</Span>}


        {!title ?
          <Input
            value={textSearch} onChange={e => {
              settextSearch(e.nativeEvent.text.toLowerCase());
              p.$input.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 1 }] } })

              if (e.nativeEvent.text.length < 1) searcher(e.nativeEvent.text.toLowerCase())

            }}
            onSubmitEditing={() => { searcher(textSearch.toLowerCase()); p.$input.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }}
            iconPress={() => { searcher(textSearch.toLowerCase()) }}
            dropdown={
              !address?
              <Dropdown2
                displayFlex
                $input={p.$input}
                textId='dropdownDrawer'
                show={p.showDropdownFilter}
                setshow={p.setshowDropdownFilter}
                iconFalse
              >

                {
                  textSearch ? newSearchArray.map((item, index) => (
                    <Column key={index}>
                      {!brand ?

                        ((item.title?.includes(textSearch) && newSearchArray.filter(f => f.title.includes(textSearch)).length <= 10) || (item.phone?.includes(textSearch) && newSearchArray.filter(f => f.phone.includes(textSearch)).length <= 10) ?
                          <Press ai='center' fd='row' onClick={() => {navigation.navigate('SingleItem', { id: item._id }); settextSearch(''); p.$input.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }} jc='space-between' style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
                            <P fs={12} ml={15} >{item.title}</P >
                            {item.imageUrl1 ? <Img br={4} w={45} h={45} src={`${localhost}/upload/childItem/${item.imageUrl1}`} /> : <></>}
                          </Press>
                          :
                          <></>)

                        :

                        ((item.brand?.includes(textSearch) && newSearchArray.filter(f => f.brand.includes(textSearch)).length <= 10) || (item.phone?.includes(textSearch) && newSearchArray.filter(f => f.phone.includes(textSearch)).length <= 10) ?
                          <Press ai='center' fd='row' onClick={() => {navigation.navigate('SingleItem', { id: item._id }); settextSearch(''); p.$input.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }} jc='space-between' style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
                            <P fs={12} ml={15} >{item.brand}</P >
                            {item.imageUrl1 ? <Img br={4} w={45} h={45} src={`${localhost}/upload/childItem/${item.imageUrl1}`} /> : <></>}
                          </Press>
                          :
                          <></>)
                      }
                    </Column>
                  ))
                    :
                    <></>
                }
              </Dropdown2>
              :
              false
            }
            $input={p.$input} textId='inputSearch' onFocus={() => { p.$input.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 1 }] } }) }} icon="search" iconSize={16} pColor={'#777'} border={[1, '#ccc']} autoCapitalize='none' autoCorrect={false} spellCheck={true} placeholder="جستجو" mh={8} h={'95%'} mt={4} dr='rtl' fg={1} style={{ minWidth: 120, width: 120 }} >

          </Input> :
          <Column h={'100%'} fg={1} ai='center' jc='center' style={{ minWidth: 120, width: 120 }} >
            <Py fs={17} mt={5} color='#000a' >{title}</Py>
          </Column>
        }
        {sort && <Span style={[styles.containAscDesc, { width: 60 }]}>
          <Icon onPress={foodAsc} size={21} style={{ padding: 4 }} name="arrow-down" color='#555' />
          <Span ph={6}></Span>
          <Icon onPress={foodDesc} size={21} style={{ padding: 4 }} name="arrow-up" color='#555' />
        </Span>}

        {login && <Span style={[styles.containAscDesc]}>
          <Press onClick={() => { navigation.navigate('Login') }} w={'100%'} h={39} br={5} mt={5} bgcolor="#fff" border={[1, 'silver']} jc='center' ai='center' ><Py fw='100' >ورود</Py></Press>
        </Span>}

        {profile && <Span style={[styles.containAscDesc]}>
          <Press onClick={() => { if (!p.tokenValue.isAdmin) navigation.navigate('Profile'); else navigation.navigate('PanelAdmin') }} w={'100%'} h={39} br={5} mt={7} jc='center' ai='center' ><Icon name='user-alt' color='#222' size={20} /></Press>
        </Span>}

      </Span>

    </Span>);
}
export default SearchInput

const styles = StyleSheet.create({
  iconHome: {
    paddingRight: 8,
    paddingLeft: 6,
    textAlign: 'center',
    paddingTop: 10,
    color: '#777',
  },
  containHead: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    minHeight: 55,
    maxHeight: 60,
    borderWidth: 1,
    borderColor: 'rgb(222, 221, 221)',
    borderTopWidth: 0,
    justifyContent: 'space-around',
    paddingBottom: 7,
  },
  containAscDesc: {
    width: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 4,
  }

})