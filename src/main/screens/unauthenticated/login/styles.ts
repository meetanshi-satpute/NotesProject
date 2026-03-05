import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  // ── Root ──────────────────────────────────────────────────────────────────
  root: {
    flex: 1,
    backgroundColor: '#0F0B1E',
  },
  kav: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 44,
    gap: 20,
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

  // ── Task preview card ──────────────────────────────────────────────────────
  previewCard: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    overflow: 'hidden',
    gap: 14,
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 2,
  },
  previewDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    // Faux gradient using orange-red midpoint
    backgroundColor: '#C026D3',
  },
  previewTitle: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
  },

  // Task rows
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkTick: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
  taskLabel: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 13,
  },
  taskLabelDone: {
    textDecorationLine: 'line-through',
    opacity: 0.45,
  },

  // Pencil decoration (pure Views)
  pencilWrap: {
    position: 'absolute',
    bottom: -6,
    right: 18,
    alignItems: 'center',
    transform: [{rotate: '30deg'}],
  },
  pencilTip: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#F59E0B',
  },
  pencilBody: {
    width: 12,
    height: 38,
    backgroundColor: '#FCD34D',
  },
  pencilBand: {
    width: 12,
    height: 7,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  pencilEraser: {
    width: 12,
    height: 8,
    backgroundColor: '#EC4899',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },

  // ── Login card ─────────────────────────────────────────────────────────────
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 28,
    // Shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 20,
  },

  // Icon badge (simulated gradient via layered background)
  iconBadge: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#7C3AED',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    // Soft glow
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
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 26,
    letterSpacing: -0.5,
  },

  // react-native-paper TextInput
  input: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
  },
  inputContent: {
    color: '#FFFFFF',
    fontSize: 15,
  },

  // Forgot
  forgotRow: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 24,
  },
  forgotText: {
    color: '#8B5CF6',
    fontSize: 13,
    fontWeight: '500',
  },

  // Login button — faux gradient via backgroundColor
  loginBtn: {
    backgroundColor: '#7C3AED',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#7C3AED',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  loginBtnArrow: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  // Divider
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  dividerText: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 13,
  },

  // Register
  registerRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  registerText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
  },
  registerLink: {
    color: '#8B5CF6',
    fontSize: 14,
    fontWeight: '600',
  },
});