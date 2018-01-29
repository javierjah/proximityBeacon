import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

// import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';
import StoresContainer from '../stores/StoresContainer';
import LoginContainer from '../login/LoginContainer';
import FavoriteStoresContainer from '../favoritesStores/FavoritesStoresContainer';
import StoresMapContainer from '../storesMap/StoresMapContainer';

const headerColor = '#39babd';
const activeColor = 'white';

// import * as snapshot from '../../utils/snapshot';
// snapshot.clearSnapshot();

// TabNavigator is nested inside StackNavigator
export const MainScreenNavigator = TabNavigator({
  Stores: {screen: StoresContainer},
  Favorites: {screen: FavoriteStoresContainer},
  StoresMap: {screen: StoresMapContainer},
  Color: {screen: ColorViewContainer}
}, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

MainScreenNavigator.navigationOptions = {
  // title: 'Loyalty App',
  headerTitleStyle: {color: 'white'},
  headerStyle: {
    backgroundColor: headerColor,
    elevation: 0 // disable header elevation when TabNavigator visible
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: MainScreenNavigator},
  stores: {screen: StoresContainer},
  Login: {screen: LoginContainer},
  InfiniteColorStack: {screen: ColorViewContainer}
});

export default AppNavigator;
