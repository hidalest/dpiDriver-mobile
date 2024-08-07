import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 20,
  },
  header: {
    marginBottom: 5,
    textAlign: 'center',
  },
  slogan: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 13,
  },
  errorMessage: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 13,
    color: 'red',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginSpinnerContainer: {
    backgroundColor: 'blue',
  },
  controlContainer: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#3366FF',
    textAlign: 'center',
    marginHorizontal: 'auto',
  },
});
