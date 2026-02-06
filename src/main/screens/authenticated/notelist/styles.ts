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
    color:'black'
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
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.4)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  width: '90%',
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 10,
},

modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  paddingBottom:10,
   borderBottomWidth:1,
  borderTopColor:'gray',
  marginBottom:15
},

modalActions: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 15,
  borderTopWidth:1,
  borderTopColor:'gray',
  padding:10
},

cancelBtn: {
  marginRight: 20,
  color: 'gray',
  fontSize: 16,
  
},

YesBtn: {
  color: '#4A6CF7',
  fontSize: 16,
  fontWeight: 'bold',
},

});
export default styles