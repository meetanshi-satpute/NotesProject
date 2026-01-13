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
    marginVertical: 20,
  },

  footer: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
    fontSize: 13,
  },
  register: {
    color: '#6A1B9A',
    fontWeight: '600',
     marginTop: 20,
  },

  /* Decorative circles */
  circleSmall: {
    position: 'absolute',
    top: -30,
    right: 40,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D1C4E9',
    opacity: 0.6,
  },
  circleBig: {
    position: 'absolute',
    top: 40,
    right: -30,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#C5CAE9',
    opacity: 0.5,
  },
});
