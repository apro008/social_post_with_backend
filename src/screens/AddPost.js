import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFormInput} from '../hooks';
import {submitPost, createPost} from '../store/PostSlice';

const AddPostScreen = props => {
  const body = useFormInput('');

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const {user} = useSelector(state => state.user);

  const clearForm = () => {
    body.onChangeText('');
    setIsLoading(false);
  };

  const validatePost = () => true;

  const create = async () => {
    setIsLoading(true);
    if (validatePost()) {
      try {
        const timeStamp = new Date().getTime().toString();
        const newPost = await submitPost({
          id: `${user.email}-${timeStamp}`,
          createdAt: timeStamp,
          lastModifiedAt: timeStamp,
          body: body.value,
          from: {
            id: user.id ?? 1,
            name: user.name ?? '',
            email: user.email ?? '',
            role: user.role ?? '',
            prId: user.prId ?? '',
          },
          reaction: 'like',
        });
        dispatch(createPost(newPost));
        clearForm();
        props.navigation.navigate('Home');
      } catch (err) {
        console.log('ERROR ', err);
      }
    }
    setIsLoading(false);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            {...body}
            style={styles.inputs}
            multiline
            maxLength={400}
            numberOfLines={10}
            placeholder="Enter your post here..."
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={create}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.loginText}>Post</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export const screenOptions = {
  headerTitle: 'Create Post',
};

const styles = StyleSheet.create({
  inputs: {
    width: '90%',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    marginLeft: 10,
  },
  container: {
    marginRight: 40,
    alignItems: 'flex-end',
  },
  buttonContainer: {
    height: 40,
    width: 80,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddPostScreen;
