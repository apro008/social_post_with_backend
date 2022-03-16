import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../Utlis/Colors.js';

import {useDispatch} from 'react-redux';

const Card = props => {
  const {post, userId, fromUserProfile} = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [showFullBody, setShowFullBody] = useState(false);

  //   const toggleLike = async () => {
  //     props.toggleLikeHandler(post._id, checkLike());
  //   };

  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.title}>{post.body ? post.body : ''}</Text>
            {post.body && post.body.length > 30 ? (
              <View>
                {showFullBody ? (
                  <Text style={styles.description}>
                    {post.body}
                    <Text
                      style={{color: Colors.brightBlue}}
                      onPress={() => setShowFullBody(prevState => !prevState)}>
                      Read Less
                    </Text>
                  </Text>
                ) : (
                  <Text style={styles.description}>
                    {post.body.substring(0, 30)}
                    <Text
                      style={{color: Colors.brightBlue}}
                      onPress={() => setShowFullBody(prevState => !prevState)}>
                      ...Read More
                    </Text>
                  </Text>
                )}
              </View>
            ) : (
              <Text style={styles.description}> {post.body} </Text>
            )}
          </View>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.socialBarContainer}>
            <View style={styles.socialBarSection}>
              <TouchableOpacity
                style={styles.socialBarButton}
                onPress={() => console.log(`toggleLike`)}>
                <Ionicons
                  name="md-thumbs-up"
                  size={24}
                  style={{marginRight: 5}}
                  color={true ? 'blue' : 'black'}
                />
                <Text style={styles.socialBarLabel}> `post.likes.length` </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    elevation: 15,
    shadowColor: Colors.lightBlue,

    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 5,
    paddingVertical: 20,
  },

  cardHeader: {
    paddingTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },

  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: '#888',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },

  socialBarContainer: {
    flexDirection: 'row',
  },
  socialBarSection: {
    marginRight: 20,
  },
  socialBarlabel: {
    marginLeft: 20,
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
