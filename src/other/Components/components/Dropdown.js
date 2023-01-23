import React from "react";
import { Pressable } from "react-native";

const Dropdown = (props) => {
  const { value, setdropdownValue, setclientX, setclientY, root, clientY, clientX, shownDropdown, setshownDropdown, children } = props

  return (
    <Pressable onPress={(e) => { setshownDropdown(true);if (!root) { setclientX(e.clientX - 10); setclientY(e.clientY); setdropdownValue(value) } }}
      style={root ? { display: shownDropdown ? "flex" : 'none', position: 'absolute', zIndex: 1000, top: clientY, left: clientX, borderWidth: 1, borderRadius: 3, padding: 5, backgroundColor: '#eee' } : { width: '100%', height: '100%' }} >
      {children}
    </Pressable>
  );
}

export default Dropdown


