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
      width: "50%",
      backgroundColor: "#61dafb",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderRadius: 10,
      color: 'black',
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
    },
    item2: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title2: {
      fontSize: 32,
    },
  });

export default styles;