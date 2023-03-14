import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { Badge, Container2, P, Press, Row, Span } from '../other/Components/Html';
import InputBottom from './components/InputBottom';
import SocketIOClient from 'socket.io-client';
import { localhost } from '../other/utils/axios/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode'
import moment from 'moment-jalaali';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
let adminId

const SocketIo = (p) => {

  const [allUsers, setallUsers] = useState([])
  const [userId, setuserId] = useState('')
  const [pvMessage, setpvMessage] = useState('')
  const [pvChatMessage, setPvChatMessage] = useState([])
  const [to, setto] = useState('')
  const [titleMessage, settitleMessage] = useState([])
  const [localstoragetrue, setlocalstoragetrue] = useState(false)

  const tokenValue = useRef({})
  const tokenSocket = useRef()

  const socket = useRef(SocketIOClient.connect(localhost, {
    transports: ["websocket"],
    auth: {
      token: tokenSocket.current
    }
  },))



  useEffect(() => {
    if (tokenValue.current.isAdmin) {
      if (to)
        p.navigation.setOptions({ headerLeft: () => <Icon style={{ paddingRight: 10, color: '#555' }} name='arrow-left' size={23} onPress={() => setto('')} /> })
      else
        p.navigation.setOptions({ headerLeft: () => <Icon style={{ paddingRight: 10, color: '#555' }} name='arrow-left' size={23} onPress={() => p.navigation.navigate('Home')} /> })

    }
  }, [to])




  useFocusEffect(useCallback(() => {
    AsyncStorage.getItem('token').then((token) => {
      if (token) {
        tokenValue.current = jwt_decode(token)
      }
    })
  }, []))


  useFocusEffect(useCallback(() => {

    socket.current.on("online", (users) => {
      const user = users.find((user) => (user.user.isAdmin === 1))
      adminId = user?.socketId
    });



    socket.current.on("mongoMsg", async (messages) => {
      if (!localstoragetrue) {
        setPvChatMessage(messages)

        if (tokenValue.current.isAdmin) {
          let titleMessage = []
          settitleMessage([])
          for (let i of messages) {
            let find = titleMessage.find((msg) => (msg.userId === i.userId))
            if (!find) {
              titleMessage.push(i)
              AsyncStorage.getItem(i.userId).then((localStorage) => {
                if (localStorage) {
                  let parse = JSON.parse(localStorage)
                  settitleMessage(titleMsg => titleMsg.concat({ badgeActive: i.getTime > parse.getTime, ...i }))
                }
                else {
                  settitleMessage(titleMsg => titleMsg.concat({ badgeActive: true, ...i }))
                }
                setlocalstoragetrue(true)
              })
            }
          }
        }
      }
    })




    socket.current.on("pvChat", async (messages) => {
      setPvChatMessage(messages)

      if (tokenValue.current.isAdmin) {
        let titleMessage = []
        for (let i of messages) {
          let find = titleMessage.find((msg) => (msg.userId === i.userId))
          if (!find) {
            titleMessage.push(i)
            AsyncStorage.getItem(i.userId).then((localStorage) => {
              if (localStorage) {
                let parse = JSON.parse(localStorage)
                settitleMessage(titleMsg => {
                  let ms = [...titleMsg]
                  let filter = ms.filter((m) => (m.userId !== i.userId))
                  filter.push({ badgeActive: i.getTime > parse.getTime, ...i })
                  return filter
                })
              }
              else {
                settitleMessage(titleMsg => {
                  let filter = titleMsg.filter((m) => (m.userId !== i.userId))
                  filter.push({ badgeActive: true, ...i })
                  return filter
                })
              }
              setlocalstoragetrue(true)
            })
          }
        }
      }
    });



    socket.current.on("delRemove", (users) => { setallUsers(users) })
    return () => {
      setPvChatMessage([])
      settitleMessage([])
      socket.current.emit("delRemove")
    }
  }, []));




  useFocusEffect(useCallback(() => {
    var socketTocken
    (async () => {
      socketTocken = await AsyncStorage.getItem('socketTocken')
      if (!socketTocken) {
        await AsyncStorage.setItem('socketTocken', JSON.stringify((new Date().getTime()) + (Math.random() + 100000)))
        socketTocken = await AsyncStorage.getItem('socketTocken')
        tokenSocket.current = socketTocken
        socket.current.emit("online", { user: tokenValue.current, userId: socketTocken });
      }
      else {
        tokenSocket.current = socketTocken
        socket.current.emit("online", { user: tokenValue.current, userId: socketTocken });
      }
    })()
  }, []))


  const handlePvChat = () => {
    socket.current.emit("pvChat", {
      pvMessage: pvMessage,
      userId: tokenSocket.current,
      to: to,
      isAdmin: tokenValue.current.isAdmin,
    });
  };



  return (
    <Container2>
      <View onLayout={() => { if (!tokenValue.current.isAdmin) { setto('1') } }} style={{ flex: 1 }} >
        {!tokenValue.current.isAdmin
          ?
          <FlatList
            inverted
            keyExtractor={(data, i) => data._id}
            data={pvChatMessage}
            renderItem={({ item, index }) => (
              ((item.userId == tokenSocket.current) || (adminId === socket.current.id) || (item.to === tokenSocket.current)) &&
              <Span key={index} style={{ marginVertical: 10, marginHorizontal: 2, width: '70%', minHeight: 45, justifyContent: 'center', paddingHorizontal: 8, backgroundColor: item.to === to ? '#f8f8f8' : '#fff', borderWidth: 1, alignSelf: item.to !== to ? 'flex-end' : 'flex-start', borderRadius: 10, borderWidth: 'silver' }} >
                <Row fd='row-reverse' jc='flex-end' pt={3}>
                  <P mr={20} style={{ fontSize: 9, paddingRight: 3, color: 'silver' }} >{moment(item.date).format('jM/jD hh:mm')}</P>
                  {item.userId === tokenSocket.current &&
                    <P style={{ fontSize: 9, paddingRight: 3, color: 'silver' }} >شما</P>
                  }
                </Row>
                <P>{item.message}</P>
              </Span>
            )}
          />
          :
          <>
            {!to ?
              <FlatList
                keyExtractor={(data, i) => data._id}
                data={titleMessage}
                renderItem={({ item, index }) => (
                  (item.userId !== tokenSocket.current) &&
                  <Press fd='row' 
                  onClick={() => {
                    if ((tokenValue.current.isAdmin) && (item.to === '1')) {
                      setto(item.userId); setuserId(item.userId);
                      AsyncStorage.setItem(item.userId, JSON.stringify(item)).then(() => {
                        settitleMessage(titleMsg => {
                          let filter = titleMsg.filter((m) => (m.userId !== item.userId))
                          filter.push({ ...item, badgeActive: false })
                          return filter
                        })
                      })
                    }
                  }}
                  key={index}
                    style={{ marginVertical: 10, marginRight: 'auto', marginLeft: 'auto', width: '70%', height: 40, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8, backgroundColor: 'white', borderWidth: 1, borderColor: 'silver', borderRadius: 4 }} >
                    <P>کاربر:  </P>
                    <P mt={2}
                      style={{ fontSize: 12, cursor: ((tokenValue.current.isAdmin) && (item.to === '1')) ? 'pointer' : '' }}>{item.userId}</P>
                    {item.badgeActive && <Badge right={0} color={'green'} />}
                  </Press>
                )}
              />
              :
              <View style={{ flex: 1, overflow: 'hidden' }} >
                <FlatList
                  inverted
                  keyExtractor={(data) => data._id}
                  data={pvChatMessage}
                  renderItem={({ item, index }) => (
                    ((item.userId === userId) || (item.to === to)) &&
                    <Span key={index} style={{ marginVertical: 10, marginHorizontal: 2, width: '70%', minHeight: 45, justifyContent: 'center', paddingHorizontal: 8, backgroundColor: item.to === to ? '#f8f8f8' : '#fff', borderWidth: 1, alignSelf: item.to !== to ? 'flex-end' : 'flex-start', borderRadius: 10, borderWidth: 'silver' }} >
                      <Row fd='row-reverse' jc='flex-end' pt={3}>
                        <P mr={20} style={{ fontSize: 9, paddingRight: 3, color: 'silver' }} >{moment(item.date).format('jM/jD hh:mm')}</P>
                        {item.userId === tokenSocket.current &&
                          <P style={{ fontSize: 9, paddingRight: 3, color: 'silver' }} >شما</P>
                        }
                      </Row>
                      <P pb={3}>{item.message}</P>
                    </Span>
                  )}
                />
                <Span mt='auto' >
                  <InputBottom handlePvChat={handlePvChat} setpvMessage={setpvMessage} pvMessage={pvMessage} ></InputBottom>
                </Span>
              </View>
            }
          </>
        }
        {(!tokenValue.current.isAdmin) && <Span mt='auto' >
          <InputBottom handlePvChat={handlePvChat} setpvMessage={setpvMessage} pvMessage={pvMessage}></InputBottom>
        </Span>}
      </View>
    </Container2>
  )
}
export default SocketIo