import React, { useRef } from "react";
import { Pressable } from "react-native";

const Dropdown = (props) => {
  const { top, dropdownWidth, setdropdownWidth, dropdownHeight, setdropdownHeight,dropdownBottom, setdropdownBottom, dropdownRight, setdropdownRight, value, setdropdownValue, setclientX, setclientY, root, clientY, clientX, shownDropdown, setshownDropdown, children } = props

  const ref = useRef()

  return (
    <Pressable ref={ref} onLayout={(e) => { setdropdownWidth(e.nativeEvent.layout.width); setdropdownHeight(e.nativeEvent.layout.height); if (e.nativeEvent.layout.width + e.nativeEvent.layout.x + 10 >= props.width) {ref.current.setNativeProps({ style: { right: 0, left:null } });setdropdownRight(true)} else {ref.current.setNativeProps({ style: { right: null } });setdropdownRight(false)};   if (e.nativeEvent.layout.height + e.nativeEvent.layout.y + 10 >= props.height) {ref.current.setNativeProps({ style: { bottom: 0, top:null } });setdropdownBottom(true)} else {ref.current.setNativeProps({ style: { bottom: null } });setdropdownBottom(false)} }} onPressIn={()=>{props.setshownDropdown(false)}} onPressOut={(e) => { setshownDropdown(true); if (!root) { setclientX(e.nativeEvent.pageX - 10); setclientY(!top ? e.nativeEvent.pageY : e.nativeEvent.pageY - e.nativeEvent.locationY); setdropdownValue(value); } }}
      style={root ? { display: shownDropdown ? "flex" : 'none', position: 'absolute', zIndex: 1000, top: dropdownBottom?null:clientY, left: dropdownRight?null: clientX, borderWidth: 1, borderRadius: 3, padding: 5, backgroundColor: '#eee' } : { width: '100%', height: '100%' }} >
      {children}
    </Pressable>
  );
}

export default Dropdown


