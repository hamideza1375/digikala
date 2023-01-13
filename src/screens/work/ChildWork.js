import React from 'react'
import { Platform, View } from 'react-native'
import { A_icon, Badge, Button, Card, Card2, Icon, Img, M_icon, P, Press, Scroll, ScrollSlider, SearchBar, Span } from '../../Components/Html'

const ChildBobile = (p) => {



  p.useEffect(() => {
    p.navigation.setOptions({ header: () => 
    <SearchBar Register={p.width > 395 ? true : false} icon={'filter'} iconPress={() => { p.setshowFilterModal(true) }} array={p.array} setarray={p.setarray} {...p} bgcolor={'#e7ed'} logoPress={() => p.navigation.navigate('Home')} row={
      <Span fd='row' mt={19} >
        <P fs={10} mh={7} >موبایل تبلت</P>
        <P fs={10} mh={7} >هدفون هنزفیری</P>
        <P fs={10} mh={7} >لوازم جانبی</P>
      </Span>} src={require('../../assets/images/logo.png')} /> });
}, [])


  return (
    <Span f={1} style={{ maxHeight: Platform.OS === 'web' ? 'calc(100vh - 57px)' : '100%' }} >
      <Scroll >


        <Span as='flex-start'>
          <P mv={10} mr={10} fw='bold' >گوشی موبایل شیایومی مدل 12</P>
        </Span>

        <Span fd='row-reverse' fw={'wrap'} w='100%' jc='space-between' bgcolor='#fff' p={15} >








          <Span w={300} ai='center' jc='center' mt={20} mh={20}>
            <Card2 h={400} w={300} style={{ borderColor: 'silver', backgroundColor: 'white', borderRadius:8 }}

              c1={4}  coulumn1={
                <Span f={1} >
                  <Span f={1} >
                    <Img id='img' f={1} style={{borderTopLeftRadius:8,borderTopRightRadius:8}} src={require('../../assets/images/a1.jpg')} />
                  </Span>
                </Span>
              }
              c2={1} coulumn2={
                <Span f={1} fd='row' jc='center' >
                  <Press onClick={() => { p.$.id('img').$({ src: require('../../assets/images/a1.jpg') }) }} f={1} ai='center' jc='center' >
                    <Img w='90%' h='90%' br={4} src={require('../../assets/images/a1.jpg')} />
                  </Press>
                  <Press onClick={() => { p.$.id('img').$({ src: require('../../assets/images/a2.jpg') }) }} f={1} ai='center' jc='center' >
                    <Img w='90%' h='90%' br={4} src={require('../../assets/images/a2.jpg')} />
                  </Press>
                  <Press onClick={() => { p.$.id('img').$({ src: require('../../assets/images/a3.jpg') }) }} f={1} ai='center' jc='center' >
                    <Img w='90%' h='90%' br={4} src={require('../../assets/images/a3.jpg')} />
                  </Press>
                  <Press onClick={() => { p.$.id('img').$({ src: require('../../assets/images/a7.jpg') }) }} f={1} ai='center' jc='center' >
                    <Img w='90%' h='90%' br={4} src={require('../../assets/images/a7.jpg')} />
                  </Press>

                </Span>
              }

            >

            </Card2>
          </Span>





          <Span w={400} ai='center' jc='center' mt={20} mh={20}>
            <Card2 h={400} w={400} style={{ borderColor: 'silver', backgroundColor: 'white' }}
              coulumn1={
                <Span w={'100%'} f={1} >

                  <Span fd='row' f={1} w={'100%'}>
                    <Span bbw={2} w='20%' fg={1} mh={4} />
                    <P mt={14}>ارسال سریع</P>
                    <Span bbw={2} w='20%' fg={1} mh={4} />
                  </Span>


                  <Span f={2} pr={12} mt={20} >
                    <P >تحویل حد اکثر یکساعت بعد از خرید</P>
                  </Span >

                </Span>
              }
              c2={3} coulumn2={
                <Span w={'100%'} f={1}>


                  <Span fg={1} fd='row' pr={12}>
                    <P mb={-6}>گارانتی: </P>
                    <P mb={-6}>گارانتی</P>
                  </Span >

                  <Span fg={1} fd='row' pr={12}>
                    <P mb={-6}>موجود در انبار: </P>
                    <P mb={-6}>موجود در انبار</P>
                  </Span >

                  <Span fg={1} fd='row' pr={12}>
                    <P mb={-6}>انتخاب رنگ: </P>
                    <P mb={-6}>انتخاب رنگ</P>
                  </Span >

                  <Span fg={1} mb={10} >
                    <Button w='70%' bgcolor='#909' style={{ alignSelf: 'center', position: 'absolute', bottom: 5 }} >افزودن به سبد خرید</Button>
                  </Span >


                </Span>}
            />
          </Span>














          <Span style={{marginTop:20}} mh={20} w={300} as='flex-end' ai='center' jc='center' >

            <Span mt={12} as='flex-start' >
              <P>مشخصات</P>
            </Span>

            <Card2 h={400} w={300} style={{ borderColor: 'silver', backgroundColor: 'white' }}

              coulumn1={
                <Span mt={10} >
                  <Span mr={12} fd='row' >
                    <P>نوع پردازنده cpu: </P>
                    <P>نوع پردازنده cpu:</P>
                  </Span>
                </Span>
              }
              coulumn2={
                <Span>
                  <Span mr={12} fd='row' >
                    <P>رم:</P>
                    <P>رم:</P>
                  </Span>
                </Span>
              }
              coulumn3={
                <Span>
                  <Span mr={12} fd='row' >
                    <P>حافظه ی داخلی: </P>
                    <P>حافظه ی داخلی:</P>
                  </Span>
                </Span>
              }
              coulumn4={
                <Span>
                  <Span mr={12} fd='row' >
                    <P>دوربین: </P>
                    <P>دوربین:</P>
                  </Span>
                </Span>
              }

              c5={.5} coulumn5={
                <Span f={.8} jc='center'>
                  <Span ml={12} as='flex-end'>
                    <P >نمایش مشخصات کامل کلیک کنید »</P>
                  </Span>
                </Span>
              }

            >

            </Card2>



            <Span fd='row' mt={10} ai='center'  >
              <Span f={1} mh={6} h={60} mt={4} ai='center' jc='flex-start' >
                <Card2 h={'auto'} border={[0]}
                  coulumn1={
                    <Span h={'100%'} w={'100%'} jc='center' ai='center' ><Img bgcolor='white' w={40} h={30} src={require('../../assets/images/payPostMethod.png')} size={30} /></Span>
                  }
                  coulumn2={
                    <Span w='100%' h={30} >
                      <P ta='center' mt={5} fs={9}>پرداخت در محل</P>
                    </Span>
                  }
                />
              </Span>
              <Span f={1} mh={6} h={60} ai='center' jc='flex-start' >
                <Card2 h={'auto'} border={[0]}
                  coulumn1={
                    <Span h={'100%'} w={'100%'} jc='center' ai='center' ><Img bgcolor='white' w={40} h={30} src={require('../../assets/images/originalPostMethod.png')} size={30} /></Span>
                  }
                  coulumn2={
                    <Span w='100%' h={30} >

                      <P ta='center' mt={4} fs={9} >ضمانت اصالت کالا</P>
                    </Span>
                  }
                />
              </Span>
              <Span f={1} mh={6} h={60} ai='center' jc='flex-start' >
                <Card2 h={'auto'} border={[0]}
                  coulumn1={
                    <Span h={'100%'} w={'100%'} jc='center' ai='center' ><Img bgcolor='white' w={40} h={30} src={require('../../assets/images/7dayPostMethod.png')} size={30} /></Span>
                  }
                  coulumn2={
                    <Span w='100%' h={30} >

                      <P ta='center' mt={4} fs={9} >هفت روز فرصت بازگشت کالا</P>
                    </Span>
                  }
                />
              </Span>
            </Span>
          </Span>

        </Span>








        <Span bgcolor='#fef' >
          <Span><P mt={10} mr={10}>محصولات مشابه</P></Span>
          <Span>
            <ScrollSlider
              {...p}
              style={Platform.OS !== 'web' ? { paddingRight: 290, height: 290, } : { paddingRight: 10, height: 290, }}
              data={p.array}
              renderItem={({ item }) => (
                <Span h={260} w={230} ai='center'  >
                  <Card2 h={240} w={200} bgcolor={'#fff'} sh={{ r: 8, o: .4, of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={require('../../assets/images/a1.jpg')}
                    coulumn1={<Span mt={8} w={'100%'}><P fs={11} ta='center' as='center' >گوشی k22 سالاری مدل h3 سه</P></Span>}
                    coulumn2={<Span bgcolor='#eee' fd='row' h={35} jc='center' w={'100%'}>
                      <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
                        <Icon name='microchip' size={16} style={{ transform: [{ scaleY: .6 }] }} />
                        <P fs={9} ta='center' >8 هسته</P>
                      </Span>
                      <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1}>
                        <A_icon name='hdd' size={16} />
                        <P fs={9} ta='center' >126 گیگ </P>
                      </Span>
                      <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
                        <P >Ram</P>
                        <P fs={9} ta='center' >8 گیگ</P>
                      </Span>
                      <Span ai='center' w={'25%'} h={35} pt={1} >
                        <A_icon name='camera' size={16} />
                        <P fs={9} ta='center' >64 پیکسل</P>
                      </Span>
                    </Span>
                    }
                    coulumn3={<Span mt={8} fd='row' jc='space-evenly' w={'100%'}><P>6000000 تومان</P></Span>}
                    coulumn4={<Span fd='row' jc='space-around' w={'100%'}></Span>}
                  />
                </Span>

              )}
            />
            {/* //!Feather */}
          </Span>
        </Span>







        <Span bgcolor='#fff' border={[1, 'silver']} >
          <Span mt={15} mr={12} >
            <P>نظر ها</P>
            <Span />
          </Span>

          <Scroll style={{ maxHeight: 500 }} >

            <Span flex={1} mv={8} >
              <Card dr='rtl' headerRow={
                <Span fd='row-reverse' w='100%' >
                  <Span ><P>2/5/33</P></Span>
                  <Span><P> | </P></Span>
                  <Span><P> 4 ستاره </P></Span>
                  <Span mt={-4} >
                    <Icon name='star' color='orange' size={27} />
                  </Span>
                  <Span ml='auto' >
                    <P>محمد جعفر ساتر</P>
                  </Span>

                </Span>
              } body={<P>jj</P>} footerRow={
                <Span fd='row-reverse' >
                  <Span bgcolor='silver' p={7} pv={4} pl={2} w={50} mh={2} br={5} jc='center' ai='center' fd='row' >
                    <Badge bgcolor='gray' text={0} top={8} right={1} scale={.5} />
                    <A_icon name='dislike2' size={23} /></Span>
                  <Span bgcolor='silver' p={7} pv={4} pl={2} w={50} mh={2} br={5} jc='center' ai='center' fd='row' >
                    <Badge bgcolor='gray' text={1} top={8} right={1} scale={.5} />
                    <A_icon name='like2' size={23} /></Span>
                  <Span bgcolor='silver' p={7} pv={4} mh={2} br={5} jc='center' ai='center' ><P fs={12} >پاسخ »</P></Span>
                </Span>
              } />
            </Span>

          </Scroll>

        </Span>


      </Scroll>
      <Span sh={{ r: 6, o: .5 }} jc='center' ai='center' br={70} bgcolor='#909' h={50} w={50} pos='absolute' b={30} l={40} >
        <M_icon color='#fff' name='chat' size={30} />
      </Span>
    </Span>
  )
}

export default ChildBobile


// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
