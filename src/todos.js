import { StatusBar } from 'expo-status-bar';
import { Text, TouchableHighlight ,View , TouchableOpacity,FlatList , CheckBox} from 'react-native';
import styles from './styles';
import React,{useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DeleteModal from './deleteModel';
import AlertMessage from './alertMessage';
import { Octicons } from '@expo/vector-icons';

export default function TodoApp({ todos , addMsg , typeMsg, showAddMessage}) {
    const navigation = useNavigation();
    const [filter, setFilter] = useState('All');
    const [allTodos,setTodos] = useState(todos);
    const [modalVisible, setModalVisible] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [msg, setMsg] = useState("Task added successfully"); 
    const [AlertType, setAlertType] = useState("default");
    const [selectedTodo, setSelectedTodo] = useState(null);
    const handleFilterChange = (filter) => {
        setFilter(filter);
    };
    const handleMessage = (msg,status,showStatus) => {
          setMsg(msg)
          setAlertType(status)
          setShowAlert(showStatus)          
    }
    const getTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        const allTodos = JSON.parse(storedTodos);
        if (storedTodos !== null) {
          setTodos(allTodos);
        }
      } catch (error) {
        const errorMsg = `"Error loading todos:", ${error}`
        handleMessage(errorMsg,"danger",true)
      }
    }
    const handleHideAlert = () => {
        setShowAlert(false);
    };
    // Load todos
    useEffect(()=>{
      getTodos();
    },[todos])

    // Show Message when add todo
    useEffect(()=>{
      setMsg(addMsg)
      setAlertType(typeMsg)
      setShowAlert(showAddMessage)
    },[addMsg,todos])
    // Show Message when Complete and delete todo
    useEffect(()=>{
      setMsg(msg)
      setAlertType(AlertType)
      setShowAlert(showAlert)
    },[msg])
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
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        const myTodos = JSON.parse(storedTodos)
        const updateTodos = myTodos.map((todo) => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(updateTodos)
        await AsyncStorage.setItem("todos", JSON.stringify(updateTodos));
        const todoCompleted = myTodos.find((todo) => (todo.id === id) && !(todo.completed) )
        if(todoCompleted)
          handleMessage("Task is completed successfully","success",true)
        else
          handleMessage("Task is Uncompleted successfully","warning",true)
      }catch (error) {
        const errorMsg = `"Error in completing todo: ", ${error}`
        handleMessage(errorMsg,"danger",true)
      }

    } 
    const handleDeleteTodo = (id) => {
      setModalVisible(true);
      setSelectedTodo(id);
    };
    const handleCancelDelete = () => {
      setModalVisible(false);
      setSelectedTodo(null);
    };
    const deleteTodo = async() => {
      try{
        if (!selectedTodo) 
          return;
        setModalVisible(false);
        setTodos((prevTodos) => {
          const updatedTodos = prevTodos.filter((todo) => todo.id !== selectedTodo);
          AsyncStorage.setItem('todos', JSON.stringify(updatedTodos))
          return updatedTodos;
      })
      handleMessage("Todo deleted successfully","success",true)
    setSelectedTodo(null);
    }catch(error) {
      const errorMsg = `"Error in deleting todo: ", ${error}`
      handleMessage(errorMsg,"danger",true)
    }
}


return (
    <View style={styles.container}>
          {showAlert && addMsg !== '' && (
            <AlertMessage type={AlertType} msg={msg} onHide={handleHideAlert}/>
          )}
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
          {allTodos.length == 0 ? (
              <Text style={styles.emptyText}><Octicons name="inbox" size={24} color="black" /> No todos found.</Text>
          ):
                <FlatList
                  data={filteredTodos}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                      <View style={styles.listItem}>
                        <TouchableOpacity onPress={() => handleToggleTodo(item.id)}>
                              <CheckBox style = { styles.checkbox } value= { item.completed ? true : false } />
                        </TouchableOpacity>
                        <TouchableHighlight  style={styles.listItemTitle} 
                        onPress={() => {  
                          navigation.navigate("Details", {
                            id: item.id,
                            title: item.title,
                            desc: item.desc,
                          })
                        }}
                      >
                        <Text style={item.completed ? styles.doneTodo : styles.listItemTitle}>{item.title}</Text>
                      </TouchableHighlight>
                      <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDeleteTodo(item.id)}>
                        <MaterialCommunityIcons name="playlist-remove" size={24} color="white" style={styles.icon} />
                        <Text style={styles.btnText}>Delete</Text>
                      </TouchableOpacity>                
                    </View>
                )}
                />
                }
               
                <DeleteModal 
                  msg = "Are you sure you want to delete this todo ? "
                  visible = {modalVisible}
                  overlay = {true}
                  onCancel = {handleCancelDelete}
                  onConfirm = {deleteTodo}
                  animation = "fade"
                />
          </View>
        </View>
);
}


