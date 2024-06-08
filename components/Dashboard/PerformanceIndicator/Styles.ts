import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  //TODO: check if we want this card type to show the performace
  container: {
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
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
  },
});
