import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {      
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: 'trasparent'
    },
    horizontalPadding: {
        paddingHorizontal: 20
    },
    header: {
        marginTop: 26,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    videoContainer: {
        height: 380, 
        paddingVertical: 20,
    },
    video: {
        height: '100%',
        borderRadius: 15
    },
    name: {
      fontSize: 20,
    },
    descContainer: {
      marginVertical: 20,
      paddingTop: 40,
      backgroundColor: 'white',
      height: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    descHeader: {
      marginBottom: 20,
      fontSize: 25
    },
    description: {
      fontSize: 16,
      color: 'gray'
    },
    state: {
      fontSize: 14,
      color: 'blue',
    },
    duration: {
      fontSize: 14,
      marginTop: 20,
      color: 'gray'
    },
});