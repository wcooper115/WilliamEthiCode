import { View, ScrollView, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Result = ({ route, navigation }) => {
    const aiResponse = route.params?.aiResponse || 'No response available';

    return (
        <View style={styles.container}>
            <Text style={styles.boldTextTitle}>AI Generated Response</Text>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.boldText}>Your result:</Text>
                <TextInput 
                    placeholder='AI response...' 
                    style={styles.largeInput}
                    multiline={true}
                    value={aiResponse}
                    editable={false}
                />
            </ScrollView>

            <TouchableOpacity 
                style={styles.backButton} 
                onPress={() => navigation.goBack()}
            >
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 2
    },
    boldTextTitle: {
        fontWeight: 'bold',
        fontSize: 23,
        marginBottom: 20
    },
    container: {
        flex: 1,
        padding: 40
    },
    input: {
        height: 40,
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
    },
    largeInput: {
        height: 230,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        padding: 10,
    },
    button: {
        backgroundColor: 'black',
        width: '80%',
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallButton: {
        backgroundColor: 'black',
        width: '28%',
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
});

export default Result;
