import React,{useState} from 'react';
import { Text, View, TextInput, TouchableOpacity , SafeAreaView} from 'react-native';
import styles from './styles';
import TodoApp from './todos';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState(false);
  const addTodo = async ()=>{
    let id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    if(title.trim() !== '' || desc.trim() !== ''){
      const todo = {
        id,
        title,
        desc,
        completed:status
      };
      setTodos((prevTodos) => [...prevTodos, todo]);
      AsyncStorage.setItem("todos",JSON.stringify([...todos,todo]));
      
      // setCounter((prevCounter) => prevCounter+1); 
      setTitle('');
      setDesc('');
    }
  }
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
            <Text style={{fontWeight:'bold',fontSize:'24px'}}>Submit</Text>
        </TouchableOpacity>
        
        <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
          <TodoApp todos={todos}/>
      </View>

    </SafeAreaView>
  );
}


