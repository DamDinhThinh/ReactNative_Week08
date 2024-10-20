import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen_01() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>A premium online store for</Text>
        <Text style={styles.subtitle}>sporter and their stylish choice</Text>
      </View>
      <Image source={require('../assets/bifour_-removebg-preview.png')} style={styles.image} />
      <Text style={styles.shopName}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Screen_02')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  textContainer: {
    padding: 15, // Tăng padding để container to hơn
    marginBottom: 30, // Tăng khoảng cách giữa container và hình ảnh
  },
  subtitle: {
    fontSize: 20, // Tăng kích thước chữ
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold', // Làm chữ đậm để rõ ràng hơn
  },
  image: {
    width: '80%', // Đảm bảo hình ảnh vừa khít với phần tử sản phẩm
    height: '45%',
    resizeMode: 'contain', // Giúp ảnh không bị cắt mất
    marginBottom: 10,
  },
  
  shopName: {
    fontSize: 28, // Tăng kích thước chữ shop name
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 15, // Tăng kích thước padding của nút
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Tăng kích thước chữ trong nút
  },
});
