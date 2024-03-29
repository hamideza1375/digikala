import React, { useEffect } from "react";
import { Modal as _Modal, Platform, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Scroll } from "../Html";


export default function Modal({ style, children, setshow, show, onClick, onHidden }) {

  // useEffect(() => {
  //   if (onHidden && !show) onHidden()
  // }, [show])


  return (
    <Pressable onPress={Platform.OS === 'web' ? onClick : () => { }} style={{ height: 0 }}>
      <_Modal onDismiss={onHidden} supportedOrientations={['portrait', 'landscape']}
        animationType="fade" transparent={true} visible={show}>
        <ScrollView onTouchMove={Platform.OS !== 'web' ? onClick : () => { }} contentContainerStyle={[styles.centeredView, { backgroundColor: '#6669' }]}>
          <View style={[styles.modalView, style]}>
              <Icon onPress={() => setshow(false)} name={"highlight-remove"} size={22} color="#f55" style={{ position: 'absolute', left: 9, top: 9, zIndex: 111 }} />
            <Scroll w='100%' fg={1}>
              {children}
            </Scroll>
          </View>
        </ScrollView>
      </_Modal>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: .8,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 2
    },
  },
});