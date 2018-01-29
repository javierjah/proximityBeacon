import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment/min/moment-with-locales';
import {CachedImage} from 'react-native-img-cache';
import Swiper from 'react-native-swiper';
import {colors, appStyle} from '../../../styles';

const dateIcon = (<MaterialIcon name='date-range' size={30} color={colors.textSecondary} />);

moment.locale('es');

class CaseHistoryDetailesView extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = ({navigation}) => {
    const {state} = navigation;

    return ({
      title: `Caso nº ${state.params.item.id}`
    });
  };

  constructor(props) {
    super(props);
    let {params} = props.navigation.state;

    if (params) {
      this.data = params.item;
    } else {
      this.data = {
        'id': 1,
        'photo': require('../../../assets/images/backgroundLoginV1.png'),
        'header': 'Caso nº 1',
        'client': 'Ciente 1',
        'spot': 'Sucursal 1',
        'location': 'Fuera del mall',
        'caseType': 'Repellido',
        'pmcName': 'Javier Jah',
        'time': moment().format('LLLL'),
        'text': 'Ferns are a very old group of plants. They first appeared on Earth in the middle Devonian Era about 360 million years ago, just before the Carboniferous Era. Most of the modern fern families we see today first appeared in the Late Cretaceous about 45 or 50 million years ago – during the age of the dinosaurs!'
      };
    }

  }

  render() {
    const images = [
      require('../../../assets/images/backgroundLoginV1.png'),
      require('../../../assets/images/backgroundLoginV1DarkTheme.png'),
      require('../../../assets/images/kittenImage.png')
    ];

    const imagesViews = images.map((image, index) => {
      return (
        <View
          style={styles.swiperSlide}
          key={index}>
          <CachedImage
            style={{
              height: appStyle.windowWidth,
              width: appStyle.windowWidth
            }}
            source={image}
          />
      </View>);
    });

    return (
      <ScrollView contentContainerStyle={styles.root}>
        <RkCard>
          {imagesViews.length !== 0 ? <Swiper
            style={styles.swiper}
            height={appStyle.windowWidth}
            showsButtons={true}
            loop={false}
            dot={<View style={styles.swiperDot} />}
            activeDot={<View style={styles.swiperActiveDot} />}>
            {imagesViews}
          </Swiper> : null}

          <View style={{borderBottomColor: colors.border, borderBottomWidth: 1}} rkCardHeader>
            <View>
              <RkText style={styles.title} rkType='header'>{this.data.client}{' - '}{this.data.spot}</RkText>
              <View style={styles.subtitle}>
                <RkText rkType='subtitle'>{'Lugar o ubicación: '}</RkText>
                <RkText>{this.data.location}</RkText>
              </View>
              <View style={styles.subtitle}>
                <RkText rkType='subtitle'>{'Tipo de Caso: '}</RkText>
                <RkText >{this.data.caseType}</RkText>
              </View>
              <View style={styles.subtitle}>
                <RkText rkType='subtitle'>{'Nombre PMC: '}</RkText>
                <RkText >{this.data.pmcName}</RkText>
              </View>
            </View>
          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
            </View>
          </View>
          <View style={styles.footer} rkCardFooter>
            {dateIcon}
            <RkText rkType='subtitle'>{this.data.time}</RkText>
          </View>
        </RkCard>
      </ScrollView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5,
    color: 'white'
  },
  subtitle: {
    flexDirection: 'row'
  },
  footer: {
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border
  },
  swiper: {
    backgroundColor: 'white'
  },
  swiperDot: {
    top: 45,
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 4,
    height: 4,
    borderRadius: 2,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  swiperActiveDot: {
    top: 45,
    backgroundColor: colors.background,
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  swiperSlide: {
    height: appStyle.windowWidth,
    backgroundColor: 'white'
  }
}));

export default CaseHistoryDetailesView;
