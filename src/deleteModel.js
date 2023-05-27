import React, { useState } from "react";
import { TouchableOpacity, Modal, Text, View,SafeAreaView } from "react-native";
import styles from "./styles";

export default function DeleteModel({ msg ,visible, onCancel, overlay ,animation,onConfirm  }) {
  return (
    <SafeAreaView style={styles.centeredView}>
        <Modal 
            visible={visible}
            transparent={overlay}
            animationType={animation}
            onRequestClose={onCancel}
            >

            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.msg}>{msg}</Text>
                    <View style={styles.modelBtns}> 
                        <TouchableOpacity style={styles.deleteBtn} onPress={onConfirm}>
                            <Text style={styles.btnText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={onCancel}>
                            <Text style={styles.cancelModel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
        </Modal>
    </SafeAreaView>
  );
}
