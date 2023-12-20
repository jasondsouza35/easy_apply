import { useState } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Flatlist } 
from 'react-native';

import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput} 
            value=""
            onChange={() => {}}
            placeholder='What are you looking for?'
            placeholderTextColor="#d3d3d3"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onClick={()=>{}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <Flatlist />
      </View>
    </View>
  )
}

export default Welcome