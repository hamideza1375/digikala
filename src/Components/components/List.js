import React, { useRef, useEffect, useState } from "react";
import { Animated, StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native";
import A_icon from 'react-native-vector-icons/dist/AntDesign';
import M_icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function App({ br=3,w,h,sh = {}, m_icon2, a_icon2, m_icon, a_icon, sethidden, hidden, onPress, style, header, body, bodyRow, color, bgcolor, icon, icon2, iconSize, fontSize, iconPress, icon2Press }) {

  const [show, setshow] = useState(true)
  const [mIcon, setmIcon] = useState(m_icon)
  const ref = useRef()

  useEffect(() => {
    ref?.current && ref.current.setNativeProps({ style: { height: 0 } })

    setTimeout(() => {
    setshow(!show)
    if (!iconPress && m_icon === 'arrow-left') setmIcon('arrow-left')
    }, 200);

  }, [hidden])


  return (
    <>
      <Pressable
        onPressIn={() => { sethidden(!hidden); setTimeout(() => { sethidden(!hidden) }, 1) }}
        onPress={() => {
          setTimeout(() => {
            if (!iconPress && m_icon === 'arrow-left') show?setmIcon('arrow-left'):setmIcon('arrow-drop-down');
          }, 210);
          () => {
            sethidden(!hidden); setTimeout(() => { sethidden(!hidden) }, 2)
          };
          setTimeout(() => {
            ref.current && ref.current.setNativeProps({ style: { height: !show ? null : 0 } })
            setshow(!show)
          }, 100);

        }}
        // onPressIn={onPress}
        activeOpacity={1}
        style={[styles.headView,
        {
          backgroundColor:
            !bgcolor && "#0091EA" ||
            bgcolor == "blue" && "#22f" ||
            bgcolor == "red" && "#f33" ||
            bgcolor == "green" && "#292" ||
            bgcolor == "silver" && "#999" ||
            bgcolor == "black" && "#555" ||
            bgcolor == "yellow" && "orange" ||
            bgcolor && bgcolor
        }
          , { borderRadius: br,height:h,width:w, shadowRadius: sh.r, shadowOpacity: sh.o, shadowColor: sh.c, shadowOffset: sh.of, }, style]}>
        <Text
          style={[styles.headText, { color: color && color || 'white' }, { fontSize: fontSize ? fontSize : 17 }]}>{header}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {a_icon2 && <A_icon onPress={icon2Press} name={a_icon2} color={color && color || 'white'} size={iconSize ? iconSize : 24} style={styles.headText} />}
          {m_icon2 && <M_icon onPress={icon2Press} name={m_icon2} color={color && color || 'white'} size={iconSize ? iconSize : 24} style={styles.headText} />}
          {icon2 && <Icon onPress={icon2Press} name={icon2} color={color && color || 'white'} size={iconSize ? iconSize : 24} style={styles.headText} />}
          {a_icon && <A_icon onPress={iconPress} name={a_icon} color={color && color || 'white'} size={iconSize ? iconSize : 24} style={styles.headText} />}
          {m_icon && <M_icon onPress={iconPress} name={mIcon} color={color && color || 'white'} size={iconSize ? iconSize : 24} style={styles.headText} />}
          {icon && <Icon onPress={iconPress} name={icon} color={color && color || 'white'} size={iconSize ? iconSize : 24} style={styles.headText} />}
        </View>
      </Pressable>
      <Animated.View ref={ref} style={{ overflow: "hidden" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.subView}>
          {
            !bodyRow ?
              <Text style={styles.subText}>
                {body}
              </Text>
              :
              bodyRow
          }
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}




const styles = StyleSheet.create({
  subView: {
    padding: 5,
    width: "100%",
    borderBottomWidth: .4,
  },
  subText: {
    fontSize: 17,
    fontWeight: '100',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  headView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headText: {
    padding: 10,
    paddingVertical: 14,
  },
});



// shadowColor: '#55f',
// shadowOffset:3,
// shadowOpacity: 15,
// shadowRadius: 15,

// bgcolor == 'blue' && '#bfd' ||
// bgcolor == 'red' && '#fdb' ||
// bgcolor == 'green' && '#dfd' ||
// bgcolor == 'yellow' && '#ffb' 