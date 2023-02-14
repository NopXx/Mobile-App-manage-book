import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BookItem = ({ book }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>รหัสหนังสือ: {book.b_id}</Text>
      <Text style={styles.itemTitle}>ชื่อหนังสือ: {book.b_name}</Text>
      <Text style={styles.itemTitle}>นักเขียน: {book.b_writer}</Text>
      <Text style={styles.itemTitle}>
        หมวดหมู่:{' '}
        {book.b_category === 1
          ? 'วิชาการ'
          : book.b_category === 2
          ? 'วรรณกรรม'
          : 'เบ็ดเตล็ด'}
      </Text>
      <Text style={styles.itemTitle}>ราคา: {book.b_price} บาท</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5
  },
  itemTitle: {
    color: '#fff'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default BookItem
