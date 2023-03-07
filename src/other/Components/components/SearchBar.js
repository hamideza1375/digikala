import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Dropdown2, Icon, Img, Input, P, Press, Py, Span } from '../Html'
import { context } from '../../../context/_context'

function SearchInput({ logoPress, row, array, setarray, Register, icon, src, iconPress, sort, bgcolor }) {


  const p = context()
  const [getValueSearch, setgetValueSearch] = useState([])
  const [textSearch, settextSearch] = useState('')


  const foodAsc = () => {
    setarray(array => (array.sort((a, b) => a.price - b.price)))
    console.log(array);
  }


  const foodDesc = () => {
    setarray(array => array.sort((a, b) => b['price'] - a['price']))
    console.log(array);
  }



  useEffect(() => {
    console.log(getValueSearch);
  }, [getValueSearch])


  const searcher = (textSearch) => {
    console.log(textSearch);
    const f = []
    let fd1 = array.filter((f) => f.title.toLowerCase().includes(textSearch))
    f.push(...fd1)
    let fd2 = array.filter((f) => (f.title.toLowerCase().includes(textSearch[0]) && f.title.toLowerCase().includes(textSearch[1])) || (f.title.toLowerCase().includes(textSearch[1]) && f.title.toLowerCase().includes(textSearch[2])) || (f.title.toLowerCase().includes(textSearch[2]) && f.title.toLowerCase().includes(textSearch[3])) || (f.title.toLowerCase().includes(textSearch[3]) && f.title.toLowerCase().includes(textSearch[4])) || (f.title.toLowerCase().includes(textSearch[4]) && f.title.toLowerCase().includes(textSearch[5])) || (f.title.toLowerCase().includes(textSearch[5]) && f.title.toLowerCase().includes(textSearch[6])) || (f.title.toLowerCase().includes(textSearch[6]) && f.title.toLowerCase().includes(textSearch[7])) || (f.title.toLowerCase().includes(textSearch[7]) && f.title.toLowerCase().includes(textSearch[8])) || (f.title.toLowerCase().includes(textSearch[8]) && f.title.toLowerCase().includes(textSearch[9])) || (f.title.toLowerCase().includes(textSearch[9]) && f.title.toLowerCase().includes(textSearch[10])) || (f.title.toLowerCase().includes(textSearch[10]) && f.title.toLowerCase().includes(textSearch[11])))
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
    setgetValueSearch(f)

  }





  return (
    <Span h={57} pt={2} w={'100%'} as='center' z={10000000}>
      <Span bgcolor={bgcolor} style={[styles.containHead]}>
        {src && <Press onClick={logoPress} /* mr={10} ml={5} */ ><Img bgcolor='transport' w={55} h={55} br={4} src={src} /></Press>}
        {icon && <Icon size={24} style={[styles.iconHome,{marginTop:3}]} name={icon} onPress={() => { iconPress() }} />}
        {row && <Span mr={10} ml={5} >{row}</Span>}


        <Input
          dropdown={
            <Dropdown2
              displayFlex
              $input={p.$input}
              textId='dropdownDrawer'
              show={p.showDropdownFilter}
              setshow={p.setshowDropdownFilter}
              iconFalse
            >
              <Span ph={9} w={150}>
                <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
                  <P onClick={() => { settextSearch('phone2'); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12}>phone2</P >
                </Span>
              </Span>
            </Dropdown2>
          }
          $input={p.$input} textId='inputSearch' onFocus={() => { p.$input.get('dropdownDrawer')?.current.setNativeProps({ style: { display: 'flex', transform: [{ scale: 1 }] } }) }} icon="search" iconSize={16} pColor={'#777'} border={[1, '#ccc']} autoCapitalize='none' autoCorrect={false} spellCheck={true} value={textSearch} onChange={e => { settextSearch(e.nativeEvent.text.toLowerCase()); searcher(e.nativeEvent.text.toLowerCase()) }} iconPress={() => { searcher(textSearch.toLowerCase()) }} placeholder="جستجو" mh={8} h={'85%'} mt={6} dr='rtl' fg={1} style={{ minWidth: 120, width: 120 }} >

        </Input>
        {sort && <Span style={styles.containAscDesc}>
          <Icon onPress={foodAsc} size={21} style={{ padding: 4 }} name="arrow-down" color='#555' />
          <Span ph={6}></Span>
          <Icon onPress={foodDesc} size={21} style={{ padding: 4 }} name="arrow-up" color='#555' />
        </Span>}

        {Register && <Span style={[styles.containAscDesc]}>
          <Span w={'100%'} h={39} br={5} mt={5} bgcolor="#fff" border={[1, 'silver']} jc='center' ai='center' ><Py fw='100' >ورود</Py></Span>
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
    width:50,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 4,
  }

})