import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDE3F8',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    color: '#5E35B1',
    marginVertical: 20,
  },
  search: {
    backgroundColor: 'transparent',
    marginBottom: 15,
  },
  fab: {
  position: 'absolute',
  right: 20,
  bottom: 20,
  backgroundColor: '#6A1B9A',
},

  editor: {
    backgroundColor: '#EEF1FF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
  },
  input: {
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  saveBtn: {
    backgroundColor: '#6A1B9A',
    alignSelf: 'flex-end',
    borderRadius: 16,
  },
  noteCard: {
    backgroundColor: '#EEF1FF',
    borderRadius: 18,
    padding: 15,
    marginBottom: 12,
    elevation: 3,
    flex:1
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A148C',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
  },
  noteContent: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
  },
  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
});
export default styles