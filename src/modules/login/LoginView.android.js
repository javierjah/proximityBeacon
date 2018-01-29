import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Modal,
  Text,
  StyleSheet,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import {
  RkButton,
  RkText,
  RkAvoidKeyboard,
  RkTextInput
} from 'react-native-ui-kitten';
import {
  PMC,
  PMC_BOSS,
  VISIT,
  ADMIN_ANIMAL_PROTECTION,
  SPOT_CLIENT_BOSS,
  ENTERPRISE_CLIENT
} from '../../constants';

import {appStyle} from '../../styles';
import LoadingComponent from '../../components/loadingComponent.js';
import {loadingText, succesCaseText} from '../../constants';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const checkIcon = (<FontAwesomeIcon name='check' size={70} color={'black'} />);
const userIcon = (<MaterialIcon name='account-circle' size={30} color={'black'} />);
const passIcon = (<MaterialIcon name='vpn-key' size={30} color={'black'} />);

class LoginView extends Component {
  static displayName = 'LoginView';

  static navigationOptions = () => {
    return {
      title: 'Login',
      gesturesEnabled: false,
      headerLeft: null
    };
  };

  static propTypes = {
    navigate: PropTypes.func.isRequired,
    isReady: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      visible: false,
      success: false,
      modalLoading: false,
      modalVisible: false,
      email: ''
    };

    this.emailTextChange = this.emailTextChange.bind(this);
  }

  forgotPassword = () => {
    this.setState({visible: true});
  };

  initSession = () => {
    if (this.props.isReady) {
      this.props.navigate({routeName: 'Home'});
    } else if (this.state.email === PMC) {
      this.props.login(PMC);
      this.props.navigate({routeName: 'Home'});
    } else if (this.state.email === PMC_BOSS) {
      this.props.login(PMC_BOSS);
      this.props.navigate({routeName: 'Home'});
    } else if (this.state.email === VISIT) {
      this.props.login(VISIT);
      this.props.navigate({routeName: 'Home'});
    } else if (this.state.email === ADMIN_ANIMAL_PROTECTION) {
      this.props.login(ADMIN_ANIMAL_PROTECTION);
      this.props.navigate({routeName: 'Home'});
    } else if (this.state.email === SPOT_CLIENT_BOSS) {
      this.props.login(SPOT_CLIENT_BOSS);
      this.props.navigate({routeName: 'Home'});
    } else if (this.state.email === ENTERPRISE_CLIENT) {
      this.props.login(ENTERPRISE_CLIENT);
      this.props.navigate({routeName: 'Home'});
    } else {
      this.props.login('PMC');
      this.props.navigate({routeName: 'Home'});
    }
  };

  closeModal = () => {
    this.setState({modalVisible: false});
  }
  back = () => {
    this.setState({visible: false});
  }

  setLoading = () => {
    this.setState({loading: true});

    setTimeout(() => {
      this.setState({loading: false, success: true});
    }, 1000);
  }

  loadingView = () => (
    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size='large'/>
      <Text style={{marginTop: 15}}>{'Recuperando Contraseña ...'}</Text>
    </View>
  );

  successValidation = () => {
    this.setState({success: false, visible: false});
  }

  forgotPasswordView = () => {
    const forgotPasswordHeadText = 'Recuperar mi contraseña';
    const forgotPAsswordButtonText = 'Recuperar Contraseña';

    if (this.state.success) {
      return (
        <View style={{backgroundColor: 'white', padding: 30, flexDirection: 'row', borderRadius: 20, minHeight: 250, borderWidth: 2}}>
          <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center', justifyContent: 'center', width: '100%'}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                {checkIcon}
              </View>
              <View style={{flexDirection: 'column', flex: 2}}>
                <Text>{'Para recuperar tu contraseña revisa tu email'}</Text>
              </View>
            </View>
            <RkButton
              onPress={() => this.successValidation()}>
              {'Aceptar'}
            </RkButton>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.container, {backgroundColor: 'white'}]}>
          <View style={styles.headContainerModal}>
            <RkText rkType='awesome hero accentColor' style={{fontSize: 20, paddingVertical: 50}}>{forgotPasswordHeadText}</RkText>
            <RkText rkType='awesome hero accentColor'>{'Ingresa el email de usuario'}</RkText>
          </View>
          <View style={styles.inputBox}>
            <RkTextInput
              rkType='rounded'
              placeholder='Email'
              keyboardType='email-address'
              clearButtonMode='while-editing'/>
            <RkButton
              rkType='rounded xlarge'
              onPress={() => this.setLoading(true)}>
              {forgotPAsswordButtonText}
            </RkButton>
          </View>
          <View style={styles.footerForgot}>
            <View style={styles.textRow}>
              <RkButton rkType='clear'>
                <RkText rkType='header6' onPress={() => this.back()} style={{fontSize: 14}}>Volver</RkText>
              </RkButton>
            </View>
          </View>

          <LoadingComponent
            visible={this.state.modalVisible}
            onClose={this.closeModal}
            isLoading={this.state.modalLoading}
            hasValidation={false}
            titles={succesCaseText}
            loadingText={loadingText}
          />
      </View>
      );
    }
  }

  emailTextChange = (email) => {
    this.setState({email});
  }

  render() {
    const buttonText = 'Iniciar Sesión';
    const headText = 'Ingresa con tu cuenta';

    return (
      <View style={[styles.container, {backgroundColor: 'white'}]}>
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <Image
              style={{width: appStyle.windowWidth, height: appStyle.windowHeight * 0.38}}
              source={require('../../assets/images/backgroundLoginV1.png')}
            />
          </View>
          <View style={{flex: 0.1, width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
            <RkText style={{fontSize: 15}} rkType='awesome hero accentColor'>{headText}</RkText>
          </View>
          <RkAvoidKeyboard
            onStartShouldSetResponder={() => true}
            onResponderRelease={() => Keyboard.dismiss()}
            style={styles.inputBox}>
            <RkTextInput
              rkType='rounded'
              placeholder='Usuario'
              labelStyle={styles.iconInputLabel}
              label={userIcon}
              keyboardType='email-address'
              clearButtonMode='while-editing'
              value={this.state.email}
              onChangeText={this.emailTextChange}
              />
            <RkTextInput
              rkType='rounded'
              labelStyle={styles.iconInputLabel}
              label={passIcon}
              placeholder='Contraseña'
              secureTextEntry={true}
              clearButtonMode='while-editing'/>
            <RkButton
              rkType='success rounded xlarge'
              onPress={this.initSession}
              disabled={this.props.loading}>
              {this.props.loading ? <ActivityIndicator size='large' color='white' /> : buttonText }
            </RkButton>
          </RkAvoidKeyboard>
        </View>
        <View style={styles.footer}>
          <RkButton
            onPress={() => this.forgotPassword()}
            rkType='clear'>
            <RkText style={{fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>
              ¿Olvidó su contraseña?
            </RkText>
          </RkButton>
        </View>

        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.visible}
          onRequestClose={this.closeModal}>
          <View style={[styles.containerModal , {backgroundColor: 'white', paddingHorizontal: 20}]}>
            {this.state.loading ? this.loadingView() : this.forgotPasswordView()}
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  headContainer: {
    flex: 1.2
  },
  button: {
    marginVertical: 15,
    width: 50
  },
  footer: {
    width: '100%',
    justifyContent: 'center',
    flex: 0.2
  },
  footerForgot: {
    width: '100%',
    justifyContent: 'center',
    flex: 0.7
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headContainerModal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconInputLabel: {
    color: 'gray',
    marginLeft: 10,
    fontSize: 20
  },
  inputBox: {
    width: '90%'
  }
});

export default LoginView;
