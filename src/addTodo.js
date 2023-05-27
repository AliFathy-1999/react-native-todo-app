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
  const [msg, setMsg] = useState("There are no tasks added !!");
  const [AlertType, setAlertType] = useState("default");
  const [showAddMessage, setShowAddMessage] = useState(false)
  const handleMessage = (msg,status,showStatus) => {
    setMsg(msg)
    setAlertType(status)
    setShowAddMessage(showStatus)          
}
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
      handleMessage('Todos added successfully','success',true)
      setTitle('');
      setDesc('');
    } catch (error) {
      handleMessage('Failed to add todo :(','danger',true)
    }
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
        <StatusBar style="auto" />
        <Text style={styles.title}>TODO APP</Text>
          <TextInput
              style={styles.input}
              onChangeText={setTitle}
              value={title}
              placeholder='Todo Title'
              maxLength="35"
          />
          <TextInput
              style={styles.input}
              onChangeText={setDesc}
              value={desc}
              placeholder='Todo Description'
              maxLength="50"
          />
        <TouchableOpacity style={styles.submitBtn} onPress={addTodo}>
            <MaterialCommunityIcons name="playlist-plus" size={32} color="black" />
            <Text style={{fontWeight:'bold',fontSize:'1em'}}> Add TODO</Text>
        </TouchableOpacity>
        
        <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
          <TodoApp todos={todos} addMsg={msg} typeMsg={AlertType} showAddMessage={showAddMessage}/>
      </View>

    </SafeAreaView>
  );
}


