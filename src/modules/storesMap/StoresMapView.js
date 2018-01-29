import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  appStyle,
  colors
} from '../../styles';
import {
  latitudeDelta,
  longitudeDelta,
  initGeolocation,
  storeMarkers
} from '../../constants';
import {SearchBar} from 'react-native-elements';
import MapView from 'react-native-maps';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const locationIcon = (<MaterialIcon name='location-on' size={26} color={colors.overlayBackground} />);
const myLocatinIcon = (<MaterialIcon name='my-location' size={30} color={colors.primary} />);
const INIT = 'init';

class StoresMapView extends Component {
  static displayName = 'StoresMap';

  static navigationOptions = () => {
    return {
      title: 'Mapa tiendas',
      tabBarIcon: locationIcon
    };
  }

  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.actionType = INIT;
    this.state = {
      modalLoading: false,
      modalVisible: false,
      mapRegion: initGeolocation
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    navigator.geolocation.getCurrentPosition((position) => {
      let coords = position.coords;
      // Zoom of map
      coords.latitudeDelta = latitudeDelta;
      coords.longitudeDelta = longitudeDelta;

      this.setState({mapRegion: coords});
    }, () => null,
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }

  openUrl(store) {
    Linking.openURL(store.website);
  }

  render() {
    const markerCalloutView = (store) => (
      <MapView.Callout style={styles.plainView}>
        <View style={styles.headerCalloutMarker}>
          <Text style={styles.headerCalloutMarkerText}>{store.name}</Text>
        </View>
        <View style={styles.bodyCalloutMarker}>
        {store.description ? <Text style={[styles.textBodyCalloutMarker, {maxWidth: appStyle.windowWidth * 0.9, marginBottom: 10}]}>{'Descripción: '}{store.description}</Text> : null}
        {store.website ? <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => this.openUrl(store)}>
        <Text style={styles.textBodyCalloutMarker}>{'Link: '}</Text>
        <Text style={[styles.textBodyCalloutMarker, {color: colors.primary}]}>{store.website}</Text>
        </TouchableOpacity> : null}
        {store.phone ? <Text style={styles.textBodyCalloutMarker}>{'Teléfono: '}{store.phone}</Text> : null}
        {store.address ? <Text style={styles.textBodyCalloutMarker}>{'Dirección: '}{store.address}</Text> : null}
        </View>
      </MapView.Callout>
    );

    const growMarkers = storeMarkers.map((store) => {
      const coordinate = {
        latitude: store.latitude,
        longitude: store.longitude
      };

      return (
        <MapView.Marker
          key={store.id}
          coordinate={coordinate}>
          {markerCalloutView(store)}
        </MapView.Marker>
      )
    });

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? <TouchableOpacity
          onPress={this.updatelocation}
          style={styles.buttonFlotant}>
          {myLocatinIcon}
        </TouchableOpacity> : null}
        <SearchBar
          lightTheme
          round
          cancelButtonTitle={'Cancelar'}
          onChangeText={() => null}
          onClearText={() => null}
          clearIcon={{color: '#86939e', name: 'clear'}}
          containerStyle={{width: appStyle.windowWidth}}
          placeholder='Buscar' />
        <MapView
          style={styles.map}
          loadingEnabled={true}
          showsUserLocation={true}
          region={this.state.mapRegion}>
          {growMarkers}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.alterBackground,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    flex: 1.4,
    width: appStyle.windowWidth
  },
  plainView: {
    flex: 1
  },
  textBodyCalloutMarker: {
    fontSize: 11
  },
  headerCalloutMarker: {
    borderBottomWidth: 1,
    borderBottomColor: colors.textSecondaryColor,
    marginBottom: 8
  },
  headerCalloutMarkerText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5
  },
  bodyCalloutMarker: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  buttonFlotant: {
    position: 'absolute',
    top: 65,
    right: 25,
    zIndex: 10,
    width: 35,
    height: 35,
    backgroundColor: colors.secondaryColor,
    borderRadius: 18,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StoresMapView;
