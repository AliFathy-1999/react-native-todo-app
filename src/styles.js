import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      paddingBottom: 20,
      marginTop: 100,
    },
    title: {
      padding: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom:30,
    },

    input: {
      borderWidth: 1,
      borderColor: "#aeaeae",
      width: "90%",
      marginVertical: 10,
      height: 50,
      padding: 10,
      borderRadius: 5,
    },
    submitBtn: {
      width: "25%",
      backgroundColor: "#61dafb",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
      color: 'black',
      flexDirection: 'row',

    },
    text: {
      color: "black",
      fontSize: 18,
      textTransform: "uppercase",
      textAlign: "left",
    },
    dividerLine: {
      height: 1,
      width: "90%",
      backgroundColor: "#aeaeae",
      marginVertical: 15,
    },
    filterContainer: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      
    },
    filterBtn: {
      width: "30%",
      backgroundColor: "#ffffff",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "black",
    },
    filterText: {
      color: "black",
      fontSize: 15,
    },
    activeFilterBtn: {
      width: "30%",
      backgroundColor: "black",
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "black",
    },
    activeFilterText: {
      color: "white",
      fontSize: 15,
    },
    todosContainer: {
      marginTop: 10,
      
    },
    doneTodo: {
      textDecorationLine: "line-through",
      fontSize: 21,
      fontWeight: 'bold',
      marginLeft:15
    },
    listItem: {
      flexDirection: 'row', 
      alignItems: 'center',
      marginBottom: 10, 
    },
    checkbox: {
      marginRight: 10, 
    },
    listItemTitle: {
      flex: 1, 
      fontSize: 16,
    },
    todoContainer: {
      flex: 1,
      flexDirection: 'column',
      padding: 16,
      
    },
    checkbox: {
      width: 24,
      height: 24,
      marginRight: 8,
      borderWidth: 1,
      borderColor: 'black',
    },
    doneTodo: {
      flex: 1,
      fontSize: 16,
      textDecorationLine: 'line-through',
    },
    deleteBtn: {
      backgroundColor: 'red',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderRadius: 4,
    },
    icon: {
      marginRight: 4,
    },
    btnText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    detailsBtn: {
      margin:10,
      backgroundColor: 'blue',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderRadius: 4,
    },
    detailsContainer: {
      
      justifyContent: 'center',
      alignItems: 'center',

      padding: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom:30,
    },
    detailsHeading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    detailsText: {
      fontSize: 18,
      marginBottom: 8,
    },
    detailsDesc: {
      fontSize: 16,
      marginBottom: 16,
    },
    detailsButtonText: {
      fontSize: 16,
      color: 'white',
    },
  });
  
export default styles;