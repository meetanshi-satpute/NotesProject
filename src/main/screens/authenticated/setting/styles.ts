import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  // ── Root ──────────────────────────────────────────────────────────────────
  root: {
    flex: 1,
    backgroundColor: '#0F0B1E',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  // ── Ambient blobs ──────────────────────────────────────────────────────────
  blobRed: {
    position: 'absolute',
    top: -100,
    right: width * 0.1,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(239,68,68,0.15)',
  },
  blobBlue: {
    position: 'absolute',
    bottom: -80,
    left: -50,
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: 'rgba(59,130,246,0.13)',
  },
  blobPurple: {
    position: 'absolute',
    top: '40%',
    right: -60,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(139,92,246,0.12)',
  },

  // ── Header ─────────────────────────────────────────────────────────────────
  headerRow: {
    marginBottom: 24,
  },
  appLabel: {
    color: '#8B5CF6',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 4,
  },
  pageTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
  },

  // ── Profile Card ────────────────────────────────────────────────────────────
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  avatarWrap: {
    position: 'relative',
    marginRight: 14,
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  avatarRing: {
    position: 'absolute',
    top: -3,
    left: -3,
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 3,
  },
  email: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 13,
  },
  editBtn: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 10,
    backgroundColor: 'rgba(139,92,246,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(139,92,246,0.4)',
  },
  editText: {
    color: '#A78BFA',
    fontSize: 13,
    fontWeight: '600',
  },

  // ── Settings Card ──────────────────────────────────────────────────────────
  settingsCard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rowIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowEmoji: {
    fontSize: 17,
  },
  rowLabel: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
  rowChevron: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 22,
    fontWeight: '300',
    marginRight: 2,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.07)',
    marginLeft: 48,
  },

  // ── Logout Button ──────────────────────────────────────────────────────────
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'rgba(239,68,68,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(239,68,68,0.35)',
    borderRadius: 16,
    paddingVertical: 15,
    shadowColor: '#EF4444',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  logoutText: {
    color: '#F87171',
    fontSize: 16,
    fontWeight: '700',
  },
  logoutArrow: {
    color: '#F87171',
    fontSize: 18,
    fontWeight: '700',
  },

  // ── Version ────────────────────────────────────────────────────────────────
  version: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 24,
  },
});