import React, { useState } from 'react'
import { Span, P, List as _list, Switch, CheckBoxRadius, Scroll, M_icon, Button } from '../../../../other/Components/Html'

const FilterList = (p) => {

  const [hidden, sethidden] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false);
  const [showCheckboxBrandFilter, setshowCheckboxBrandFilter] = useState(false);
  const [showCheckboxPriceFilter, setshowCheckboxPriceFilter] = useState(false);
  const [showCheckboxRamFilter, setshowCheckboxRamFilter] = useState(false);
  const [showCheckboxcpuCoreFilter, setshowCheckboxcpuCoreFilter] = useState(false);
  const [showCheckboxNetworkFilter, setshowCheckboxNetworkFilter] = useState(false);
  const [showCheckboxOperatingSystemFilter, setshowCheckboxOperatingSystemFilter] = useState(false);
  const [showCheckboxDisplayFilter, setshowCheckboxDisplayFilter] = useState(false)
  const [showCheckboxColorFilter, setshowCheckboxColorFilter] = useState(false)
  const [showCheckboxBatryFilter, setshowCheckboxBatryFilter] = useState(false)
  const [showCheckboxCameraFilter, setshowCheckboxCameraFilter] = useState(false)
  const [showCheckboxMemoryFilter, setshowCheckboxMemoryFilter] = useState(false)


  const [brandFilter, setbrandFilter] = useState('')
  const [priceFilter, setpriceFilter] = useState('')
  const [networkFilter, setnetworkFilter] = useState('')
  const [memoryFilter, setmemoryFilter] = useState('')
  const [ramFilter, setramFilter] = useState('')
  const [cpuCoreFilter, setcpuCoreFilter] = useState('')
  const [cameraFilter, setcameraFilter] = useState('')
  const [displayFilter, setdisplayFilter] = useState('')
  const [batteryFilter, setbatteryFilter] = useState('')
  const [colorFilter, setcolorFilter] = useState('')
  const [operatingSystemFilter, setoperatingSystemFilter] = useState('')


  return (
    <>

      <Span z={10000000000} minw={150} maxw={200} w={200} mt={10} maxh={p.height - 70} minh={'80%'} bgcolor='#fffe' f={1}
        col={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
        col1={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
        style={p.show ? { right: -200, position: 'absolute' } : { position: 'absolute', right: 0 }}
      >
        <Scroll minw='105%' >

          <Span fd={!isEnabled ? 'row' : 'row-reverse'} jc={'center'} mb={5} ph={7} >
            {!isEnabled ?
              <P mt={1} ml={5} fs={11} >نمایش دستگاه های موجود</P>
              :
              <P mt={1} mr={5} fs={11} >نمایش همه </P>}
            <Switch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'برند'} bodyRow={
                <Span>
                  {p.brandFilterValue && p.brandFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setbrandFilter(ref.filterValue) } }}
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
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'قیمت'} bodyRow={
                <Span>
                  {p.priceFilterValue && p.priceFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setpriceFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxPriceFilter} setshow={setshowCheckboxPriceFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'مقدار رم'}
              bodyRow={
                <Span>
                  {p.ramFilterValue && p.ramFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setramFilter(ref.filterValue) } }}
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
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'تعداد هسته پردازشگر(cpu)'}
              bodyRow={
                <Span>
                  {p.cpuCoreFilterValue && p.cpuCoreFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setcpuCoreFilter(ref.filterValue) } }}
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
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'حافظه'}
              bodyRow={
                <Span>
                  {p.memoryFilterValue && p.memoryFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setmemoryFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxMemoryFilter} setshow={setshowCheckboxMemoryFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'نوع شبکه اینترنت'}
              bodyRow={
                <Span>
                  {p.networkFilterValue && p.networkFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setnetworkFilter(ref.filterValue) } }}
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
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'سیستم عامل'}
              bodyRow={
                <Span>
                  {p.operatingSystemFilterValue && p.operatingSystemFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setoperatingSystemFilter(ref.filterValue) } }}
                        border={[1, 'silver']} ml={4}
                        show={showCheckboxOperatingSystemFilter} setshow={setshowCheckboxOperatingSystemFilter}
                        style={{ transform: [{ scale: .9 }] }} />
                    </Span>
                  ))
                  }
                </Span>
              }
            />
          </Span>


          <Span>
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'دوربین'}
              bodyRow={
                <Span>
                  {p.cameraFilterValue && p.cameraFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setcameraFilter(ref.filterValue) } }}
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
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'اندازه ی صفحه نمایش'}
              bodyRow={
                <Span>
                  {p.displayFilterValue && p.displayFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setdisplayFilter(ref.filterValue) } }}
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
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'رنگ'}
              bodyRow={
                <Span>
                  {p.colorFilterValue && p.colorFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setcolorFilter(ref.filterValue) } }}
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
            <_list h={45} br={5} sh={{ r: 5, o: .1 }} color='black' bgcolor='#ddd' hidden={hidden} sethidden={sethidden} fontSize={12} iconSize={20} m_icon='arrow-left'
              header={'باطری'}
              bodyRow={
                <Span>
                  {p.batteryFilterValue && p.batteryFilterValue.map((child, index) => (
                    <Span key={index} fd='row' jc='space-between'>
                      <P pr={2} fs={11} >{child.value}</P>
                      <CheckBoxRadius item={child} refObject={(ref) => { if (ref.show) { setbatteryFilter(ref.filterValue) } }}
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
        </Scroll>


        <Span w={'100%'} ai='center' >
          <Button mt={10} w={86} as='center' outline h={37}
            onClick={() => {
              const filterArray = p.childItem.filter((f, i) => (
                ((brandFilter) ? (f.brand === brandFilter) : (f.brand)) &&
                ((ramFilter) ? (f.ram >= ramFilter[0] && f.ram <= ramFilter[1]) : (f.ram)) &&
                ((cameraFilter) ? (f.camera >= cameraFilter[0] && f.camera <= cameraFilter[1]) : (f.camera)) &&
                ((memoryFilter) ? (f.memory >= memoryFilter[0] && f.memory <= memoryFilter[1]) : (f.memory)) &&
                ((displayFilter) ? (f.display >= displayFilter[0] && f.display <= displayFilter[1]) : (f.memory)) &&
                ((cpuCoreFilter) ? (f.cpuCore >= cpuCoreFilter[0] && f.cpuCore <= cpuCoreFilter[1]) : (f.cpuCore)) &&
                ((operatingSystemFilter) ? (f.operatingSystem === operatingSystemFilter) : (f.operatingSystem)) &&
                ((networkFilter) ? (f.network === networkFilter) : (f.network)) &&
                ((batteryFilter) ? (f.battery >= batteryFilter[0] && f.battery <= batteryFilter[1]) : (f.battery)) &&
                ((colorFilter) ? (f.color.find((c) => c === colorFilter)) : (f.color)) &&
                ((priceFilter) ? (f.price >= priceFilter[0] && f.price <= priceFilter[1]) : (f.price)) &&
                ((Boolean(isEnabled) === true) ? (Boolean(f.available)) : (typeof Boolean(f.available) === 'boolean'))
              ))
              p.setshowFilterModal(false)
            }}
          >انجام شد</Button>
        </Span>

      </Span>
    </>
  )
}

export default FilterList























// <Modal
// onClick={() => { p.setshowDropdownFilter(!p.showDropdownFilter); /* setTimeout(() => {p.setshowDropdownFilter(false);}, 200);  */ }}
// style={{ width: '100%', height: 'auto' }} setshow={p.setshowFilterModal} show={p.showFilterModal} >
// <Scroll w='100%' h={400} ccStyle={{ alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', flexGrow: 1, }} >


//   <Span mt={12} w='100%' ai='center' id='1' >
//     <Span ai='flex-start' w={270}>
//       <Span ><P textAlign='right' >قیمت</P></Span>
//       <Span w='100%' fd='row'  >
//         <Span h={30} mt='auto' mb={-5} ml={5}>
//           <Dropdown2 bodyStyle={{ right: 20 }}
//             onClick={() => { let arrayId = ['1', '2', '3', '4', '5']; arrayId.map((id) => p.$.id(id) && p.$.id(id).$({ zIndex: 1 })); p.$.id('1').$({ zIndex: 10 }) }}
//             show={p.showDropdownFilter}
//             setshow={p.setshowDropdownFilter}
//             h={25}
//           >
//             <Span ph={9} w={150}>
//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 {/* <P onClick={()=>{ p.$input.get('input1FromTextId').setNativeProps({text:'sddcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcs'}) }} fs={12}>زیر 1 ملیون</P > */}
//                 <P onClick={() => { p.setpriceFilter(0); p.setpriceFilterTo(1000000); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12}>زیر 1 ملیون</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setpriceFilter(1000000); p.setpriceFilterTo(2000000); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >از 1 ملیون تا 2 ملیون</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setpriceFilter(2000000); p.setpriceFilterTo(4000000); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >از 2 ملیون تا 4 ملیون</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setpriceFilter(4000000); p.setpriceFilterTo(8000000); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >از 4 ملیون تا 8 ملیون</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setpriceFilter(8000000); p.setpriceFilterTo(16000000); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >از 8 ملیون تا 16 ملیون</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setpriceFilter(16000000); p.setpriceFilterTo(Infinity); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >از 16 ملیون به بالا</P >
//               </Span>

//               <Span style={{ padding: 5 }} >
//                 <P onClick={() => { p.setshowDropdownFilter(!p.showDropdownFilter); p.setpriceFilter(''); p.setpriceFilterTo(''); p.$input.get('input1FromTextId').focus() }} fs={12} >وارد کردن به صورت دستی</P >
//               </Span>

//             </Span>
//           </Dropdown2>
//         </Span>

//         {/* //! اگه غیر از عدد چیز دیگه ای وارد کرد به صورت قرمز بنویس فقط عدد وارد کنید */}

//         <Input border={[2]} $input={p.$input} textId='input1FromTextId' keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.priceFilter.toString()} onChangeText={(text) => { p.setpriceFilter(text) }} />
//         <Input keyboardType='numeric' fs={p.priceFilterTo == Infinity ? 18 : 11} w={100} placeholder='تا' value={p.priceFilterTo == Infinity ? '♾' : p.priceFilterTo.toString()} onChangeText={(text) => { p.setpriceFilterTo(text) }} />
//         <Span mr={5} ai='center' jc='center' >تومان</Span>
//       </Span>
//     </Span>
//   </Span>


//   <Span mt={12} w='100%' ai='center' id='2'>
//     <Span ai='flex-start' w={270}>
//       <Span><P textAlign='right' >فضای حافظه</P></Span>
//       <Span w='100%' fd='row' jc='flex-start' >

//         <Span h={30} mt='auto' mb={-5} ml={5} >
//           <Dropdown2 h={25} bodyStyle={{ right: 20 }}
//             onClick={() => { let arrayId = ['1', '2', '3', '4', '5']; arrayId.map((id) => p.$.id(id) && p.$.id(id).$({ zIndex: 1 })); p.$.id('2').$({ zIndex: 10 }) }}
//             show={p.showDropdownFilter}
//             setshow={p.setshowDropdownFilter}
//           >
//             <Span ph={9} w={150}>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setsdCardFilter(0); p.setsdCardFilterTo(8); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12}> 8 به پایین</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setsdCardFilter(8); p.setsdCardFilterTo(16); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >8 تا 16</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setsdCardFilter(16); p.setsdCardFilterTo(32); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >16 تا 32</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setsdCardFilter(32); p.setsdCardFilterTo(64); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >32 تا 64</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setsdCardFilter(64); p.setsdCardFilterTo(128); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >64 تا 128</P >
//               </Span>


//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setsdCardFilter(128); p.setsdCardFilterTo(Infinity); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >128 به بالا</P >
//               </Span>

//               <Span style={{ padding: 5 }} >
//                 <P onClick={() => { p.setshowDropdownFilter(!p.showDropdownFilter); p.setsdCardFilter(''); p.setsdCardFilterTo(''); p.$input.get('input2FromTextId').focus() }} fs={12} >وارد کردن به صورت دستی</P >
//               </Span>

//             </Span>
//           </Dropdown2>
//         </Span>
//         <Input $input={p.$input} textId='input2FromTextId' keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.sdCardFilter.toString()} onChangeText={(text) => { p.setsdCardFilter(text) }} />
//         <Input keyboardType='numeric' fs={p.sdCardFilterTo == Infinity ? 18 : 11} value={p.sdCardFilterTo == Infinity ? '♾' : p.sdCardFilterTo.toString()} w={100} placeholder='تا' onChangeText={(text) => { p.setsdCardFilterTo(text) }} />
//         <Span mr={5} ai='center' jc='center' >گیگابایت</Span>
//       </Span>
//     </Span>
//   </Span>

//   <Span mt={12} w='100%' ai='center' id='3'>
//     <Span ai='flex-start' w={270}>
//       <Span><P textAlign='right' >رم</P></Span>
//       <Span w='100%' fd='row' >

//         <Span h={30} mt='auto' mb={-5} ml={5}>
//           <Dropdown2 h={25} bodyStyle={{ right: 20 }}
//             onClick={() => { let arrayId = ['1', '2', '3', '4', '5']; arrayId.map((id) => p.$.id(id) && p.$.id(id).$({ zIndex: 1 })); p.$.id('3').$({ zIndex: 10 }) }}
//             show={p.showDropdownFilter}
//             setshow={p.setshowDropdownFilter}

//           >
//             <Span ph={9} w={150}>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setramFilter(0); p.setramFilterTo(2); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12}> 2 به پایین</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setramFilter(2); p.setramFilterTo(4); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >2 تا 4</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setramFilter(4); p.setramFilterTo(8); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >4 تا 8</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setramFilter(8); p.setramFilterTo(16); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >8 تا 16</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setramFilter(16); p.setramFilterTo(Infinity); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >16 به بالا</P >
//               </Span>

//               <Span style={{ padding: 5 }} >
//                 <P onClick={() => { p.setshowDropdownFilter(!p.showDropdownFilter); p.setramFilter(''); p.setramFilterTo(''); p.$input.get('input3FromTextId').focus() }} fs={12} >وارد کردن به صورت دستی</P >
//               </Span>

//             </Span>
//           </Dropdown2>
//         </Span>
//         <Input $input={p.$input} textId='input3FromTextId' keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.ramFilter.toString()} onChangeText={(text) => { p.setramFilter(text) }} />
//         <Input keyboardType='numeric' fs={p.ramFilterTo === Infinity ? 18 : 11} w={100} placeholder='تا' value={p.ramFilterTo == Infinity ? '♾' : p.ramFilterTo.toString()} onChangeText={(text) => { p.setramFilterTo(text) }} />
//         <Span mr={5} ai='center' jc='center' >گیگابایت</Span>
//       </Span>
//     </Span>
//   </Span>


//   <Span mt={12} w='100%' ai='center' id='4'>
//     <Span ai='flex-start' w={270}>
//       <Span><P textAlign='right' >cpu</P></Span>
//       <Span w='100%' fd='row'>

//         <Span h={30} mt='auto' mb={-5} ml={5}>

//           <Dropdown2 h={25} bodyStyle={{ right: 20 }}
//             onClick={() => { let arrayId = ['1', '2', '3', '4', '5']; arrayId.map((id) => p.$.id(id) && p.$.id(id).$({ zIndex: 1 })); p.$.id('4').$({ zIndex: 10 }) }}
//             show={p.showDropdownFilter}
//             setshow={p.setshowDropdownFilter}

//           >
//             <Span ph={9} w={150}>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcpuCoreFilter(0); p.setcpuCoreFilterTo(2); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12}> 2 به پایین</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcpuCoreFilter(2); p.setcpuCoreFilterTo(4); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >2 تا 4</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcpuCoreFilter(4); p.setcpuCoreFilterTo(8); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >4 تا 8</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcpuCoreFilter(8); p.setcpuCoreFilterTo(16); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >8 تا 16</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcpuCoreFilter(16); p.setcpuCoreFilterTo(Infinity); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >16 به بالا</P >
//               </Span>

//               <Span style={{ padding: 5 }} >
//                 <P onClick={() => { p.setshowDropdownFilter(!p.showDropdownFilter); p.setcpuCoreFilter(''); p.setcpuCoreFilterTo(''); p.$input.get('input4FromTextId').focus() }} fs={12} >وارد کردن به صورت دستی</P >
//               </Span>

//             </Span>
//           </Dropdown2>
//         </Span>
//         <Input $input={p.$input} textId='input4FromTextId' keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.cpuCoreFilter.toString()} onChangeText={(text) => { p.setcpuCoreFilter(text) }} />
//         <Input keyboardType='numeric' fs={p.cpuCoreFilterTo == Infinity ? 18 : 11} w={100} placeholder='تا' value={p.cpuCoreFilterTo == Infinity ? '♾' : p.cpuCoreFilterTo.toString()} onChangeText={(text) => { p.setcpuCoreFilterTo(text) }} />
//         <Span mr={5} ai='center' jc='center' >هسته</Span>
//       </Span>
//     </Span>
//   </Span>


//   <Span mt={12} w='100%' ai='center' id='5'>
//     <Span ai='flex-start' w={270}>
//       <Span><P textAlign='right' >دوربین</P></Span>
//       <Span w='100%' fd='row' >

//         <Span h={30} mt='auto' mb={-5} ml={5}>

//           <Dropdown2 h={25} bodyStyle={{ right: 20 }}
//             onClick={() => { let arrayId = ['1', '2', '3', '4', '5']; arrayId.map((id) => p.$.id(id) && p.$.id(id).$({ zIndex: 1 })); p.$.id('5').$({ zIndex: 10 }) }}
//             show={p.showDropdownFilter}
//             setshow={p.setshowDropdownFilter}

//           >
//             <Span ph={9} w={150}>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcameraFilter(0); p.setcameraFilterTo(8); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12}> 8 به پایین</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcameraFilter(8); p.setcameraFilterTo(16); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >8 تا 16</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcameraFilter(16); p.setcameraFilterTo(32); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >16 تا 32</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcameraFilter(32); p.setcameraFilterTo(64); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >32 تا 64</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcameraFilter(64); p.setcameraFilterTo(108); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >64 تا 108</P >
//               </Span>

//               <Span style={{ padding: 5, borderBottomWidth: 1, borderColor: 'silver' }} >
//                 <P onClick={() => { p.setcameraFilter(108); p.setcameraFilterTo(Infinity); p.setshowDropdownFilter(!p.showDropdownFilter); }} fs={12} >108 به بالا</P >
//               </Span>

//               <Span style={{ padding: 5 }} >
//                 <P onClick={() => { p.setshowDropdownFilter(!p.showDropdownFilter); p.setcameraFilter(''); p.setcameraFilterTo(''); p.$input.get('input5FromTextId').focus() }} fs={12} >وارد کردن به صورت دستی</P >
//               </Span>

//             </Span>
//           </Dropdown2>
//         </Span>
//         <Input $input={p.$input} textId='input5FromTextId' keyboardType='numeric' fs={11} w={100} placeholder='از' value={p.cameraFilter.toString()} onChangeText={(text) => { p.setcameraFilter(text) }} />
//         <Input keyboardType='numeric' fs={p.cameraFilterTo == Infinity ? 18 : 11} w={100} placeholder='تا' value={p.cameraFilterTo == Infinity ? '♾' : p.cameraFilterTo.toString()} onChangeText={(text) => { p.setcameraFilterTo(text) }} />
//         <Span mr={5} ai='center' jc='center' >مگاپیکسل</Span>
//       </Span>
//     </Span>
//   </Span>

//   {/* //! کادر اول رو که وارد میکنه تشخیص بده که کادر دوم رو گزینه هایی که میاره بالا تر از اون باشه */}

//   <Span ai='flex-start' w={270} mr={30}>
//     <Span><P textAlign='right' >نوع شبکه اینترنت</P></Span>
//     <Span fd='row' w={200} jc='center'>
//       <Press border={[1, 'silver']} w={60} h={60} br={4} ai='center' jc='center' bgcolor={p.fourG ? '#0de' : 'white'} onClick={() => p.setfourG(!p.fourG)} >4G</Press>
//       <Press border={[1, 'silver']} w={60} h={60} br={4} mr={10} ai='center' jc='center' bgcolor={p.fiveG ? '#0de' : 'white'} onClick={() => p.setfiveG(!p.fiveG)} >5G</Press>
//     </Span>
//   </Span>


//   <Span ai='flex-start' w={270} mr={30}>
//     <Span fd='row' w={200} jc='center'>
//       <Button mt={10} w={100}
//         onClick={() => {
//           const filterArray = array.filter((f) =>
//             ((f.price >= p.priceFilter) && (p.priceFilterTo ? (f.price <= p.priceFilterTo) : f.price <= Infinity)) &&
//             ((f.sdCard >= p.sdCardFilter) && (p.sdCardFilterTo ? f.sdCard <= p.sdCardFilterTo : f.sdCard <= Infinity)) &&
//             ((f.ram >= p.ramFilter) && (p.ramFilterTo ? f.ram <= p.ramFilterTo : f.ram <= Infinity)) &&
//             ((f.cpuCore >= p.cpuCoreFilter) && (p.cpuCoreFilterTo ? f.cpuCore <= p.cpuCoreFilterTo : f.cpuCore <= Infinity)) &&
//             ((f.camera >= p.cameraFilter) && (p.cameraFilterTo ? f.camera <= p.cameraFilterTo : f.camera <= Infinity)) &&
//             ((!p.fourG && !p.fiveG) ? f.network : (p.fourG && f.network === '4G') || (p.fiveG && f.network === '5G'))
//           )
//           console.log(filterArray);
//           p.setshowFilterModal(false)
//         }}
//       >تایید</Button>
//     </Span>
//   </Span>


//   {/* p.setarray(filterArray) */}


// </Scroll>
// </Modal>
