import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView,View , TouchableOpacity,FlatList} from 'react-native';
import styles from './styles';
import React,{useState} from 'react';
// import {  List, Checkbox } from 'react-native-paper';
export default function TodoApp(props) {
    const [todos, setTodos ] = useState([])
    const [filter, setFilter] = useState('All');
    const handleFilterChange = (filter) => {
        console.log(props.props);
        setFilter(filter);
    };
    const handleToggleTodo = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
      const Item = ({title,desc}) => (
        <View style={styles.item2}>
          <Text style={styles.title2}>{title}</Text>
          <Text style={styles.title2}>{desc}</Text>
        </View>
      );
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
        <View style={styles.todosContainer}>
                <FlatList
                data={props.props}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                   
                    <TouchableOpacity
                        style={styles.todosContainer}
                        onPress={() => handleToggleTodo(item.id)}>
                            <Text style={[styles.doneTodo]}>{item.title}</Text>
                            <Text >{item.desc}</Text>
                        
                    </TouchableOpacity>
                 
                )}
                />
            </View>


    </View>

);
}


