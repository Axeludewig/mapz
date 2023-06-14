import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

const initialParkingSpots = [
	{
		id: 1,
		title: "Parking Spot 1",
		coordinate: {
			latitude: 19.692125045375704,
			longitude: -101.15567799782895,
		},
		available: true,
	},
	// Add more parking spots here
	{
		id: 2,
		title: "Parking Spot 2",
		coordinate: {
			latitude: 19.6922,
			longitude: -101.1556,
		},
		available: true,
	},
	{
		id: 3,
		title: "Parking Spot 3",
		coordinate: {
			latitude: 19.6923,
			longitude: -101.1555,
		},
		available: true,
	},
	{
		id: 4,
		title: "Parking Spot 4",
		coordinate: {
			latitude: 19.6924,
			longitude: -101.1554,
		},
		available: true,
	},
	{
		id: 5,
		title: "Parking Spot 5",
		coordinate: {
			latitude: 19.6925,
			longitude: -101.1553,
		},
		available: true,
	},
	{
		id: 6,
		title: "Parking Spot 6",
		coordinate: {
			latitude: 19.6926,
			longitude: -101.1552,
		},
		available: true,
	},
	{
		id: 7,
		title: "Parking Spot 7",
		coordinate: {
			latitude: 19.6927,
			longitude: -101.1551,
		},
		available: true,
	},
	{
		id: 8,
		title: "Parking Spot 8",
		coordinate: {
			latitude: 19.6928,
			longitude: -101.155,
		},
		available: true,
	},
	{
		id: 9,
		title: "Parking Spot 9",
		coordinate: {
			latitude: 19.6929,
			longitude: -101.1549,
		},
		available: true,
	},
	{
		id: 10,
		title: "Parking Spot 10",
		coordinate: {
			latitude: 19.693,
			longitude: -101.1548,
		},
		available: true,
	},
];

const App = () => {
	const [parkingSpots, setParkingSpots] = useState(initialParkingSpots);
	const [selectedMarker, setSelectedMarker] = useState(null);
	const [mapKey, setMapKey] = useState(1); // Add a state for the map key

	const toggleAvailability = (id) => {
		setParkingSpots((prevSpots) =>
			prevSpots.map((spot) =>
				spot.id === id ? { ...spot, available: !spot.available } : spot
			)
		);
		setMapKey((prevKey) => prevKey + 1); // Update the map key to trigger re-render
	};

	return (
		<View style={styles.container}>
			<MapView
				key={mapKey}
				style={styles.map}
				initialRegion={{
					latitude: 19.692125045375704,
					longitude: -101.15567799782895,
					latitudeDelta: 0.0005,
					longitudeDelta: 0.0005,
				}}
			>
				{parkingSpots.map((spot) => (
					<Marker
						key={spot.id}
						coordinate={spot.coordinate}
						title={spot.title}
						pinColor={spot.available ? "green" : "red"} // Update pinColor based on spot availability
						onPress={() => {
							setSelectedMarker(spot);
							toggleAvailability(spot.id);
						}}
					/>
				))}
			</MapView>
			{selectedMarker && (
				<View style={styles.markerInfo}>
					<Text style={styles.markerTitle}>
						{selectedMarker.title}
					</Text>
					<Text style={styles.markerStatus}>
						{selectedMarker.available ? "Available" : "Taken"}
					</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		width: "100%",
		height: "100%",
	},
	markerInfo: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		paddingVertical: 16,
		paddingHorizontal: 32,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
	},
	markerTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 4,
	},
	markerStatus: {
		fontSize: 16,
		color: "red",
	},
});

export default App;