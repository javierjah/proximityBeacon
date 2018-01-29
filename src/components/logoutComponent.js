import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Modal,
  StyleSheet
} from 'react-native';

import {RkButton} from 'react-native-ui-kitten';
import {colors} from '../styles';
import {logoutText} from '../constants';

class logoutModalComponent extends Component {
  static displayName = 'logoutModalComponent';

  static propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    onYes: PropTypes.func
  };

  render() {
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.onClose}>
        <View style={styles.container}>
          <View style={styles.boxModal}>
            <View style={styles.boxModalInner}>
              <View style={styles.boxModalTitle}>
                <Text style={styles.boxModalTitleText}>
                  {logoutText}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <RkButton
                  rkType='danger'
                  style={styles.buttonAction}
                  onPress={() => this.props.onClose()}>
                  {'No'}
                </RkButton>
                <RkButton
                  rkType='success'
                  style={styles.buttonAction}
                  onPress={() => this.props.onYes()}>
                  {'Si'}
                </RkButton>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.modalBackground,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxModal: {
    backgroundColor: 'white',
    padding: 30,
    flexDirection: 'row',
    borderRadius: 20,
    minHeight: 250,
    borderWidth: 2
  },
  boxModalInner: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxModalTitle: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    flex: 1
  },
  boxModalTitleText: {
    fontSize: 15,
    textAlign: 'center'
  },
  buttonAction: {
    marginHorizontal: 10,
    flex: 1
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default logoutModalComponent;
