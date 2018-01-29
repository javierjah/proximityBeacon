import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet
} from 'react-native';

import LoadingComponent from '../../../components/loadingComponent';

import {
  RkButton,
  RkText,
  RkTextInput
} from 'react-native-ui-kitten';

class ForgotPasswordView extends Component {
  static displayName = 'ForgotPassword';

  static navigationOptions = {
    gesturesEnabled: false
  };

  static propTypes = {
    back: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.titles = ['Para recuperar', 'tu contraseña', 'revisa tu email'];

    this.state = {
      modalVisible: false,
      modalLoading: false
    };
  }

  back = () => {
    this.props.back();
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible, modalLoading: true});
    setTimeout(() => {
      this.setState({modalLoading: false});
    }, 2000);
  }

  render() {
    const headText = 'Recuperar mi contraseña';
    const subtitleText = 'Ingresa el email de usuario';
    const buttonText = 'Recuperar Contraseña';
    const loadingtext = 'Recuperando Contraseña';
    return (
      <View style={[styles.container, {backgroundColor: 'white'}]}>
        <View style={styles.headContainer}>
          <RkText rkType='awesome hero accentColor' style={{fontSize: 20, paddingVertical: 50}}>{headText}</RkText>
          <RkText rkType='awesome hero accentColor'>{subtitleText}</RkText>
        </View>
        <View style={styles.inputBox}>
          <RkTextInput rkType='rounded' placeholder='Email'/>
          <RkButton
            style={styles.buttonAction}
            rkType='rounded large'
            onPress={() => this.setModalVisible(true)}>
            {buttonText}
          </RkButton>
        </View>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkButton rkType='clear'>
              <RkText rkType='header6' onPress={() => this.back()} style={{fontSize: 14}}>Volver</RkText>
            </RkButton>
          </View>
        </View>

        <LoadingComponent
          visible={this.state.modalVisible}
          onClose={this.back}
          isLoading={this.state.modalLoading}
          hasValidation={false}
          titles={this.titles}
          loadingText={loadingtext}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAction: {
    width: '95%',
    backgroundColor: '#c5c5c5'
  },
  inputBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  footer: {
    justifyContent: 'center',
    flex: 1
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

export default ForgotPasswordView;
