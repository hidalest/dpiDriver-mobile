import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  //TODO: check if we want this card type to show the performace
  container: {},

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  message: {
    textAlign: 'center',
    color: 'grey',
  },
  performanceCategory: {
    marginTop: 30,
    marginBottom: 15,
  },
  radial: {
    margin: 'auto',
    marginBottom: 30,
  },
  cardContainer: {
    borderColor: 'transparent',
    marginHorizontal: 'auto',
    textAlign: 'center',
  },
  spinnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loadingSpinner: {},
});
