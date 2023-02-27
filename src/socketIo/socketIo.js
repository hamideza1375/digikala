import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, View, FlatList } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { Badge, Button, Container2, Span } from '../other/Components/Html';
import InputBottom from './components/InputBottom';
import SocketIOClient from 'socket.io-client';
import { localhost } from '../other/utils/axios/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode'
let adminId

const SocketIo = (p) => {

  const [allUsers, setallUsers] = useState([])
  const [change, setchange] = useState(false)
  const [userId, setuserId] = useState('')
  const [pvMessage, setpvMessage] = useState('')
  const [pvChatMessage, setPvChatMessage] = useState([])
  const [to, setto] = useState('')
  const [titleMessage, settitleMessage] = useState([])
  const [localstoragetrue, setlocalstoragetrue,] = useState(false)

  const tokenValue = useRef({})
  const tokenSocket = useRef()

  const socket = useRef(SocketIOClient.connect(localhost, {
    transports: ["websocket"],
    auth: {
      token: tokenSocket.current
    }
  },))




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
        if (tokenValue.current.isAdmin === 1) {
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
    });



    socket.current.on("delRemove", (users) => { setallUsers(users) })
    return () => {
      setPvChatMessage([])
      settitleMessage([])
      socket.current.emit("delRemove")
    }

  }, []));




  useFocusEffect(useCallback(() => {
    // AsyncStorage.removeItem('socketTocken').then(() => { })
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
    });
  };



  return (
    <Container2>
      <View onLayout={() => { if (tokenValue.current.isAdmin !== 1) { setto('1') } }} style={{ flex: 1 }} >
        {tokenValue.current.isAdmin !== 1
          ?
          <FlatList
            inverted
            keyExtractor={(data, i) => data._id}
            data={pvChatMessage}
            renderItem={({ item, index }) => (
              ((item.userId == tokenSocket.current) || (adminId === socket.current.id) || (item.to === tokenSocket.current)) &&
              <Span key={index} style={{ marginVertical: 10, marginHorizontal: 2, width: '70%', height: 40, justifyContent: 'center', paddingHorizontal: 8, backgroundColor: item.to === to ? '#f8f8f8' : '#fff', borderWidth: 1, alignSelf: item.to !== to ? 'flex-end' : 'flex-start', borderRadius: 10, borderWidth: 'silver' }} >
                {item.userId === tokenSocket.current && <Text style={{ fontSize: 9, paddingRight: 3, color: 'silver' }} >شما</Text>}
                <Text>{item.message}</Text>
              </Span>
            )}
          />
          :
          <>
            {to && <Button onClick={() => { setto('') }} >back</Button>}

            {!to ?
              <FlatList
                keyExtractor={(data, i) => data._id}
                data={titleMessage}
                renderItem={({ item, index }) => (
                  (item.userId !== tokenSocket.current) &&
                  <Span key={index} style={{ marginVertical: 10, marginHorizontal: 2, width: '70%', height: 40, justifyContent: 'center', paddingHorizontal: 8, backgroundColor: 'white', borderWidth: 1 }} >
                    <Text onClick={() => { if ((tokenValue.current.isAdmin === 1) && (item.to === '1')) { setto(item.userId); setuserId(item.userId); AsyncStorage.setItem(item.userId, JSON.stringify(item)).then(() => { }) /* navigation.navigate('Pv', { userId: item.userId, adminId, item }) */ } }} style={{ fontSize: 12, cursor: ((tokenValue.current.isAdmin === 1) && (item.to === '1')) ? 'pointer' : '' }}>{item.userId}</Text>
                    {item.badgeActive && <Badge color={'green'} />}
                  </Span>
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
                    <Span key={index} style={{ marginVertical: 10, marginHorizontal: 2, width: '70%', height: 40, justifyContent: 'center', paddingHorizontal: 8, backgroundColor: item.to === to ? '#f8f8f8' : '#fff', borderWidth: 1, alignSelf: item.to !== to ? 'flex-end' : 'flex-start', borderRadius: 10, borderWidth: 'silver' }} >
                      {item.userId === tokenSocket.current && <Text style={{ fontSize: 9, paddingRight: 3, color: 'silver' }} >شما</Text>}
                      <Text >{item.message}</Text>
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
        {(tokenValue.current.isAdmin !== 1) && <Span mt='auto' >
          <InputBottom handlePvChat={handlePvChat} setpvMessage={setpvMessage} pvMessage={pvMessage}></InputBottom>
        </Span>}
      </View>
    </Container2>
  )
}
export default SocketIo