import { Ionicons } from '@expo/vector-icons';
import { Text,View , TouchableOpacity,SafeAreaView} from 'react-native';
import styles from './styles';
import React from 'react';


export default function Details({ route, navigation }) {
const { title, desc } = route.params;
return (
    <SafeAreaView style={styles.detailsContainer}>
      <Text style={styles.detailsHeading}>Details</Text>
      <Text style={styles.detailsText}>Title: {title}</Text>
      <Text style={styles.detailsDesc}>Description: {desc}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.detailsBtn}>
        <Text style={styles.detailsButtonText}>Go Home <Ionicons name="home" size={24} color="white " /></Text>
      </TouchableOpacity>
    </SafeAreaView>
    );
}


