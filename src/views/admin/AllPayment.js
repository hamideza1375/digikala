import React from 'react'
import { View } from 'react-native';
import { Container, Input, FlatList } from '../../other/Components/Html';
import CartAllPayment from './components/allPayment/CardAllPayment';

const addressMap = new Map()

const Address = (p) => {
	p._admin.getAllPaymentSuccessFalseAndTrue()

	return (
		<Container>
			<FlatList
				data={p.allPaymentSuccessFalseAndTrue}
				ccStyle={{ paddingBottom: 55, }}
				renderItem={({ item, index }) => (
					<View key={item._id} style={{
						alignSelf: 'center',
						borderWidth: .3,
						borderColor: '#888',
						width: '90%',
						marginVertical: 15,
						padding: 15,
						backgroundColor: '#f5f5f5',
						borderRadius: 4
					}}>
						<CartAllPayment {...p} addressMap={addressMap} item={item} />
					</View>
				)} />
		</Container>
	)
}

export default Address