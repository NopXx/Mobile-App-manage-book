import {
  FlatList,
  RefreshControl,
  TextInput,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  ScrollView,
  Text
} from 'react-native'
import React, { useState, useEffect } from 'react'

import { getBooks, getBookSearch, getBookSearchAll } from '../api'
import BookItem from './BookItem'
import { useIsFocused } from '@react-navigation/native'

const BookList = () => {
  const [books, setBooks] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [search, onChangeSearch] = useState('')

  const isFocused = useIsFocused()

  const loadBook = async () => {
    const data = await getBooks()
    setBooks(data)
  }

  useEffect(() => {
    loadBook()
  }, [isFocused])

  const renderItem = ({ item }) => {
    return <BookItem book={item} />
  }

  const hendleSearch = async column_name => {
    if (column_name !== 'all') {
      const data = await getBookSearch(column_name, search)
      setBooks(data)
    } else {
      const data = await getBookSearchAll(search)
      setBooks(data)
    }
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    await loadBook()
    onChangeSearch()
    setRefreshing(false)
  })

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSearch}
        value={search}
        placeholder='รหัสหนังสือ, ชื่อหนังสือ, ชื่อผู้แต่ง'
        placeholderTextColor='#fff'
      />
      <View style={styles.fixToText}>
        <Button
          style={{ padding: 5 }}
          title='ทั้งหมด'
          onPress={() => hendleSearch('all')}
        />
        <Button title='รหัสหนังสือ' onPress={() => hendleSearch('b_id')} />
        <Button title='ชื่อหนังสือ' onPress={() => hendleSearch('b_name')} />
        <Button title='ชื่อผู้แต่ง' onPress={() => hendleSearch('b_writer')} />
      </View>

      {books.length > 0 ? (
        <FlatList
          style={{ width: '100%' }}
          data={books}
          keyExtractor={item => item.b_id + ''} // keyExtractor requires a string
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              colors={['#78e08f']}
              onRefresh={onRefresh}
              refreshing={refreshing}
              progressBackgroundColor='#0a3d62'
            />
          }
        />
      ) : (
        <SafeAreaView style={styles.container}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>ไม่พบข้อมูลที่ค้นหา</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
    width: '100%'
  },
  itemTitle: {
    color: '#fff'
  },
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BookList
