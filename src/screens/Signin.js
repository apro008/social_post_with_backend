import React from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useFormInput} from '../hooks';
import {API} from '../../config.js';
import {setUser} from '../store/userSlice.js';

const Login = props => {
  // const [error, setError] = useState<string>('');

  const email = useFormInput('');
  const password = useFormInput('');
  const dispatch = useDispatch();

  const onLogin = () => {
    // console.log({email, password});
    // fetch(API + '/login/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: 'email.value',
    //     password: password.value,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(user => {
    //     console.log('debug: user: ', user);
    //   })
    //   .catch(err => {
    //     console.log('debug: err: ', err);
    //   });
    dispatch(setUser({email: email.value, password: password.value}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          {...email}
          style={styles.input}
          placeholder={'Enter Email'}
          returnKeyType={'next'}
        />
        <TextInput
          {...password}
          style={styles.input}
          placeholder={'Enter Password'}
          returnKeyType={'done'}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onLogin} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    marginRight: 40,
    marginTop: 20,
  },
  button: {
    height: 40,
    borderWidth: 1,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
