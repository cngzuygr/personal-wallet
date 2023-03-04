import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Box = ({ name, icon }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<MaterialCommunityIcons name={icon} size={32} color="#14213d" />
			<View style={{ flex: 1 }}>
				<Text style={styles.text}>{name}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Box;

const styles = StyleSheet.create({
	container: {
		height: 80,
		width: (width - 30) / 2,
		flexDirection: "row",
		padding: 10,
		// justifyContent: "space-around",
		alignItems: "center",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#14213d",
		marginRight: 10,
	},
	text: { fontSize: 16, marginTop: 10, color: "#14213d", textAlign: "center" },
});
