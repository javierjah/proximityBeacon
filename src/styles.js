import {
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';

const {height, width} = Dimensions.get('window');

const APP_BAR_HEIGHT = Platform.OS === 'ios' ? 80 : 56;
const TAB_BAR_HEIGHT = width / 8;
const WINDOW_WIDTH = width;
const WINDOW_HEIGHT = height;

export const colors = {
  header: '#f2f2f2',
  accent: '#ff2824',
  primary: '#39babd',
  success: '#4caf50',
  disabled: '#cacaca',
  active: 'white',
  info: '#19bfe5',
  warning: '#feb401',
  danger: '#e53935',
  textSecondary: '#8c98a3',
  background: '#ffffff',
  alterBackground: '#ffffff',
  overlayBackground: '#00000057',
  fadedBackground: '#e5e5e5',
  border: '#f2f2f2',
  modalBackground: 'rgba(134, 134, 134, 0.5)'
};

export const appStyle = {
  appBarHeight: APP_BAR_HEIGHT,
  tabBarHeight: TAB_BAR_HEIGHT,
  windowHeight: WINDOW_HEIGHT,
  windowWidth: WINDOW_WIDTH,
  navigatorHeaderLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50
  },
  navigatorHeaderLeftText: {
    textAlign: 'center',
    color: 'black',
    width: 50,
    height: 50,
    marginTop: 25
  }
};

export const stylePicker = StyleSheet.create({
  pickerBody: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#233241'
  },
  pickerBodyDisabled: {
    borderColor: colors.disabled
  },
  textDisabled: {
    color: colors.disabled
  },
  textBox: {
    flex: 5,
    paddingLeft: 10
  },
  title: {
    color: '#666',
    fontSize: 12
  },
  label: {
    color: 'black',
    fontSize: 15
  },
  icon: {
    flex: 1,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    fontSize: 16,
    color: '#46cf98'
  },
  btnTextCancel: {
    color: '#666'
  },
  btnCancel: {
    left: 0
  },
  btnConfirm: {
    right: 0
  },
  headLine: {
    marginTop: 0
  }
});

export default appStyle;
