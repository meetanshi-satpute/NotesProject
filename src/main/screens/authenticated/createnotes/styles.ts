import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDE3F8',
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E1E1E',
    marginBottom: 12,
  },

  search: {
    marginBottom: 12,
    backgroundColor: 'transparent',
  },

  noteCard: {
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    padding: 12,
  },

  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    flex: 1,
  },

  noteContent: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
    lineHeight: 20,
  },

  actions: {
    flexDirection: 'row',
    marginLeft: 8,
  },

  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#666',
    fontSize: 16,
  },

  /* Create / Edit Screen */

  input: {
    marginBottom: 12,
    backgroundColor: '#FFF',
  },

  saveButton: {
    marginTop: 20,
    paddingVertical: 6,
    borderRadius: 8,
  },

  /* Floating Add Button */

  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#5B6CFF',
  },
});

export default styles;
