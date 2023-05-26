import React,{useState} from 'react';
import { Text, View, TextInput, TouchableOpacity , SafeAreaView} from 'react-native';
import styles from './styles';
import TodoApp from './todos';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function AddTodoApp() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todos,setTodos] = useState([]);
  const addTodo = async () => {
    if (title.trim() === "" || desc.trim() === "") 
      return;
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      let updatedTodos = [];
      if (storedTodos) 
        updatedTodos = JSON.parse(storedTodos);
      let id = updatedTodos.length > 0 ? updatedTodos[updatedTodos.length - 1].id + 1 : 1;

      const addedTodo = { id, title, desc, completed: false };
      updatedTodos.push(addedTodo);
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);

      setTitle('');
      setDesc('');
    } catch (error) {
      console.log("Error saving todos:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.title}>TODO APP</Text>
          <TextInput
              style={styles.input}
              onChangeText={setTitle}
              value={title}
              placeholder='Todo Title'
          />
          <TextInput
              style={styles.input}
              onChangeText={setDesc}
              value={desc}
              placeholder='Todo Description'
          />
        <TouchableOpacity style={styles.submitBtn} onPress={addTodo}>
            <MaterialCommunityIcons name="playlist-plus" size={34} color="black" />
            <Text style={{fontWeight:'bold',fontSize:'24px'}}> Add TODO</Text>
        </TouchableOpacity>
        
        <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
          <TodoApp todos={todos}/>
      </View>

    </SafeAreaView>
  );
}


