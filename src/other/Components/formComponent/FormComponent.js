import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Platform } from 'react-native';
import _icon from 'react-native-vector-icons/dist/FontAwesome';
import Micon from 'react-native-vector-icons/dist/MaterialIcons';
import setStyleRef from '../classToStyle/setClassToStyle';
import { Press, Span } from '../Html';



export const Textarea = React.forwardRef((props, ref) => {
  const { h = 100 } = props;
  return (<TextInput
    ref={e => { if (e) { e.className = Array.isArray(props.class) ? (e.className + ' ' + props.class[0] + ' ' + props.class[1]) : (e.className + ' ' + props.class); }; ref && ref(e); }}
    onPressIn={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true}
    multiline {...props} style={[{ padding: 15, textAlign: 'right', marginHorizontal: 1.5, borderWidth: 1, borderRadius: 5, color: '#222', height: h }, props.className, props.style]} />);
});



export const Input = React.forwardRef((props, ref) => {
  const { dropdown, onFocus, $input, textId, fg, f, ta, dr = 'rtl', as, fs, p, pt, pb, pl, pr, pv, ph, h = 50, w, m, mt, mb, ml, mr, mv, mh, color = '#222', bgcolor = '#fff', border = [.3], pColor = '#777', } = props;
  return (
    <View
      style={[{
        padding: p, paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr, paddingVertical: pv, paddingHorizontal: ph,
        textAlign: ta,
        margin: m, marginTop: mt, marginBottom: mb, marginRight: mr, marginLeft: ml, marginHorizontal: mh, marginVertical: mv, color,
        borderWidth: border[0], borderColor: border[1], fontSize: fs, alignSelf: as, flexGrow: fg, flex: f, height: h, width: w,
        flexDirection: dr === 'rtl' ? 'row' : 'row-reverse', position: 'relative',
        borderRadius: 5,
        backgroundColor: bgcolor,
      }, props.style]}
      ref={e => { if (e) { e.className = Array.isArray(props.class) ? (e.className + ' ' + props.class[0] + ' ' + props.class[1]) : (e.className + ' ' + props.class); }; ref && ref(e); }}>
      <View style={{ top: 19, right: 60, position: 'absolute' }} >

        {dropdown}
      </View>

      <TextInput
        onFocus={onFocus}
        ref={(e) => {

          $input?.set(textId, e);

        }
        }
        placeholderTextColor={pColor} onPress={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true} placeholder={props.p} {...props} style={[{ width: '84%', flexGrow: 1, textAlign: "right", fontSize: fs, padding: 8, paddingRight: 10, height: '100%', color: props.color ? props.color : '#222', }, props.className, props.textStyle]} />
      {props.icon && <View onStartShouldSetResponder={props.iconPress} style={[{ width: '15%', maxWidth: 70, textAlign: 'center', borderColor: border[1], height: '100%', justifyContent: 'center', alignItems: 'center' }, props.textStyle, dr === 'rtl' ? { borderRightWidth: border[0] } : { borderLeftWidth: border[0] }]}><_icon style={props.iconPress && Platform.OS === 'web' && { cursor: 'pointer' }} name={props.icon} size={props.iconSize ? props.iconSize : 22} color={props.iconColor ? props.iconColor : "#333"} /></View>}
      {props.m_icon && <View onStartShouldSetResponder={props.iconPress} style={[{ width: '15%', maxWidth: 70, textAlign: 'center', borderColor: border[1], height: '100%', justifyContent: 'center', alignItems: 'center' }, props.textStyle, dr === 'rtl' ? { borderRightWidth: border[0] } : { borderLeftWidth: border[0] }]}><Micon style={props.iconPress && Platform.OS === 'web' && { cursor: 'pointer' }} name={props.m_icon} size={props.iconSize ? props.iconSize : 22} color={props.iconColor ? props.iconColor : "#333"} /></View>}
    </View>);
});


export const CheckBox = (props) => {
  const { alignSelf, m, mt, mb, ml, mr, mv, mh, border = [1] } = props;
  return <_icon checked={props.show} onPress={() => props.setshow && props.setshow(!props.show)} name={"check"} size={18.5} color="#fff" {...props}
    style={[{ width: 20, height: 20, borderWidth: border[0], borderColor: border[1], textAlign: 'center', margin: m, alignSelf, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh, marginVertical: mv }, { backgroundColor: props.show === false ? '#fff' : "#2c1" }, props.style]} />;
};

export const CheckBoxRadius = (p) => {
  const { itemName, setshow, show, alignSelf, m, mt, mb, ml, mr, mv, mh, border = [1], onClick } = p;

  const ref = useRef();
  //! const show = useRef({show:false});
  //!or
  const _show = useRef({ name: itemName });
  const refshow = _show.current

  useEffect(() => {
    ref.current.setNativeProps({ style: { backgroundColor: "#fff" } })
    refshow.show = false
    p.refObject(refshow)
  }, [show])

  useEffect(() => {
    if (itemName == 'همه') {
      ref.current.setNativeProps({ style: { backgroundColor: "#2c1" } })
      refshow.show = true
    }
  }, [])


  return (
    <View
      ref={ref} style={[{ backgroundColor: 'white', width: 20, height: 20, borderRadius: 50, borderWidth: border[0], borderColor: border[1], margin: m, alignSelf, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginHorizontal: mh, marginVertical: mv }, p.style]}>
      <_icon onPress={() => {
        onClick && onClick()
        setshow(!show)
        setTimeout(() => {
          ref.current.setNativeProps({ style: { backgroundColor: '#2c1' } })
          refshow.show = true
          p.refObject(refshow)
        }, 200);
      }}
        name={"check"} size={18} color="#fff" {...p}
        style={[{ borderRadius: 50, width: 20, height: 20, textAlign: 'center', },]} />
    </View>)
};