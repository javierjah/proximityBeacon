import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkCard
} from 'react-native-ui-kitten';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../styles';

const dateIcon = (<MaterialIcon name='date-range' size={30} color={'white'} />);
import moment from 'moment/min/moment-with-locales';
import {historyCasesData} from '../../constants';

moment.locale('es');

export class CaseHistoryView extends React.Component {
  static navigationOptions = {
    title: 'Historial de Casos'
  };

  constructor(props) {
    super(props);
    this.data = historyCasesData;
    this.renderItem = this._renderItem.bind(this);
  }

  _keyExtractor(post) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('CaseHistoryDetailed', {item: info.item})}>
        <RkCard rkType='shadowed' style={[styles.card, info.item.subtitle === 'Repellido' ? styles.repelledStyle : styles.contingencyStyle]}>
          <View rkCardHeader style={info.item.subtitle === 'Repellido' ? styles.repelledHeaderStyle : styles.contingencyHeaderStyle}>
            <View>
              <RkText style={styles.headerText} rkType='header'>{info.item.header}</RkText>
              <RkText style={styles.headerText} rkType='subtitle'>{info.item.subtitle}</RkText>
            </View>
          </View>
          <View style={{flexDirection: 'column'}} rkCardContent>
            <View style={{marginBottom: 10}}>
              <RkText
                style={[styles.textBody, {marginBottom: 5}]}>
                Nombre Cliente - Sucursal
              </RkText>
              <RkText
                style={styles.textBody}>
                Nombre PMC
              </RkText>
            </View>
            <View >
              <RkText style={{textAlign: 'center', color: 'white'}}>{info.item.text.slice(0, 200)}{'...'}</RkText>
            </View>
          </View>
          <View style={[styles.footer, info.item.subtitle === 'Repellido' ? styles.repelledHeaderStyle : styles.contingencyHeaderStyle]} rkCardFooter>
            {dateIcon}
            <RkText style={styles.footerText} rkType='subtitle'>{moment().format('LLLL')}</RkText>
          </View>
        </RkCard>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList
        data={this.data}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.alterBackground,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  card: {
    marginVertical: 8
  },
  footer: {
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    color: 'white',
    fontSize: 13,
    paddingLeft: 3
  },
  time: {
    marginTop: 5
  },
  repelledStyle: {
    backgroundColor: colors.success
  },
  contingencyStyle: {
    backgroundColor: colors.danger
  },
  repelledHeaderStyle: {
    backgroundColor: '#388E3C'
  },
  contingencyHeaderStyle: {
    backgroundColor: '#D32F2F'
  },
  headerText: {
    color: 'white'
  },
  textBody: {
    color: 'white',
    textAlign: 'left',
    fontWeight: '600'
  }
});

export default CaseHistoryView;
