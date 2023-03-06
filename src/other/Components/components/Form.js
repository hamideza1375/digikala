import React, { useState, useEffect, useCallback } from 'react'
import { KeyboardAvoidingView, Pressable, View, Text, TextInput, Image, StyleSheet, ScrollView, Dimensions, Animated, Platform } from 'react-native'
import { Input, Button, CheckBox, Swiper } from '../Html'
import yub from '../../utils/yub'
import A_icon from 'react-native-vector-icons/dist/AntDesign';
import M_icon from 'react-native-vector-icons/dist/MaterialIcons';
const newObj = new Proxy({}, yub);
import { useFocusEffect } from '@react-navigation/native';
import Frm from '../formComponent/Frm'
import InputImage from '../formComponent/InputImage'
import AsyncStorage from '@react-native-async-storage/async-storage';

let loginInterval = null

// textContentType="oneTimeCode" and keyboardType="numeric"

{/* <input
  type="text"
  name="token"
  inputmode="numeric"
  pattern="[0-9]"
  autocomplete="one-time-code"
/> */}

let interval
const Form = ({
  webStyle = {}, nativeStyle = {}, timer = false, refInput, rand, setRand, btn = true,
  contentContainerStyle, mAutoFocus, mt, bgcolor = '#f0f0f0',
  f, e, p, cp, m, ch, c, t, pr, im, i, edit, s, ph, $code, v, style,
  plackTextTop = true,
  pb = 25, pt = 10,
  register,
  autoComplete = true,
  onClick,
  navigation,
  phore, 
  in1, 
  checkText,
  children,
  host,
  sizeY = 1,
  top = 10,
  flexDirection,

  fIconLeft, fIconRight, eIconLeft, eIconRight, pIconLeft, pIconRight, cpIconLeft, cpIconRight,
  tIconLeft, tIconRight, prIconLeft, prIconRight, iIconLeft, iIconRight, imIconLeft, imIconRight, phIconLeft, phIconRight,
  phoreIconLeft, phoreIconRight, codeIconLeft, codeIconRight, vIconLeft, vIconRight,

  title, settitle, price, setprice, phone, setphone,phoneOrEmail, setphoneOrEmail,
  imageUrl, setImageUrl, videoUrl, setvideoUrl, info, setinfo,fullname, setfullname, email, setemail, password, setpassword,
  confirmPassword, setconfirmPassword, message, setmessage, code, setcode, input1, setinput1,captcha, setcaptcha, setremember,
  star1, setstar1, star2, setstar2, star3, setstar3, star4, setstar4, star5, setstar5, allstar, setallstar,
}) => {



  useFocusEffect(useCallback(() => {
    return () => (interval) && clearInterval(interval)
  }, []))

  useEffect(() => {
    setallstar && setallstar(() => {
      let a = ''
      switch (true) {
        case star5:
          a = 5
          break;
        case star4:
          a = 4
          break;
        case star3:
          a = 3
          break;
        case star2:
          a = 2
          break;
        case star1:
          a = 1
          break;
        default:
          a = 0
          break;
      }
      return a
    })

  }, [star1, star2, star3, star4, star5])


  // Dimensions.addEventListener('change', ({ window: { width, height } }) => {
  //   setwidth(width); setheight(height)
  // })

  const [secure, setSecure] = useState(true)
  const [secure2, setSecure2] = useState(true)
  const [show, setshow] = useState(ch && !checkText ? false : true)
  const [show2, setShow2] = useState(false);
  const [changeRand, setchangeRand] = useState(false);
  const [changeremember, setchangeremember] = useState(true);

  useFocusEffect(useCallback(() => {
    setRand && setRand(parseInt(Math.random() * 9000 + 1000))
    return () => setcaptcha && setcaptcha('')
  }, [show2]))

  const [_fullname, set_Fullname] = useState()
  const [_email, set_Email] = useState()
  const [_password, set_Password] = useState()
  const [_confirmPassword, set_ConfirmPassword] = useState()
  const [_title, set_Title] = useState()
  const [_price, set_Price] = useState()
  const [_code, set_Code] = useState()
  const [_imageUrl, set_ImageUrl] = useState()
  const [_videoUrl, set_VideoUrl] = useState()

  const [_info, set_Info] = useState()
  const [_message, set_Message] = useState()
  const [_checkbox, set_Checkbox] = useState()
  const [_captcha, set_Captcha] = useState()
  const [_allstar, set_Allstar] = useState()
  const [_phone, set_Phone] = useState()
  const [_phore, set_Phore] = useState()
  const [_input1, set_Input1] = useState()


  newObj.phone = phone;
  newObj.phoneOrEmail = phoneOrEmail;
  newObj.fullname = fullname
  newObj.email = email;
  newObj.password = password;
  newObj.confirmPassword = confirmPassword;
  newObj.title = title
  newObj.price = price;
  newObj.code = code
  newObj.imageUrl = imageUrl;
  newObj.videoUrl = videoUrl;
  newObj.info = info;
  newObj.message = message;
  newObj.allstar = allstar;
  newObj.input1 = input1;

  var pon = ph ? newObj.phone === phone : true
  var poe = phore ? newObj.phoneOrEmail === phoneOrEmail : true
  var flm = f ? newObj.fullname === fullname : true
  var eml = e ? newObj.email === email : true
  var psd = p ? newObj.password === password : true
  var cfpsd = cp ? newObj.confirmPassword === confirmPassword : true
  var msg = m ? newObj.message === message : true
  var cap = c ? (rand == captcha) ? true : false : true
  var titl = t ? newObj.title === title : true
  var prc = pr ? newObj.price === price : true
  var cod = $code ? newObj.code === code : true
  var img = im ? (!edit ? newObj.imageUrl === imageUrl : true) : true
  var vdo = v ? (!edit ? newObj.videoUrl === videoUrl : true) : true
  var inf = i ? newObj.info === info : true
  var inpt1 = in1 ? newObj.input1 === input1 : true


  return (
    <ScrollView contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]} style={[{ backgroundColor: bgcolor, borderRadius: 3, marginTop: mt }, Platform.OS === 'web' ? webStyle : nativeStyle]} >

      <View style={[styles.viewContainer, { paddingTop: top }, style]} >
        <View style={[{ transform: [{ scaleY: sizeY }], padding: 10, paddingBottom: pb, paddingTop: pt }, flexDirection === 'row' && Platform.OS === 'web' ? { flexDirection: 'row', flexWrap: 'wrap' } : {}]}>

          {f &&
            <Frm
              register={register}
              plackTextTop={plackTextTop}
              textContentType="username"
              autoComplete={autoComplete ? "username" : 'off'}
              icon='user'
              p='نام'
              newObj={newObj.fullname}
              iconLeft={fIconLeft}
              iconRight={fIconRight}
              state={fullname}
              setState={setfullname}
              getBlur={_fullname}
              setBlur={set_Fullname}
              yub={flm}
              styles={styles} />
          }

          {e &&
            <Frm
              register={register}
              plackTextTop={plackTextTop}
              textContentType="emailAddress"
              autoComplete={autoComplete ? "autoComplete" : 'off'}
              keyboardType="email-address"
              icon="envelope"
              p='ایمیل'
              newObj={newObj.email}
              iconLeft={eIconLeft}
              iconRight={eIconRight}
              state={email}
              setState={setemail}
              getBlur={_email}
              setBlur={set_Email}
              yub={eml}
              styles={styles}
            />
          }

          {ph &&
            <Frm
              register={register}
              plackTextTop={plackTextTop}
              textContentType="telephoneNumber"
              autoComplete={autoComplete ? "tel" : 'off'}
              keyboardType="phone-pad"
              icon="phone"
              p='شماره تلفن '
              iconLeft={phIconLeft}
              iconRight={phIconRight}
              state={phone}
              setState={setphone}
              getBlur={_phone}
              setBlur={set_Phone}
              newObj={newObj.phone}
              yub={pon}
              styles={styles}
            />
          }


          {phore &&
            <Frm
              register={register}
              plackTextTop={plackTextTop}
              textContentType="emailAddress"
              autoComplete={autoComplete ? "autoComplete" : 'off'}
              keyboardType="email-address"
              icon="phone"
              p='ایمیل یا شماره تلفن'
              newObj={newObj.phoneOrEmail}
              iconLeft={phoreIconLeft}
              iconRight={phoreIconRight}
              state={phoneOrEmail}
              setState={setphoneOrEmail}
              getBlur={_phore}
              setBlur={set_Phore}
              yub={poe}
              styles={styles}
            />
          }

          {p &&
            <Frm
              register={register}
              plackTextTop={plackTextTop}
              textContentType="password"
              autoComplete={autoComplete ? "password" : 'off'}
              icon={!secure ? "eye" : "eye-slash"}
              p="رمز عبور"
              iconLeft={pIconLeft}
              iconRight={pIconRight}
              state={password}
              setState={setpassword}
              getBlur={_password}
              setBlur={set_Password}
              newObj={newObj.password}
              yub={psd}
              styles={styles}
              secureTextEntry={secure}
              iconPress={() => { setSecure(!secure); }}
            />
          }

          {cp &&
            <Frm
              register={register}
              plackTextTop={plackTextTop}
              textContentType="password"
              autoComplete={autoComplete ? "password" : 'off'}
              icon={!secure2 ? "eye" : "eye-slash"}
              p=" تکرار رمز عبور "
              iconLeft={cpIconLeft}
              iconRight={cpIconRight}
              state={confirmPassword}
              setState={setconfirmPassword}
              getBlur={_confirmPassword}
              setBlur={set_ConfirmPassword}
              newObj={newObj.confirmPassword}
              yub={cfpsd}
              styles={styles}
              secureTextEntry={secure2}
              iconPress={() => { setSecure2(!secure2); }}
            />
          }

          {t &&
            <Frm
              plackTextTop={plackTextTop}
              m_icon="title"
              p="عنوان "
              iconLeft={tIconLeft}
              iconRight={tIconRight}
              state={title}
              setState={settitle}
              getBlur={_title}
              setBlur={set_Title}
              newObj={newObj.title}
              yub={titl}
              styles={styles}
            />
          }

          {pr &&
            <Frm
              plackTextTop={plackTextTop}
              icon="dollar-sign"
              p=" قیمت "
              iconLeft={prIconLeft}
              iconRight={prIconRight}
              state={price}
              setState={setprice}
              getBlur={_price}
              setBlur={set_Price}
              newObj={newObj.price}
              yub={prc}
              styles={styles}
              keyboardType="numeric"
            />
          }

          {$code &&
            <Frm
              plackTextTop={plackTextTop}
              m_icon="textsms"
              p="کد ورود"
              iconLeft={codeIconLeft}
              iconRight={codeIconRight}
              state={code}
              setState={setcode}
              getBlur={_code}
              setBlur={set_Code}
              newObj={newObj.code}
              yub={cod}
              styles={styles}
              keyboardType="numeric"
            />
          }


          {i &&
            <Frm
              plackTextTop={plackTextTop}
              multiline
              icon="info"
              p=" توضیحات "
              iconLeft={iIconLeft}
              iconRight={iIconRight}
              state={info}
              setState={setinfo}
              getBlur={_info}
              setBlur={set_Info}
              newObj={newObj.info}
              yub={inf}
              styles={styles}
            />
          }

          {m &&
            <Frm
              plackTextTop={plackTextTop}
              p="پیام"
              iconLeft={false}
              iconRight={false}
              state={message}
              setState={setmessage}
              getBlur={_message}
              setBlur={set_Message}
              newObj={newObj.message}
              yub={msg}
              styles={styles}
              multiline
              autoFocus={mAutoFocus}
            />
          }


          {in1 &&
            <Frm
              textContentType="telephoneNumber"
              autoComplete="off"
              icon="phone"
              plackTextTop={plackTextTop}
              p='ادمین جدید'
              state={input1}
              setState={setinput1}
              getBlur={_input1}
              setBlur={set_Input1}
              newObj={newObj.input1}
              yub={inpt1}
              styles={styles}
              keyboardType="phone-pad"
            />
          }


          {im && <InputImage
            plackTextTop={plackTextTop}
            icon='image'
            p='انتخاب عکس  '
            accept='image'
            mediaType='photo'
            imIconLeft={imIconLeft}
            imIconRight={imIconRight}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            _imageUrl={_imageUrl}
            newObj={newObj.imageUrl}
            img={img}
            styles={styles}
          />}

          {v && <InputImage
            plackTextTop={plackTextTop}
            icon='video-library'
            p='انتخاب ویدئو  '
            accept='video'
            mediaType='video'
            imIconLeft={vIconLeft}
            imIconRight={vIconRight}
            imageUrl={videoUrl}
            setImageUrl={setvideoUrl}
            _imageUrl={_videoUrl}
            newObj={newObj.videoUrl}
            img={vdo}
            styles={styles}
          />}

          {ch &&
            <View behavior={"height"} style={{ height: 35, minHeight: 35, justifyContent: 'center', marginTop: 30, marginHorizontal: 10 }}>
              <View style={{ marginVertical: 10 }} >
                <View style={[styles.viewCheckbox, { flexGrow: .4, maxHeight: 20 }]}>
                  <CheckBox show={!checkText ? show : changeremember} setshow={!checkText ? setshow : setchangeremember} />
                  <Text onPress={!checkText ? () => { navigation.navigate('Rules') } : () => { setchangeremember(!changeremember) }} style={{ marginLeft: 11 }} >{checkText ? " " + checkText : " موافقت با قوانین "}</Text>
                </View>
                {_checkbox && show == false && <Text style={{ color: 'red', alignSelf: 'flex-start' }} >پرکردن فیلد الزامی هست</Text>}
              </View>
            </View>
          }

          {c &&
            <>
              <KeyboardAvoidingView behavior={"height"} style={{ height: 50, minHeight: 50, marginVertical: 8, marginHorizontal: 10 }}>
                <View style={[styles.viewCaptcha, { height: 28, alignItems: 'center' }]}>

                  <Image source={{ uri: `${host}/captcha.png/${rand}` }} style={styles.imageCaptcha} />
                  <M_icon name="refresh" color="#66bbff" size={22}
                    onPressIn={() => setchangeRand(true)}
                    onPress={() => {
                      setchangeRand(true)
                      setShow2(!show2)
                      setcaptcha('')
                    }} />
                  <TextInput
                    ref={refInput}
                    keyboardType="numeric"
                    value={captcha}
                    placeholder="کد امنیتی" style={[styles.TextInput, { borderColor: '#666' }, rand != captcha && _captcha && { borderColor: '#a22' }]}
                    onChangeText={text => setcaptcha(text)} />
                </View>
                {((_captcha) && (!captcha) ? <Text style={{ color: 'red', width: captcha ? 280 : 260 }}>لطفا کادر را پر کنید</Text> : <></>)}
                {((_captcha) && (captcha) && (rand != captcha) ? <Text style={{ color: 'red', width: captcha ? 280 : 260 }}> کد وارد شده اشتباه هست</Text> : <></>)}
              </KeyboardAvoidingView>
            </>
          }

          {children &&
            <View behavior={"height"} style={{ height: 70, minHeight: 70, marginVertical: 5 }}>

              <View style={[styles.viewChildren, { flexGrow: .4 }]}>
                <Text style={{ color: '#0cf' }} >{children}</Text>
              </View>
            </View>
          }

          {s &&
            <View behavior={"height"} style={{ height: 70, minHeight: 70, marginVertical: 7 }}>
              <View style={{ minHeight: 42, maxHeight: 45, flexGrow: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, marginTop: 20 }}>
                <View style={{ flexGrow: .5, minHeight: 40, flexDirection: 'row-reverse', alignItems: 'center' }} >

                  {!star1 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => setstar1(true)}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(false); setstar2(false); setstar3(false); setstar4(false); setstar5(false) }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                  {!star2 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(true); setstar2(true); }}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar2(false); setstar3(false); setstar4(false); setstar5(false) }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                  {!star3 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(true); setstar2(true); setstar3(true); }}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar5(false); setstar4(false); setstar3(false); }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                  {!star4 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(true); setstar2(true); setstar3(true); setstar4(true); }}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar4(false); setstar5(false); }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                  {!star5 ?
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar1(true); setstar2(true); setstar3(true); setstar4(true); setstar5(true) }}>
                      <A_icon name='staro' size={26} color='orange' />
                    </Pressable>
                    :
                    <Pressable style={{ height: 40, justifyContent: 'center', marginRight: 7 }}
                      onPress={() => { setstar5(false) }}>
                      <A_icon name='star' size={26} color='orange' />
                    </Pressable>
                  }

                </View>

                {_allstar && newObj.allstar != allstar &&
                  <View style={{ width: '100%', alignItems: 'center', height: 'auto', marginTop: 5 }} >
                    <Text style={[{ color: 'red' }]} >
                      {newObj.allstar}
                    </Text>
                  </View>
                }

              </View>
            </View>
          }

          {btn &&
            <KeyboardAvoidingView behavior={"height"} style={{ height: 70, minHeight: 70, marginBottom: 15, width: '100%' }}>
              {btn && <Button
                onPressIn={() => {
                  setremember && setremember(changeremember ? (60000 * 60 * 24 * 365) : ('24h'))
                  set_Fullname(true);
                  set_Email(true);
                  set_Password(true);
                  set_ConfirmPassword(true);
                  set_Message(true);
                  set_Checkbox(checkText ? false : true);
                  set_Captcha(true)
                  set_Title(true)
                  set_Price(true)
                  set_ImageUrl(true)
                  set_VideoUrl(true)
                  set_Info(true)
                  set_Allstar(true)
                  set_Phone(true)
                  set_Phore(true)
                  set_Code(true)
                  set_Input1(true)
                }}
                onPress={async () => {
                  if (flm && eml && psd && cfpsd && msg && cap && show && titl && prc && cod && img && vdo && inf && pon && poe && inpt1 && star1) {

                    if (!timer) {
                      onClick()
                    } else {
                      loginInterval && clearInterval(loginInterval)
                      let d = new Date()
                      let locMinut = await AsyncStorage.getItem('getMinutes')

                      let svl = await AsyncStorage.getItem("several")
                      if ((locMinut - d.getMinutes()) <= 1) {
                        await AsyncStorage.removeItem("several")
                        await AsyncStorage.removeItem('getMinutes')
                      }
                      if (JSON.parse(svl) < 5 && JSON.parse(svl) > 0) {
                        loginInterval = setTimeout(async () => {
                          if (JSON.parse(svl) > 0) {
                            AsyncStorage.getItem("several").then((several) => { AsyncStorage.setItem("several", JSON.stringify(JSON.parse(several) - 1)).then(() => { }) })
                            await AsyncStorage.setItem('getMinutes', JSON.stringify(d.getMinutes() - 5))
                          }
                        }, 60000);
                      }
                      if (JSON.parse(svl) < 5 || (locMinut - d.getMinutes() <= 1)) {
                        await AsyncStorage.removeItem('getTime')
                        await AsyncStorage.setItem('getMinutes', JSON.stringify(d.getMinutes() + 5))
                        AsyncStorage.getItem("several").then((several) => {
                          AsyncStorage.setItem("several", JSON.stringify(JSON.parse(several) + 1)).then(() => { })
                        })
                        onClick()

                      }
                      else {
                        let loc = await AsyncStorage.getItem('getTime')
                        if (loc === '' || loc === null || !loc) {
                          loginInterval && clearInterval(loginInterval)
                          await AsyncStorage.setItem('getTime', 'true')
                          await AsyncStorage.setItem('getMinutes', JSON.stringify(d.getMinutes() + 5))
                        }
                        AsyncStorage.getItem('getMinutes').then((locMinut) => {
                          if (JSON.parse(svl) >= 5)
                            alert(`تعداد دفعات وارد شده بیشتر از حد مجاز بود ${locMinut - d.getMinutes() > 0 ? locMinut - d.getMinutes() : 0} دقیقه دیگر دوباره امتحان کنید`)
                        })
                      }

                    }


                  }
                  else {
                    setRand(parseInt(Math.random() * 9000 + 1000))
                    setcaptcha('')
                  }
                }}
                style={[styles.btn]} >
                click
              </Button>}
            </KeyboardAvoidingView>}
        </View>
      </View>
    </ScrollView >
  )
}

export default Form
const styles = StyleSheet.create({
  containerScrollView: {
    height: '100%',
    minWidth: '100%',
  },
  closeRecaptcha: {
    fontSize: 31,
    elevation: 1,
    shadowColor: "#f00",
    shadowOpacity: 4,
    shadowRadius: 1,
    shadowOffset: { width: 1, height: 1 },
    color: 'red',
    opacity: .8
  },

  checkboxGoggleRecaptcha: {
    transform: [{ scale: 2 }],
    borderColor: '#aaa',
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: .2,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 }
  },
  googleRecaptcha: {
    transform: [{ scale: .85 }],
    marginBottom: 17,
    marginTop: 15,
    flexGrow: 1.5,
    height: 105,
    maxHeight: 115,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    width: 111,
    borderRadius: 5,
    borderColor: '#ccc',
    alignSelf: 'center',
    // marginVertical: 22,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: .5,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  animatedBorder: {
    height: 53,
    borderRadius: 5,
    marginBottom: 5,
  },
  containerScrollView: {
    height: '100%',
    minWidth: '100%',
    backgroundColor: '#f0f0f0',
    borderWidth: .3,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: .6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  viewContainer: {
    minWidth: '100%',
    justifyContent: 'center',


  },
  contentContainerStyle: {
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    height: '100%',
    backgroundColor: '#f0f0f0',
    borderWidth: .3,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: .6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },

  btn: {
    flexGrow: .5,
    marginTop: 30,
    marginBottom: 10,
    width: 200,
    alignSelf: 'center',
    minHeight: 40,
    maxHeight: 45,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: .6,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  viewChildren: {
    flexGrow: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 22,
    marginLeft: 5,
    minHeight: 20,
    maxHeight: 24,

  },
  TextInput: {
    borderRadius: 2,
    textAlign: 'right',
    padding: 7,
    width: 85,
    height: 35,
    borderWidth: 1,
    backgroundColor: '#eee'
  },

  imageCaptcha: {
    borderRadius: 2,
    padding: 5,
    backgroundColor: "#412",
    width: 105,
    height: 38,

  },
  viewCaptcha: {

    flexDirection: "row",
    alignSelf: 'flex-start',
    alignContent: 'center',
    justifyContent: "space-between",
    width: 250,
    marginTop: 25,
    marginBottom: 10,

  },
  viewCheckbox: {
    flexGrow: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    width: 150,
    minHeight: 18,
    marginBottom: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: .2,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },

  messageInput: {
    minHeight: 100,
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  textinput: {
    height: 19,
    alignSelf: 'flex-start',
    fontSize: 11
  },
  input: {
    marginBottom: 5,
    minHeight: 50,
    minWidth: '90%',
    shadowColor: "#000",
    shadowOpacity: .4,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2

    },
  },
  viewInput: {
    minWidth: "100%",
    marginBottom: 19,
    flexGrow: 1.5,
    minHeight: 80,
    maxHeight: 80,
  },

  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header22: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput22: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
})