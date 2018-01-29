import * as React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import SafeAreaView from '../SafeAreaView';
import TouchableItem from '../TouchableItem';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  PMC,
  PMC_BOSS,
  VISIT,
  ADMIN_ANIMAL_PROTECTION,
  SPOT_CLIENT_BOSS,
  ENTERPRISE_CLIENT
} from '../../constants';
import {colors} from '../../styles';

const userIcon = (<MaterialIcon name='account-circle' size={50} color={'white'} />);

class DrawerNavigatorItems extends React.Component {
  static displayName = 'DashboardNavigator';

  static navigationOptions = {
    title: 'Manejo Ético Animal'
  }

  static propTypes = {
    navigate: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    setLogoutVisible: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    activeItemKey: PropTypes.string.isRequired,
    activeTintColor: PropTypes.string.isRequired,
    activeBackgroundColor: PropTypes.string.isRequired,
    inactiveTintColor: PropTypes.string.isRequired,
    inactiveBackgroundColor: PropTypes.string.isRequired,
    getLabel: PropTypes.func.isRequired,
    renderIcon: PropTypes.func.isRequired,
    onItemPress: PropTypes.func.isRequired,
    itemsContainerStyle: PropTypes.object.isRequired,
    itemStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    iconContainerStyle: PropTypes.object.isRequired,
    drawerPosition: PropTypes.oneOf(['left', 'right']),
    type: PropTypes.string.isRequired
  };

  navigate = (route, focused) => {
    console.log('route:', route);
    console.log('focused:', focused);
    this.props.onItemPress({route, focused});
  }

  drawerRow = (route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle) => (
    <TouchableItem
      key={route.key}
      onPress={() => this.navigate(route, focused)}
      delayPressIn={0}
    >
      <SafeAreaView
        style={{backgroundColor}}
        forceInset={{
          [drawerPosition]: 'always',
          [drawerPosition === 'left' ? 'right' : 'left']: 'never',
          vertical: 'never'
        }}
      >
        <View style={[styles.item, itemStyle]}>
          {icon ? (
            <View
              style={[
                styles.icon,
                focused ? null : styles.inactiveIcon,
                iconContainerStyle
              ]}
            >
              {icon}
            </View>
          ) : null}
          {typeof label === 'string' ? (
            <Text style={[styles.label, {color}, labelStyle]}>
              {label}
            </Text>
          ) : (
            label
          )}
        </View>
      </SafeAreaView>
    </TouchableItem>
  )

  render() {
    const {
      navigation,
      items,
      activeItemKey,
      activeTintColor,
      activeBackgroundColor,
      inactiveTintColor,
      inactiveBackgroundColor,
      getLabel,
      renderIcon,
      itemsContainerStyle,
      itemStyle,
      labelStyle,
      iconContainerStyle,
      drawerPosition,
      setLogoutVisible,
      type
    } = this.props;

    const buttons = items.map((route, index) => {
      const focused = activeItemKey === route.key;
      const color = focused ? activeTintColor : inactiveTintColor;
      const backgroundColor = focused
        ? activeBackgroundColor
        : inactiveBackgroundColor;
      const scene = {route, index, focused, tintColor: color};
      const icon = renderIcon(scene);
      const label = getLabel(scene);

      let geolocationButton = false;
      let repelledAnimalButton = false;
      let dailyReportButton = false;
      let contingencyButton = false;
      let checkListButton = false;
      let historyCasesButton = false;
      let interviewButton = false;

      let dailyReportRecordButton;
      let workDayRecordButton = false;
      let interviewRecordButton = false;
      let clientBossButtonDasboard = false;

      if (type === PMC) {
        geolocationButton = true;
        repelledAnimalButton = true;
        dailyReportButton = true;
        contingencyButton = true;
      } else if (type === PMC_BOSS) {
        geolocationButton = true;
        repelledAnimalButton = true;
        dailyReportButton = true;
        contingencyButton = true;
        historyCasesButton = true;
        checkListButton = true;
      } else if (type === VISIT) {
        geolocationButton = true;
        interviewButton = true;
      } else if (type === ADMIN_ANIMAL_PROTECTION) {
        geolocationButton = true;
        historyCasesButton = true;
        dailyReportRecordButton = true;
        interviewRecordButton = true;
        workDayRecordButton = true;
        repelledAnimalButton = true;
        dailyReportButton = true;
        contingencyButton = true;
      } else if (type === SPOT_CLIENT_BOSS) {
        clientBossButtonDasboard = true;
        dailyReportRecordButton = true;
        interviewRecordButton = true;
        workDayRecordButton = true;
      } else if (type === ENTERPRISE_CLIENT) {
        clientBossButtonDasboard = true;
        dailyReportRecordButton = true;
        interviewRecordButton = true;
        workDayRecordButton = true;
      }

      if (label !== 'Login') {
        if (label === 'Menu') {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Jornada Laboral' && geolocationButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Caso Repelido' && repelledAnimalButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Reporte Diario' && dailyReportButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Contingencia' && contingencyButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Historial de Casos' && historyCasesButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Check List' && checkListButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Entrevista' && interviewButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Reportes' && dailyReportRecordButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Entrevistas' && interviewRecordButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Jornadas' && workDayRecordButton) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Panel de Control' && clientBossButtonDasboard) {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else if (label === 'Perfil') {
          return this.drawerRow(route, focused, backgroundColor, drawerPosition, itemStyle, icon, iconContainerStyle, color, label, labelStyle);
        } else {
          return null;
        }
      } else {
        return null;
      }
    });

    const logOutButton = (
      <TouchableItem
        onPress={() => {
          navigation.navigate('DrawerClose');
          return setLogoutVisible(true);
        }}
        delayPressIn={0}
      >
        <SafeAreaView
          style={{backgroundColor: inactiveBackgroundColor}}
          forceInset={{
            [drawerPosition]: 'always',
            [drawerPosition === 'left' ? 'right' : 'left']: 'never',
            vertical: 'never'
          }}
        >
          <View style={[styles.item, itemStyle]}>
            {/*icon ? (
              <View
                style={[
                  styles.icon,
                  focused ? null : styles.inactiveIcon,
                  iconContainerStyle
                ]}
              >
                {icon}
              </View>
            ) : null*/}
            <Text style={[styles.label, {color: inactiveTintColor}, labelStyle]}>
              {'Cerrar Sesión'}
            </Text>
          </View>
        </SafeAreaView>
      </TouchableItem>
    );

    const header = (
        <SafeAreaView
          style={{backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center', minHeight: 120}}
          forceInset={{
            [drawerPosition]: 'always',
            [drawerPosition === 'left' ? 'right' : 'left']: 'never',
            vertical: 'never'
          }}>
          <View style={styles.iconHeader}>
            {userIcon}
          </View>
          <Text style={styles.labelHeader}>
            {type}
          </Text>
        </SafeAreaView>
    );

    return (
      <ScrollView>
        <SafeAreaView style={[styles.container, itemsContainerStyle]} forceInset={{top: 'always', horizontal: 'never'}}>
          {header}
          {buttons}
          {logOutButton}
        </SafeAreaView>
      </ScrollView>
    );
  }
}


/* Material design specs - https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs */
DrawerNavigatorItems.defaultProps = {
  activeTintColor: '#233241',
  activeBackgroundColor: 'rgba(0, 0, 0, .04)',
  inactiveTintColor: 'rgba(0, 0, 0, .87)',
  inactiveBackgroundColor: 'transparent'
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center'
  },
  iconHeader: {
    marginHorizontal: 16,
    width: '100%',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62
  },
  label: {
    margin: 16,
    fontWeight: 'bold'
  },
  labelHeader: {
    margin: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default DrawerNavigatorItems;
