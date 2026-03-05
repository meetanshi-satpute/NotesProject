import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  // ── Root ──────────────────────────────────────────────────────────────────
  safeArea: {
    flex: 1,
    backgroundColor: '#0F0B1E',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // ── Ambient blobs ──────────────────────────────────────────────────────────
  blobRed: {
    position: 'absolute',
    top: -80,
    right: width * 0.05,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(239,68,68,0.15)',
  },
  blobBlue: {
    position: 'absolute',
    bottom: 60,
    left: -60,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(59,130,246,0.12)',
  },
  blobPurple: {
    position: 'absolute',
    top: '40%',
    right: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(139,92,246,0.12)',
  },

  // ── Header ─────────────────────────────────────────────────────────────────
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  headerSub: {
    color: '#8B5CF6',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 2,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  settingsBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Search ─────────────────────────────────────────────────────────────────
  search: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 14,
    marginBottom: 18,
  },
  searchContent: {
    fontSize: 14,
    color: '#FFFFFF',
  },

  // ── Note Card ──────────────────────────────────────────────────────────────
  noteCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  noteAccentBar: {
    width: 4,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  noteInner: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    marginRight: -8,
  },
  actionBtn: {
    marginLeft: -4,
  },
  noteContent: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.45)',
    marginTop: 4,
    lineHeight: 19,
  },

  // ── Empty state ────────────────────────────────────────────────────────────
  emptyWrap: {
    alignItems: 'center',
    marginTop: 80,
    gap: 8,
  },
  emptyIcon: {
    fontSize: 44,
    marginBottom: 8,
  },
  empty: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 16,
    fontWeight: '600',
  },
  emptySub: {
    color: 'rgba(255,255,255,0.25)',
    fontSize: 13,
  },

  // ── FAB ───────────────────────────────────────────────────────────────────
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    backgroundColor: '#7C3AED',
    borderRadius: 18,
    shadowColor: '#7C3AED',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },

  // ── Edit Modal ─────────────────────────────────────────────────────────────
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#1A1332',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.6,
    shadowRadius: 40,
    elevation: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  modalDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#8B5CF6',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  modalInput: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  cancelBtnWrap: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
  },
  cancelBtn: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    fontWeight: '600',
  },
  saveBtnWrap: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    shadowColor: '#7C3AED',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  saveBtn: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;