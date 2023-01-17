import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Badge = ({ bgcolor, color='#fff', text, top, left, right, bottom, style,border=[0], scale=1,w=18,h=18 }) => {
    return (
        <View style={[styles.viewBadge,{width:w,height:h,borderWidth:border[0],borderColor:border[1]}, {
            backgroundColor: bgcolor ?
                (bgcolor == 'red') && '#f33' ||
                (bgcolor == 'blue') && '#22f' ||
                (bgcolor == 'green') && '#292' ||
                (bgcolor == 'yellow') && '#fa3' ||
                (bgcolor == 'black') && '#555' ||
                bgcolor
                :
                bgcolor ? bgcolor : "#f33",
        },
        { top: top ? top : -3, left, right, bottom, transform:[{scale}] }, style]} >
            <Text style={[styles.textBadge,{color}]} >
                {text}
            </Text>
        </View>
    )
}

export default Badge
const styles = StyleSheet.create({
    textBadge: {
        color: 'white',
        fontSize: 12.2,
        fontWeight: '900',
    },
    viewBadge: {
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
    },
})