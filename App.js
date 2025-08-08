import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, ActivityIndicator, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

// --- 🚨 IMPORTANT 🚨 ---
// You MUST replace this placeholder with the live URL of your DEPLOYED gmp_user web application.
// For local testing on an Android emulator, you can use 'http://10.0.2.2:PORT'
// where PORT is the port your web app is running on (e.g., 3000).
const WEBSITE_URL = 'https://gmp-user-ui41.vercel.app/login';
// --------------------

// This component will show a loading spinner while the website is loading.
const LoadingSpinner = () => (
    <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading Grievance Portal...</Text>
    </View>
);

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <WebView
                source={{ uri: WEBSITE_URL }}
                style={styles.webview}
                // Enable JavaScript and local storage for your web app to function correctly
                javaScriptEnabled={true}
                domStorageEnabled={true}
                // Show a loading spinner while the page is loading
                startInLoadingState={true}
                renderLoading={() => <LoadingSpinner />}
                // Handles errors like if the website URL is wrong or the server is down
                renderError={(errorName) => (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>Failed to load page</Text>
                        <Text>Please check your connection or try again later.</Text>
                        <Text style={styles.errorDetails}>{errorName}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    webview: {
        flex: 1,
    },
    spinnerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    errorDetails: {
        marginTop: 15,
        fontStyle: 'italic',
        color: '#888',
    }
});

export default App;