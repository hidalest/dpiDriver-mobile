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
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: "space-around",
  },
  descHeader: {
    fontSize: 25,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10
  },
  state: {
    fontSize: 14,
    color: 'blue',
  },
  duration: {
    fontSize: 14,
    color: 'gray',
  },
  ackButton: {
    width: '100%',
    justifyContent: 'center'
  },
  modal: {
    width: '85%',
  },
  modalText: {
    textAlign: 'justify',
    marginBottom: 20
  }
});