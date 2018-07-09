import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    KeyboardAvoidingView,
    Keyboard,
    Image
} from 'react-native';
class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        return (
            <TouchableWithoutFeedback
                style={styles.container}
                onPress={Keyboard.dismiss}
            >
                <View style={styles.loginForm}>
                    <Image
                        style={styles.logo}
                        source={require('../img/logo.png')}
                    />
                    <KeyboardAvoidingView
                        behavior='padding'
                        style={styles.container}
                    >
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter your username'
                            placeholderTextColor='#909390'
                            keyboardType='email-address'
                            returnKeyType='next'
                            underlineColorAndroid='#B9BDB9'
                            autoCorrect={false}
                            onChangeText={(text) => this.props.onChangeUsername(text)}
                            onSubmitEditing={() => this.refs.txtPass.focus()}
                            value={this.props.username}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter password'
                            placeholderTextColor='#909390'
                            secureTextEntry={true}
                            keyboardType='visible-password'
                            multiline={false}
                            returnKeyType='done'
                            underlineColorAndroid='#B9BDB9'
                            onChangeText={(text) => this.props.onChangePassword(text)}
                            value={this.props.password}
                            autoCorrect={false}
                            ref={'txtPass'}
                        />
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={this.props.onLoginPress}
                        >
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.forgetButton}
                            onPress={this.props.onForgetPress}
                        >
                            <Text style={[styles.loginText, { fontWeight: 'bold' }, { textDecorationLine: 'underline' }]}>Forgot password?</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtNotice}
                        > {this.props.notice} </Text>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>

        );
    }
}
const window = Dimensions.get('window')
const windowWidth = Math.min(window.width, window.height)
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#676967',
        height: windowWidth * 0.4,
        width: windowWidth
    },
    textInput: {
        height: 50,
        width: windowWidth * 0.9,
        backgroundColor: '#B9BDB9',
        paddingHorizontal: 10,
        marginBottom: 8,
        borderRadius: 5,
        paddingVertical: 10
    },
    loginText: {
        fontSize: 20,
        borderRadius: 3,
        color: '#DE9BB4',
        marginBottom: 8,
        fontStyle: 'normal',
        fontFamily: 'script'
    },
    loginButton: {
        height: 50,
        width: windowWidth * 0.9,
        marginTop: 10,
        backgroundColor: '#6775A9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    forgetButton: {
        width: windowWidth * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtNotice: {
        fontSize: 20,
        color: '#D7C0D0',
    },
    logo: {
        width: windowWidth * 0.5,
        height: windowWidth * 0.5,
        marginBottom: 60
    }
})
export default LoginForm;