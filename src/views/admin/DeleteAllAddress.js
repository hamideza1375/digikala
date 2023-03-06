import React from 'react'
import { Text, View, FlatList, Platform } from 'react-native';
import { Button } from '../../other/Components/Html';
import spacePrice from '../../other/utils/spacePrice';
import CardDeleteAllAddress from './components/deleteAllAddress/CardDeleteallAddress';

const DeleteAllAddress = (p) => {

	// p._admin.getAllAddress()
	// p._admin.totalAllAddress()
	const deleteAllAddress = () => p._admin.deleteAllAddress()

	return (
		<View style={[{ flexGrow: 1, width: '100%', backgroundColor: '#eee' },]} >
			{p.allAddress.length ? <Button w='90%' mb={10} alignSelf='center' bgcolor='red' onPress={() => deleteAllAddress()} >حذف همه</Button> : <></>}

			{p.showBtn && <Button alignSelf='center' outline w='90%' bgcolor='silver' color='#999' onPress={() => { p.setshowBtn(!p.showBtn) }} >جمع ماه گذشته از {p.oldPrice?.split("=") && p.oldPrice.split("=")[0]} = {p.oldPrice?.split("=") && spacePrice(p.oldPrice.split("=")[1])} تومان</Button>}
			<Button alignSelf='center' outline bgcolor='black' w={'90%'} border={[0, '#999']} onPress={() => { p.setshowBtn(!p.showBtn) }} > جمع از تاریخ {p.fromMomemt} = {spacePrice(p.totalPrices)} تومان</Button>

			{
				p.allAddress?.length ?

					<FlatList
						initialNumToRender={3}
						keyExtractor={(f) => f && f._id.toString()}
						data={p.allAddress}
						contentContainerStyle={{ paddingBottom: 55, }}
						renderItem={({ item, index }) => (
							<View key={item._id} style={{
								alignSelf: 'center',
								borderWidth: .3,
								borderColor: '#888',
								width: '90%',
								marginVertical: 15,
								paddingHorizontal: 15,
								paddingTop: 15,
								backgroundColor: '#f5f5f5',
								borderRadius: 4
							}}>
								<CardDeleteAllAddress {...p} />
							</View>
						)} />
					: <></>
			}
		</View>
	)
}

export default DeleteAllAddress