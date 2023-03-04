import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const StatusBox = ({ account }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>{account.name}</Text>
			<Text style={styles.amountText}>Gelir: {account.income}$</Text>
			<Text style={styles.amountText}>Gider: {account.outcome}$</Text>
		</View>
	);
};

export default StatusBox;

const styles = StyleSheet.create({
	container: {
		width: width - 20,
		// height: 150,
		marginRight: 10,
		alignSelf: "center",
		padding: 10,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#14213d",
	},
	header: {
		fontSize: 24,
	},
	amountText: {
		marginTop: 5,
		fontSize: 18,
		fontStyle: "italic",
	},
});
