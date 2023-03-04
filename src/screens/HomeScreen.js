import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBox from "../components/StatusBox";
import Box from "../components/Box";

const HomeScreen = () => {
	const { width } = Dimensions.get("window");
	const username = "Cengiz Uygur";

	const account = [
		{ name: "Aylık", income: "2000", outcome: "1000" },
		{ name: "Birikim", income: "2000", outcome: "1000" },
	];
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Text>Hoşgeldin, {username}</Text>
				<View style={{ height: 150, width: width - 10, marginTop: 20 }}>
					<ScrollView
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
					>
						{account.map((e, _i) => (
							<StatusBox key={_i} account={e} />
						))}
					</ScrollView>
				</View>
				<View
					style={{
						width: width - 10,
						marginTop: 10,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					<Box name={"Gelir"} icon="bank-plus" />
					<Box name={"Harcama"} icon="bank-minus" />
				</View>
				<View
					style={{
						// height: 100,
						width: width - 10,
						marginTop: 10,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					<Box name={"Birikim"} icon="bank" />
					<Box name={"Borç"} icon="bank-minus" />
				</View>
				<View style={{}}></View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "#FFF",
	},
});
