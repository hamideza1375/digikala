import React from 'react'
import { Span, P, List as _list, Switch, CheckBoxRadius } from '../../../../Components/Html'

const FilterList = (p) => {
  const [hidden, sethidden] = p.useState(false)
  const [isEnabled, setIsEnabled] = p.useState(false);
  const [showCheckboxBrandFilter, setshowCheckboxBrandFilter] = p.useState(false);
  const [showCheckboxRamFilter, setshowCheckboxRamFilter] = p.useState(false);
  const [showCheckboxcpuCoreFilter, setshowCheckboxcpuCoreFilter] = p.useState(false);
  const [showCheckboxNetworkFilter, setshowCheckboxNetworkFilter] = p.useState(false);
  const [showCheckboxSystemFilter, setshowCheckboxSystemFilter] = p.useState(false);
  const [showCheckboxDisplayFilter, setshowCheckboxDisplayFilter] = p.useState(false)
  const [showCheckboxColorFilter, setshowCheckboxColorFilter] = p.useState(false)
  const [showCheckboxBatryFilter, setshowCheckboxBatryFilter] = p.useState(false)
  const [showCheckboxCameraFilter, setshowCheckboxCameraFilter] = p.useState(false)

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
            {p.brandFilterValue.map((child, index) => (
              <Span key={index} fd='row' jc='space-between'>
                <P pr={2} fs={11} >{child.name}</P>
                <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                  border={[1, 'silver']} ml={4}
                  show={showCheckboxBrandFilter} setshow={setshowCheckboxBrandFilter}
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
              {p.ramFilterValue.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    show={showCheckboxRamFilter} setshow={setshowCheckboxRamFilter}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>


      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'تعداد هسته پردازشگر(cpu)'}
          bodyRow={
            <Span>
              {p.cpuCoreFilterValue.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    show={showCheckboxcpuCoreFilter} setshow={setshowCheckboxcpuCoreFilter}
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
              {p.networkFilterValue.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    show={showCheckboxNetworkFilter} setshow={setshowCheckboxNetworkFilter}
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
              {p.systemFilterValue.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    show={showCheckboxSystemFilter} setshow={setshowCheckboxSystemFilter}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>


      <Span>
        <_list h={35} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left' header={'دوربین'}
          bodyRow={
            <Span>
              {p.cameraFilterValue.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    show={showCheckboxCameraFilter} setshow={setshowCheckboxCameraFilter}
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
              {p.displayFilterValue.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    show={showCheckboxDisplayFilter} setshow={setshowCheckboxDisplayFilter}
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
              {p.colorFilterValue.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    show={showCheckboxColorFilter} setshow={setshowCheckboxColorFilter}
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
              {p.batteryFilterValue.map((child, index) => (
                <Span key={index} fd='row' jc='space-between'>
                  <P pr={2} fs={11} >{child.name}</P>
                  <CheckBoxRadius itemName={child.name} refObject={(ref) => console.log(ref)}
                    border={[1, 'silver']} ml={4}
                    show={showCheckboxBatryFilter} setshow={setshowCheckboxBatryFilter}
                    style={{ transform: [{ scale: .9 }] }} />
                </Span>
              ))
              }
            </Span>
          }
        />
      </Span>

    </Span>
  )
}

export default FilterList