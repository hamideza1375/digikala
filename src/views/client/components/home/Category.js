import React from 'react'
import { Platform } from 'react-native'
import { Column, Img, P, Press, ScrollSlider, Span } from '../../../../other/Components/Html'
import LinearGradient from '../../../../other/Components/other/LinearGradient'
import { localhost } from '../../../../other/utils/axios/axios'

const Category = (p) => {

  return (
    <Span >
      <Span fd='row' ai='center' >
        <P mr={15} mt={12} fs={15} mb={-15} color='#444' >دسته ها</P>
        <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginTop: 28, marginHorizontal: 25 }} ></LinearGradient>
      </Span>

      {p.category && <ScrollSlider
        h={180} ccStyle={{ height: 180, justifyContent: 'center' }}
        style={Platform.OS !== 'web' ? { paddingRight: 290 } : { paddingRight: 10, }}
        data={p.category}
        renderItem={({ item, index }) => (
          <Column w={105} h={115} as='center' >
            <Span w={90} h={95} as='center'>
              <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505', '#f5f']} style={{ borderRadius: 100, width: 90, height: 90, maxHeight: 90, justifyContent: 'center', alignItems: 'center' }} >
                <Span w={84} h={84} style={{ borderRadius: 100, backgroundColor: 'white', position: 'absolute' }} >
                  {item.imageUrl && <Press f={1} onClick={()=>{p.navigation.navigate('ChildItems',{id: item._id})}}><Img f={1} br={100} src={`${localhost}/upload/category/${item.imageUrl}`} /></Press>}
                </Span>
              </LinearGradient>
            </Span>
            <P as='center' mt='auto' fs={14} fw='600' color='#229b' >{item.title}</P>
          </Column>
        )}
      />}
    </Span>)
}

export default Category