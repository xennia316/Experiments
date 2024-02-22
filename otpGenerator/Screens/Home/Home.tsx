import React, { useState } from "react";
import {
	ImageBackground,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Switch,
} from "react-native";
import styles from "./Home.style";
import { Clipboard } from "react-native";
import { KeyboardAvoidingView } from "react-native";

const bg = require("../../assets/images/bg.png");

const Home = () => {
	const [otp, setOtp] = useState("OTP123");
	const [userInput, setUserInput] = useState("");
	const [isValid, setIsValid] = useState(null);
	// State to control OTP box visibility
	const [showOtpBox, setShowOtpBox] = useState(true);

	// Function to generate a random OTP
	const generateOtp = () => {
		let generatedOtp = "";
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";

		for (let i = 0; i < 6; i++) {
			generatedOtp += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}

		// Set the generated OTP and reset the validity status
		setOtp(generatedOtp);
		setIsValid(null);
		// Show the OTP box after generating OTP
		setShowOtpBox(true);
	};

	// Function to validate the entered OTP
	const validateOtp = () => {
		if (userInput === otp) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	};
	const toggleSwitch = () => setShowOtpBox((previousState) => !previousState);
	return (
		<ImageBackground imageStyle={styles.bg} source={bg} style={styles.body}>
			<View style={styles.control}>
				{/* <TouchableOpacity
					style={styles.btn}
					onPress={() => {
						setShowOtpBox(true);
					}}
				>
					<Text style={styles.btnText}>Generate OTP</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						setShowOtpBox(false);
					}}
				>
					<Text style={styles.btnText}>Verify OTP</Text>
				</TouchableOpacity> */}
				<Text style={styles.btnText}>
					Toggle switch to {showOtpBox ? "Verify" : "Generate"} OTP
				</Text>
				<Switch
					trackColor={{ false: "#5C5C5C", true: "#f4f4f4" }}
					thumbColor={showOtpBox ? "#333c61" : "#f4f4f4"}
					ios_backgroundColor="#3e3e3e"
					onValueChange={toggleSwitch}
					value={showOtpBox}
				/>
			</View>
			<View style={styles.main}>
				{showOtpBox && (
					<>
						<Text style={styles.otpHeading}>Generated OTP code </Text>
						<Text style={styles.otp}>{otp}</Text>
						<TouchableOpacity onPress={() => Clipboard.setString(otp)}>
							<Text style={styles.warning}>click to copy this code</Text>
						</TouchableOpacity>
					</>
				)}
				{!showOtpBox && (
					<>
						<Text style={styles.otpHeading}>Enter Generated OTP code </Text>
						<TextInput
							style={styles.otp}
							placeholder="Enter OTP"
							value={userInput}
							onChangeText={setUserInput}
						/>
						{isValid === true && (
							<Text style={styles.validText}>Valid OTP</Text>
						)}
						{isValid === false && (
							<Text style={styles.invalidText}>Invalid OTP</Text>
						)}
					</>
				)}
			</View>
			<View style={styles.bottom}>
				<TouchableOpacity
					onPress={() => {
						showOtpBox ? generateOtp() : validateOtp();
					}}
					style={styles.btnLast}
				>
					<Text style={styles.btnLastText}>
						{showOtpBox ? "Generate" : "Submit"} OTP
					</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
};

export default Home;
