import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView,View , TouchableOpacity,FlatList , CheckBox} from 'react-native';
import styles from './styles';
import React,{useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function TodoApp({ todos }) {
    const navigation = useNavigation();
    const [filter, setFilter] = useState('All');
    const [allTodos,setTodos] = useState(todos);
    const handleFilterChange = (filter) => {
        setFilter(filter);
    };
    const getTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.log("Error loading todos:", error);
      }
    }

    useEffect(()=>{
      getTodos();
    },[todos])

    const filteredTodos = allTodos.filter((todo) => {
      if (filter === 'All') {
        return true;
      } else if (filter === 'Active') {
        return !todo.completed;
      } else if (filter === 'Done') {
        return todo.completed;
      }
    });

    const handleToggleTodo = async(id) => {
      const updateTodos = todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
      setTodos(updateTodos)
      await AsyncStorage.setItem('todos', JSON.stringify(updateTodos));
    } 
    const deleteTodo = async(id) => {
      setTodos((prevTodos) => {
        const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
        AsyncStorage.setItem('todos', JSON.stringify(updatedTodos))
        return updatedTodos;
    })
  }
return (
    <View style={styles.container}>
        <View style={styles.filterContainer}>
                <TouchableOpacity
                style={filter === 'All' ? styles.activeFilterBtn : styles.filterBtn}
                onPress={() => handleFilterChange('All')}>
                    <Text style={ filter === 'All' ? styles.activeFilterText : styles.filterText } >All</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={filter === 'Active' ? styles.activeFilterBtn : styles.filterBtn}
                onPress={() => handleFilterChange('Active')}>
                    <Text style={ filter === 'Active' ? styles.activeFilterText : styles.filterText } >Active</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={filter === 'Done' ? styles.activeFilterBtn : styles.filterBtn}
                onPress={() => handleFilterChange('Done')}>
                    <Text style={filter === 'Done' ? styles.activeFilterText : styles.filterText}>Done</Text>
                </TouchableOpacity>
        </View> 
        <View style={styles.filterContainer}>
                <FlatList
                data={filteredTodos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                      <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
                            <CheckBox style = { styles.checkbox } value= { item.completed ? true : false } />
                      </TouchableOpacity>
                      <Text style={item.completed ? styles.doneTodo : styles.listItemTitle}> {item.id}. {item.title}</Text>
                      <TouchableOpacity style={styles.detailsBtn}  
                      onPress={() => {
                        console.log(navigation);
                        navigation.navigate("Details", {
                          id: item.id,
                          title: item.title,
                          desc: item.desc,
                        })
                      }}
                      >
                      <MaterialIcons name="view-list" size={24} color="white" />
                        <Text style={styles.btnText}> Details</Text>
                      </TouchableOpacity>   
                      <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteTodo(item.id)}>
                        <MaterialCommunityIcons name="playlist-remove" size={24} color="white" style={styles.icon} />
                        <Text style={styles.btnText}>Delete</Text>
                      </TouchableOpacity>                
                    </View>
                )}
                />
          </View>
        </View>
);
}


