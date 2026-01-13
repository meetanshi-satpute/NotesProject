import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDE3F8',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#EEF1FF',
    borderRadius: 30,
    padding: 25,
    elevation: 8,
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#5E35B1',
    marginBottom: 40,
  },
  input: {
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  arrowBtn: {
    backgroundColor: '#6A1B9A',
    alignSelf: 'center',
    borderRadius: 16,
    marginTop: 10,
  },
  footer: {
    textAlign: 'center',
    marginTop: 25,
    color: '#777',
    fontSize: 13,
  },
  signIn: {
    color: '#6A1B9A',
    fontWeight: '600',
       marginTop: 25,
       marginLeft:5
  },

  /* Decorative circles */
  circleSmall: {
    position: 'absolute',
    top: -30,
    left: -20,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#D1C4E9',
    opacity: 0.6,
  },
  circleBig: {
    position: 'absolute',
    top: 40,
    right: -30,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#C5CAE9',
    opacity: 0.5,
  },
});
