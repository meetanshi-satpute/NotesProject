import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  // ── Root ──────────────────────────────────────────────────────────────────
  root: {
    flex: 1,
    backgroundColor: '#0F0B1E',
  },
  kav: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  // ── Ambient blobs ──────────────────────────────────────────────────────────
  blobRed: {
    position: 'absolute',
    top: -100,
    right: width * 0.1,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(239,68,68,0.18)',
  },
  blobBlue: {
    position: 'absolute',
    bottom: -80,
    left: -50,
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: 'rgba(59,130,246,0.15)',
  },
  blobPurple: {
    position: 'absolute',
    top: '35%',
    left: -70,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(139,92,246,0.13)',
  },

  // ── Back button ────────────────────────────────────────────────────────────
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 20,
    lineHeight: 22,
  },

  // ── Card ──────────────────────────────────────────────────────────────────
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 28,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 20,
  },

  // Icon badge
  iconBadge: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    shadowColor: '#8B5CF6',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 8,
  },
  iconBadgeEmoji: {
    fontSize: 24,
  },

  appLabel: {
    color: '#8B5CF6',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 6,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 26,
    letterSpacing: -0.5,
  },

  // ── Inputs ─────────────────────────────────────────────────────────────────
  input: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
    marginBottom: 14,
  },
  contentInput: {
    minHeight: 130,
  },
  inputContent: {
    color: '#FFFFFF',
    fontSize: 15,
  },

  // ── Buttons ────────────────────────────────────────────────────────────────
  btnRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 10,
  },
  btnFlex: {
    flex: 1,
  },

  // Cancel
  cancelBtn: {
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtnText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 15,
    fontWeight: '600',
  },

  // Save
  saveBtn: {
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#7C3AED',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  saveBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  saveBtnArrow: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;