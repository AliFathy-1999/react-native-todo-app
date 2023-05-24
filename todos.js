import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView,View , TouchableOpacity,FlatList , CheckBox} from 'react-native';
import styles from './styles';
import React,{useEffect, useState} from 'react';
export default function TodoApp(props) {
    const [filter, setFilter] = useState('All');
    const [todos,setTodos] = useState(props.todos);

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    useEffect(()=>{
      setTodos(props.todos)
    },[props.todos])

    const filteredTodos = todos.filter((todo) => {
      
      if (filter === 'All') {
        return true;
      } else if (filter === 'Active') {
        return !todo.completed;
      } else if (filter === 'Done') {
        return todo.completed;
      }
    });
    const isEmpty = ()=> todos.length === 0 ? true : false;

    const handleToggleTodo = (id) => {
      
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    
    };

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
                <FlatList
                data={filteredTodos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                      <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
                            <CheckBox
                              style = { styles.checkbox }
                              value={item.completed ? true : false}
                            />
                        </TouchableOpacity>
                            <Text style={item.completed ? styles.doneTodo : styles.listItemTitle}> {item.id}. {item.title}</Text>
                    </View>
                )}
                />
              </View>
    

);
}


