import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	body: {
		width: "100%",
		height: "100%",
		backgroundColor: "#edf0f4",
		flexDirection: "column",
		justifyContent: "space-between",
		paddingVertical: 12,
	},
	control: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		height: "20%",
		alignItems: "center",
		backgroundColor: "white",
		width: "90%",
		alignSelf: "center",
		borderRadius: 16,
	},

	btn: {
		height: 48,
		width: 98,
	},

	btnText: {
		fontSize: 18,
		fontWeight: "500",
		color: "black",
		width: "60%",
	},

	main: {
		height: "50%",
		// backgroundColor: "green",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: 18,
	},

	otp: {
		fontSize: 24,
		textAlign: "center",
		width: "90%",
		borderColor: "#353d65",
		borderWidth: 1,
		paddingVertical: 12,
		borderRadius: 16,
		// opacity: 0.,
	},

	otpHeading: {
		fontSize: 28,
		width: "60%",
		textAlign: "center",
		color: "#353d65",
	},

	bottom: {
		height: "20%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	btnLast: {
		paddingVertical: 18,
		backgroundColor: "#94adbd",
		width: "90%",
		borderRadius: 16,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor:
	},
	btnLastText: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
		color: "white",
	},
	warning: {
		fontSize: 12,
		fontWeight: "300",
		fontStyle: "italic",
		color: "#4f5679",
	},

	bg: {
		opacity: 0.1,
	},

	validText: {
		fontSize: 20,
		color: "green",
		marginTop: 20,
	},
	invalidText: {
		fontSize: 20,
		color: "red",
		marginTop: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#007AFF",
		paddingHorizontal: 30,
		paddingVertical: 15,
		borderRadius: 5,
		marginTop: 20,
	},
	buttonText: {
		color: "#FFF",
		fontSize: 18,
	},
	input: {
		borderWidth: 1,
		borderColor: "#007AFF",
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginTop: 20,
		width: "100%",
	},

	scrollView: {},
});

export default styles;
