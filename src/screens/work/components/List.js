import React, { useRef } from 'react'
import { FlatList, Span, Card2, Icon, P, A_icon, List as _list, Switch, CheckBoxRadius } from '../../../Components/Html'

const FilterList = (p) => {
  const ref = useRef();

  const [hidden, sethidden] = p.useState(false)
  const [isEnabled, setIsEnabled] = p.useState(false);
  const [filterBrand, setfilterBrand] = p.useState(false);
  const [filterBrand2, setfilterBrand2] = p.useState(false);
  const [filterBrand3, setfilterBrand3] = p.useState(false);

  return (
    <Span>
      <Span fd={!isEnabled ? 'row' : 'row-reverse'} jc={'center'} mb={5} >
        {!isEnabled ?
          <P mt={1} ml={5} fs={11} >نمایش دستگاه های موجود</P>
          :
          <P mt={1} mr={5} fs={11} >نمایش همه </P>}
        <Switch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      </Span>

      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'برند'} bodyRow={
          <Span>
            {p.brandFilter.map((child, index) => (
              <Span key={index} fd='row' jc='space-between'>
                <P pr={2} fs={11} >{child.name}</P>
                <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                  border={[1, 'silver']} ml={4}
                  filterBrand={filterBrand} setfilterBrand={setfilterBrand}
                  style={{ transform: [{ scale: .9 }] }} />
              </Span>
            ))
            }
          </Span>
        }
        />
      </Span>


      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'مقدار رم'}
          bodyRow={
            <Span>
              {p.brandFilter.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    filterBrand={filterBrand2} setfilterBrand={setfilterBrand2}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>

      {/* <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'حافظه داخلی'}
          bodyRow={
            <Span>
              {p.brandFilter.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    filterBrand={filterBrand} setfilterBrand={setfilterBrand}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>

      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'تعداد هسته پردازگر(cpu)'}
          bodyRow={
            <Span>
              {p.brandFilter.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref.show)}
                    border={[1, 'silver']} ml={4}
                    filterBrand={filterBrand} setfilterBrand={setfilterBrand}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>


 
      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'نوع شبکه اینترنت'}
          bodyRow={
            <Span>
              {p.brandFilter.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref.show)}
                    border={[1, 'silver']} ml={4}
                    filterBrand={filterBrand} setfilterBrand={setfilterBrand}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>

      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'سیستم عامل'}
          bodyRow={
            <Span>
              {p.brandFilter.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref.show)}
                    border={[1, 'silver']} ml={4}
                    filterBrand={filterBrand} setfilterBrand={setfilterBrand}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>

      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'اندازه ی صفحه نمایش'}
          bodyRow={
            <Span>
              {p.brandFilter.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref.show)}
                    border={[1, 'silver']} ml={4}
                    filterBrand={filterBrand} setfilterBrand={setfilterBrand}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>

      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'رنگ'}
          bodyRow={
            <Span>
              {p.brandFilter.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref.show)}
                    border={[1, 'silver']} ml={4}
                    filterBrand={filterBrand} setfilterBrand={setfilterBrand}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>

      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'باطری'}
          bodyRow={
            <Span>
              {p.brandFilter.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref.show)}
                    border={[1, 'silver']} ml={4}
                    filterBrand={filterBrand} setfilterBrand={setfilterBrand}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>  */}


    </Span>
  )
}

export default FilterList