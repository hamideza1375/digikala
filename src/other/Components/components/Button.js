import React from 'react';
import { Platform, Text, TouchableOpacity } from 'react-native';
import { P } from '../Html';

const _Button = React.forwardRef((props, ref) => {

  let stl,
    stl2
  if (Platform.OS === 'web') stl = props.webStyle
  else if (Platform.OS !== 'web') stl = props.nativeStyle

  if (Platform.OS === 'ios') stl2 = props.iosStyle
  else if (Platform.OS === 'android') stl2 = props.androidStyle


  return (
    <TouchableOpacity
      ref={e => { if (e) { e.className = Array.isArray(props.class) ? (e.className + ' ' + props.class[0] + ' ' + props.class[1]) : (e.className + ' ' + props.class); }; ref && ref(e); }}
      activeOpacity={0.8} onPress={props.onClick} {...props} style={[{
        paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, textAlign: 'center',
        alignSelf: props.as,
      }, props.style, stl, stl2]}><P style={[{ width: '100%', textAlign: 'center' }, props.textStyle]}>{props.children}</P></TouchableOpacity>);

})

const Button = React.forwardRef(({textStyle, maxw,minw,maxh,minh,as, style, outline, fs = 15, p=5, pt, pb, pl, pr, pv, ph, h = 40, w, m, mt, mb, ml, mr, mv, mh, color, bgcolor, border = [], fg, f, ...props }, ref) => {

  return (
    !outline ?
      <_Button
        ref={ref}
        {...props}
        style={[{maxWidth:maxw,minWidth:minw,maxHeight:maxh,minHeight:minh},
          {
            backgroundColor: (bgcolor == 'red') && '#f33' ||
              (!bgcolor) && '#0099ff' ||
              (bgcolor == 'blue') && '#22f' ||
              (bgcolor == 'green') && '#292' ||
              (bgcolor == 'yellow') && '#fa0' ||
              (bgcolor == 'black') && '#555' ||
              bgcolor
          },
          !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
          { color }, bgcolor == 'white' ? {} :
            {
              borderColor: !border[1] && ((!bgcolor) ? '#0091EA' :
                bgcolor == 'yellow' ? '#ca0' : bgcolor) || border[1]
            }, {
            borderWidth: border[0] ? border[0] : 1,
            height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
            alignSelf: as, flexGrow: fg, flex: f
          }, style
        ]}

        textStyle={[
          !color && (bgcolor == 'white' ?
            { color: '#555' } :
            { color: 'white' }) ||
          { color: color },
          {
            paddingHorizontal: ph, paddingVertical: pv, fontSize: fs, padding: p,
            paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr,
          }, textStyle
        ]} />
      :
      <_Button
        ref={ref}
        {...props}
        style={[
          ,
          bgcolor == 'white' ? {} :
            { borderColor: !border[1] && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff') || border[1] },
          {
            borderWidth: border[0] ? border[0] : 1,
            height: h, width: w, margin: m, marginTop: mt, marginBottom: mb, marginLeft: ml, marginRight: mr, marginVertical: mv, marginHorizontal: mh,
          },
          style
        ]}

        textStyle={[color &&
          { color: color } ||
          !color && bgcolor &&
          { color: bgcolor } ||
          { color: '#3399ff' },
        {
          paddingHorizontal: ph, paddingVertical: pv, fontSize: fs, padding: p,
          paddingTop: pt, paddingBottom: pb, paddingLeft: pl, paddingRight: pr
        }, textStyle]} />
  );
});

export default Button