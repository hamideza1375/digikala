import React, { useEffect, useRef, useState } from 'react'
import { Span, P, List as _list, Switch, CheckBoxRadius, Scroll, M_icon, Button } from '../../../../other/Components/Html'

const FilterList = (p) => {

  // const [brandFilterValue, setbrandFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'سامسونگ', filterValue: 'samsung' },
  //   { _id: '3', value: 'آیفون', filterValue: 'iphone' },
  //   { _id: '4', value: 'شیایومی', filterValue: 'shiyaomi' },
  //   { _id: '5', value: 'هوآوی', filterValue: 'huawi' },
  //   { _id: '6', value: 'نوکیا', filterValue: 'nokia' },
  // ])

  // const [priceFilterValue, setpriceFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'زیر 2000000', filterValue: [0, 2000000] },
  //   { _id: '3', value: '2000000 تا 4000000', filterValue: [2000000, 4000000] },
  //   { _id: '4', value: '4000000 تا 7000000', filterValue: [4000000, 7000000] },
  //   { _id: '5', value: '7000000 تا 10000000', filterValue: [7000000, 10000000] },
  //   { _id: '6', value: '10000000 تا 15000000', filterValue: [10000000, 15000000] },
  //   { _id: '7', value: '15000000 به بالا', filterValue: [1000000, Infinity] },
  // ])

  // const [ramFilterValue, setramFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'زیر 2', filterValue: [0, 2] },
  //   { _id: '3', value: '2 تا 4', filterValue: [2, 4] },
  //   { _id: '4', value: '4 تا 8', filterValue: [4, 8] },
  //   { _id: '5', value: '8 تا 12', filterValue: [8, 12] },
  //   { _id: '6', value: '12 به بالا', filterValue: [12, Infinity] },
  // ])


  // const [cpuCoreFilterValue, setcpuCoreFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'زیر 4', filterValue: [0, 4] },
  //   { _id: '3', value: '4 تا 6', filterValue: [4, 6] },
  //   { _id: '4', value: '6 تل 8', filterValue: [6, 8] },
  //   { _id: '5', value: '8 به بالا', filterValue: [8, Infinity] },
  // ])


  // const [networkFilterValue, setnetworkFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: '2G', filterValue: '2G' },
  //   { _id: '3', value: '3G', filterValue: '3G' },
  //   { _id: '4', value: '4G', filterValue: '4G' },
  //   { _id: '5', value: '5G', filterValue: '5G' },
  // ])


  // const [memoryFilterValue, setmemoryFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'زیر 8', filterValue: [0, 8] },
  //   { _id: '3', value: '8 تا 16', filterValue: [8, 16] },
  //   { _id: '4', value: '16 تا 36', filterValue: [16, 36] },
  //   { _id: '5', value: '36 تا 64', filterValue: [36, 64] },
  //   { _id: '6', value: '64 تا 128', filterValue: [64, 128] },
  //   { _id: '7', value: '128 به بالا', filterValue: [128, Infinity] },
  // ])


  // const [cameraFilterValue, setcameraFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'زیر 8', filterValue: [0, 8] },
  //   { _id: '3', value: '8 تا 16', filterValue: [8, 16] },
  //   { _id: '4', value: '16 تا 25', filterValue: [16, 25] },
  //   { _id: '5', value: '25 تا 36', filterValue: [25, 36] },
  //   { _id: '6', value: '36 تا 64', filterValue: [36, 64] },
  //   { _id: '7', value: '64 تا 108', filterValue: [64, 108] },
  //   { _id: '8', value: '108 به بالا', filterValue: [108, Infinity] },
  // ])



  // const [displayFilterValue, setdisplayFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'زیر 5 اینچ', filterValue: [0, 5] },
  //   { _id: '3', value: '5 تا 7', filterValue: [5, 7] },
  //   { _id: '4', value: '7 تا 9', filterValue: [7, 9] },
  //   { _id: '5', value: '9 به بالا', filterValue: [9, Infinity] },
  // ])


  // const [batteryFilterValue, setbatteryFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'زیر 200 آمپر', filterValue: [0, 200] },
  //   { _id: '3', value: '200 تا 400 آمپر', filterValue: [200, 400] },
  //   { _id: '4', value: '400 تا 600 آمپر', filterValue: [400, 600] },
  //   { _id: '5', value: 'بالای 600 آمپر', filterValue: [600, Infinity] },
  // ])


  // const [colorFilterValue, setcolorFilterValue] = useState([
  //   { _id: '1', value: '', filterValue: '' },
  //   { _id: '2', value: 'قرمز', filterValue: 'red' },
  //   { _id: '3', value: 'آبی', filterValue: 'blue' },
  //   { _id: '4', value: 'سبز', filterValue: 'green' },
  //   { _id: '5', value: 'زرد', filterValue: 'yellow' },
  //   { _id: '6', value: 'نقره ای', filterValue: 'silver' },
  //   { _id: '7', value: 'طلایی', filterValue: 'gold' },
  //   { _id: '8', value: 'بنفش', filterValue: 'purple' },
  //   { _id: '9', value: 'قهوه ای', filterValue: 'brown' },
  //   { _id: '10', value: 'سیاه', filterValue: 'black' },
  //   { _id: '11', value: 'سفید', filterValue: 'white' },
  //   { _id: '12', value: 'نارنجی', filterValue: 'orange' },
  // ])

  // const [operatingSystemFilterValue, setoperatingSystemFilterValue] = useState([
  //   { _id: '1', value: 'همه', filterValue: '' },
  //   { _id: '2', value: 'اندروید', filterValue: 'android' },
  //   { _id: '3', value: 'ios', filterValue: 'ios' },
  // ])


  // const [p.isEnabled, p.setIsEnabled] = useState(false);
  // const [p.showCheckboxBrandFilter, p.setshowCheckboxBrandFilter] = useState(false);
  // const [p.showCheckboxPriceFilter, p.setshowCheckboxPriceFilter] = useState(false);
  // const [p.showCheckboxRamFilter, p.setshowCheckboxRamFilter] = useState(false);
  // const [p.showCheckboxcpuCoreFilter, p.setshowCheckboxcpuCoreFilter] = useState(false);
  // const [p.showCheckboxNetworkFilter, p.setshowCheckboxNetworkFilter] = useState(false);
  // const [p.showCheckboxOperatingSystemFilter, p.setshowCheckboxOperatingSystemFilter] = useState(false);
  // const [p.showCheckboxDisplayFilter, p.setshowCheckboxDisplayFilter] = useState(false)
  // const [p.showCheckboxColorFilter, p.setshowCheckboxColorFilter] = useState(false)
  // const [p.showCheckboxBatryFilter, p.setshowCheckboxBatryFilter] = useState(false)
  // const [p.showCheckboxCameraFilter, p.setshowCheckboxCameraFilter] = useState(false)
  // const [p.showCheckboxMemoryFilter, p.setshowCheckboxMemoryFilter] = useState(false)


  // const [p.brandFilter, p.setbrandFilter] = useState('')
  // const [p.priceFilter, p.setpriceFilter] = useState('')
  // const [p.networkFilter, p.setnetworkFilter] = useState('')
  // const [p.storageFilter, p.setstorageFilter] = useState('')
  // const [p.ramFilter, p.setramFilter] = useState('')
  // const [p.cpuCoreFilter, p.setcpuCoreFilter] = useState('')
  // const [p.cameraFilter, p.setcameraFilter] = useState('')
  // const [p.displayFilter, p.setdisplayFilter] = useState('')
  // const [p.batteryFilter, p.setbatteryFilter] = useState('')
  // const [p.colorFilter, p.setcolorFilter] = useState('')
  // const [p.operatingSystemFilter, p.setoperatingSystemFilter] = useState('')


  // const p.refMap = useRef(new Map())

  const [hidden, sethidden] = useState(false)



  useEffect(() => {

    const filterArray = p.newSearchArray.filter((f, i) => (
      ((p.brandFilter) ? (f.title?.toLowerCase().match(p.brandFilter?.toLowerCase())) : (f.title)) &&
      ((p.ramFilter) ? (f.ram >= p.ramFilter[0] && f.ram <= p.ramFilter[1]) : (f.ram)) &&
      ((p.cameraFilter) ? (f.camera >= p.cameraFilter[0] && f.camera <= p.cameraFilter[1]) : (f.camera)) &&
      ((p.storageFilter) ? (f.storage >= p.storageFilter[0] && f.storage <= p.storageFilter[1]) : (f.storage)) &&
      ((p.displayFilter) ? (f.display >= p.displayFilter[0] && f.display <= p.displayFilter[1]) : (f.display)) &&
      ((p.cpuCoreFilter) ? (f.cpuCore >= p.cpuCoreFilter[0] && f.cpuCore <= p.cpuCoreFilter[1]) : (f.cpuCore)) &&
      ((p.operatingSystemFilter) ? (f.operatingSystem?.toLowerCase() === p.operatingSystemFilter?.toLowerCase()) : (f.operatingSystem)) &&
      ((p.networkFilter) ? (f.network?.toLowerCase().match(p.networkFilter?.toLowerCase())) : (f.network)) &&
      ((p.batteryFilter) ? (f.battery >= p.batteryFilter[0] && f.battery <= p.batteryFilter[1]) : (f.battery)) &&
      ((p.colorFilter) ? (f.color.find((c) => c.color?.toLowerCase() === p.colorFilter?.toLowerCase())) : (f.color)) &&
      ((p.priceFilter) ? (f.price >= p.priceFilter[0] && f.price <= p.priceFilter[1]) : (f.price)) &&
      ((p.isEnabled === false ) ? (f.title ) : (f.available === 1 && f.available > 0)) 
    ))

    p.setchildItem(filterArray);

  }, [p.brandFilter, p.ramFilter, p.cameraFilter, p.storageFilter, p.displayFilter, p.cpuCoreFilter, p.cpuCoreFilter, p.operatingSystemFilter, p.operatingSystemFilter, p.networkFilter, p.batteryFilter,p.colorFilter,p.priceFilter, p.isEnabled])
  

  



  return (
    <>

      <Span z={10000000000} minw={150} maxw={200} w={200} mt={10} maxh={p.height - 70} minh={'80%'} bgcolor='#fffe' f={1}
        col={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
        col1={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
        style={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
      >
        <Scroll minw='105%' >

          <Span fd={!p.isEnabled ? 'row' : 'row-reverse'} jc={'center'} mb={5} ph={7} >
            {!p.isEnabled ?
              <P mt={1} ml={5} fs={11} >نمایش دستگاه های موجود</P>
              :
              <P mt={1} mr={5} fs={11} >نمایش همه </P>}
            <Switch isEnabled={p.isEnabled} setIsEnabled={p.setIsEnabled} />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'برند'} bodyRow={
                <Span>
                  {p.brandFilterValue && p.brandFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check1' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setbrandFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxBrandFilter} setshow={p.setshowCheckboxBrandFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'قیمت'} bodyRow={
                <Span>
                  {p.priceFilterValue && p.priceFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check2' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setpriceFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxPriceFilter} setshow={p.setshowCheckboxPriceFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'مقدار رم'}
              bodyRow={
                <Span>
                  {p.ramFilterValue && p.ramFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check3' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setramFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxRamFilter} setshow={p.setshowCheckboxRamFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'تعداد هسته پردازشگر(cpu)'}
              bodyRow={
                <Span>
                  {p.cpuCoreFilterValue && p.cpuCoreFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check4' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setcpuCoreFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxcpuCoreFilter} setshow={p.setshowCheckboxcpuCoreFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'حافظه'}
              bodyRow={
                <Span>
                  {p.memoryFilterValue && p.memoryFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check5' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setstorageFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxMemoryFilter} setshow={p.setshowCheckboxMemoryFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'نوع شبکه اینترنت'}
              bodyRow={
                <Span>
                  {p.networkFilterValue && p.networkFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check6' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setnetworkFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxNetworkFilter} setshow={p.setshowCheckboxNetworkFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'سیستم عامل'}
              bodyRow={
                <Span>
                  {p.operatingSystemFilterValue && p.operatingSystemFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check7' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setoperatingSystemFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxOperatingSystemFilter} setshow={p.setshowCheckboxOperatingSystemFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'دوربین'}
              bodyRow={
                <Span>
                  {p.cameraFilterValue && p.cameraFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check8' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setcameraFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxCameraFilter} setshow={p.setshowCheckboxCameraFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'اندازه ی صفحه نمایش'}
              bodyRow={
                <Span>
                  {p.displayFilterValue && p.displayFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check9' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setdisplayFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxDisplayFilter} setshow={p.setshowCheckboxDisplayFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'رنگ'}
              bodyRow={
                <Span>
                  {p.colorFilterValue && p.colorFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check10' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setcolorFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxColorFilter} setshow={p.setshowCheckboxColorFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ff77cc22' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'باطری'}
              bodyRow={
                <Span>
                  {p.batteryFilterValue && p.batteryFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius id='check11' refMap={p.refMap} item={child} refObject={(ref) => { if (ref.show) { p.setbatteryFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={p.showCheckboxBatryFilter} setshow={p.setshowCheckboxBatryFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>
        </Scroll>

       {/* //! lovercase */}
        <Span w={'100%'} ai='center' >
          <Button mt={10} w={'95%'} as='center' outline h={37} bgcolor='#ff77ccee'
            onClick={() => {
              const filterArray = p.newSearchArray.filter((f, i) => (
                ((p.brandFilter) ? (f.title?.toLowerCase().match(p.brandFilter?.toLowerCase())) : (f.title)) &&
                ((p.ramFilter) ? (f.ram >= p.ramFilter[0] && f.ram <= p.ramFilter[1]) : (f.ram)) &&
                ((p.cameraFilter) ? (f.camera >= p.cameraFilter[0] && f.camera <= p.cameraFilter[1]) : (f.camera)) &&
                ((p.storageFilter) ? (f.storage >= p.storageFilter[0] && f.storage <= p.storageFilter[1]) : (f.storage)) &&
                ((p.displayFilter) ? (f.display >= p.displayFilter[0] && f.display <= p.displayFilter[1]) : (f.display)) &&
                ((p.cpuCoreFilter) ? (f.cpuCore >= p.cpuCoreFilter[0] && f.cpuCore <= p.cpuCoreFilter[1]) : (f.cpuCore)) &&
                ((p.operatingSystemFilter) ? (f.operatingSystem?.toLowerCase() === p.operatingSystemFilter?.toLowerCase()) : (f.operatingSystem)) &&
                ((p.networkFilter) ? (f.network?.toLowerCase().match(p.networkFilter?.toLowerCase())) : (f.network)) &&
                ((p.batteryFilter) ? (f.battery >= p.batteryFilter[0] && f.battery <= p.batteryFilter[1]) : (f.battery)) &&
                ((p.colorFilter) ? (f.color.find((c) => c.color?.toLowerCase() === p.colorFilter?.toLowerCase())) : (f.color)) &&
                ((p.priceFilter) ? (f.price >= p.priceFilter[0] && f.price <= p.priceFilter[1]) : (f.price)) &&
                ((p.isEnabled === false ) ? (f.title ) : (f.available === 1 && f.available > 0)) 
              ))
              // p.setshowDrawer(false)
              p.setchildItem(filterArray);
            }}
          >انجام شد</Button>
        </Span>

      </Span>
    </>
  )
}

export default FilterList