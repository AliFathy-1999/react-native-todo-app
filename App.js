import React,{useState} from 'react';
import { Text, View, TextInput, TouchableOpacity , SafeAreaView} from 'react-native';
import styles from './styles';
import TodoApp from './todos';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState(false);

  const addTodo = ()=>{
    if(title.trim() !== '' || desc.trim() !== ''){
      console.log();
      const todo = {
        id:Date.now(),
        title,
        desc,
        completed:status
      };
      setTodos((prevTodos) => [...prevTodos, todo]);   
      console.log(todos);   
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
            <Text>Submit</Text>
        </TouchableOpacity>
        
        <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
          <TodoApp props={todos}/>
      </View>

    </SafeAreaView>
  );
}


