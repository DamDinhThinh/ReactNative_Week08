import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen_02() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>The world's Best Bike</Text>

      {/* Filter buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {/* Product grid */}
      <View style={styles.productGrid}>
        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('Screen_03')}
        >
          <Image source={require('../assets/bifour_-removebg-preview.png')} style={styles.image} />
          <Text>Pinarello</Text>
          <Text>$1800</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('Screen_03')}
        >
          <Image source={require('../assets/bifour_-removebg-preview.png')} style={styles.image} />
          <Text>Pina Mountai</Text>
          <Text>$1700</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('Screen_03')}
        >
          <Image source={require('../assets/bione-removebg-preview.png')} style={styles.image} />
          <Text>Pina Bike</Text>
          <Text>$1500</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('Screen_03')}
        >
          <Image source={require('../assets/bitwo-removebg-preview.png')} style={styles.image} />
          <Text>Pinarello</Text>
          <Text>$1900</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('Screen_03')}
        >
          <Image source={require('../assets/bithree_removebg-preview.png')} style={styles.image} />
          <Text>Pinarello</Text>
          <Text>$2700</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('Screen_03')}
        >
          <Image source={require('../assets/bitwo-removebg-preview.png')} style={styles.image} />
          <Text>Pinarello</Text>
          <Text>$1350</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF3D00',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeFilter: {
    backgroundColor: '#FF3D00',
    borderColor: '#FF3D00',
  },
  filterText: {
    color: '#000',
    fontSize: 14,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Tạo khoảng cách đều giữa các sản phẩm
  },
  product: {
    alignItems: 'center',
    marginBottom: 20,
    width: '48%', // Điều chỉnh để tạo khoảng cách đều giữa các cột
  },
  image: {
    width: '100%', // Đảm bảo hình ảnh vừa khít với phần tử sản phẩm
    height: 100,
    resizeMode: 'contain', // Giúp ảnh không bị cắt mất
    marginBottom: 10,
  },
});
