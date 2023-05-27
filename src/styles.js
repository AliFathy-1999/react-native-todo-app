import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 10,
    marginTop: "2em"
  },
    container: {
      flex: 1,
      alignItems: "center",
      paddingBottom: 10,
    },
    title: {
      padding: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: "2em",
      fontWeight: 'bold',
      marginBottom:30,
    },

    input: {
      borderWidth: 1,
      borderColor: "#aeaeae",
      width: "90%",
      backgroundColor:"white",
      marginVertical: 10,
      height: 50,
      padding: 10,
      borderRadius: 5,
    },
    submitBtn: {
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
      marginTop: "1rem",
    },
    filterContainer: {
      flexDirection: "row",
      width: "90%",
      justifyContent: "space-between",
      marginTop: "2em",
      alignItems: 'center',

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
      
      marginBottom: 5,
    
    },
    checkbox: {
      marginRight: 10, 
    },
    listItemTitle: {
      flex: 1, 
      fontSize: "1em",
      overflow:"auto",
      fontWeight: "bold",
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
      fontSize: "1.2em",
      overflow:"auto",
      fontWeight: "bold",
      textDecorationLine: 'line-through',
    },
    deleteBtn: {
      backgroundColor: 'red',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 6,
      borderRadius: 4,
      marginRight:"1em"
    },
    btnText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    detailsBtn: {
      margin:10,
      backgroundColor: "#0d6efd",
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
     
    },
    cancelModel: {
      color: 'white',
      backgroundColor: "#0d6efd",
      fontSize: 16,
      fontWeight: 'bold',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 6,
      borderRadius: 4,
    },
    msg:{
      fontSize: "1em",
      fontWeight: "bold",
      color:"red",
      marginBottom:"1em"
    },
    modelBtns:{
      flexDirection:"row",
      
    },
    emptyText: {
      fontWeight: "bold",
      fontSize: "1em",
      padding: 16,
      borderRadius: 4,
      backgroundColor: '#cce5ff',
    },
  });
  
export default styles;