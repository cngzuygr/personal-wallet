import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";

export default function App() {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size={"large"} color={"#ff0000"} />
			</View>
		);
	}

	return <Navigation />;
}
