import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const checkIcon = (<FontAwesomeIcon name='check' size={70} color={'black'} />);

class LoadingComponent extends Component {
  static displayName = 'LoadingComponent';

  static propTypes = {
    titles: PropTypes.array.isRequired,
    loadingText: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    titlesSuccess: PropTypes.array,
    hasValidation: PropTypes.bool,
    onYes: PropTypes.func
  };

  static defaultProps = {
    hasValidation: false
  };

  constructor(props) {
    super(props);

    this.state = {
      showValidation: true
    };

    this.onYes = this.onYes.bind(this);
    this.successValidation = this.successValidation.bind(this);
  }

  onYes() {
    this.props.onYes();
    this.setState({showValidation: false});
  }

  next() {
    this.setState({showValidation: false});
  }

  successValidation() {
    this.setState({showValidation: true});
    this.props.onClose();
  }

  title = () => this.props.titles.map((t, key) => (
    <Text key={key} style={{fontSize: 15}}>{t}</Text>
  ));

  titleSuccess = () => this.props.titlesSuccess.map((t, key) => (
    <Text key={key} style={{fontSize: 15}}>{t}</Text>
  ));

  loadingView = () => (
    <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size='large' />
      <Text style={{marginTop: 15}}>{this.props.loadingText}</Text>
    </View>
  );

  succesView = () => (
    <View style={styles.loadingBox}>
      <View style={styles.loadingBoxBody}>
        <View style={{flex: 1, alignItems: 'center'}}>
          {checkIcon}
        </View>
        <View style={{flexDirection: 'column', flex: 1}}>
        {this.title()}
        </View>
      </View>
      <Button onPress={() => this.props.onClose()}>
        {'Aceptar'}
      </Button>
    </View>
  );

  succesValidationView = () => (
    <View style={styles.loadingBox}>
      <View style={styles.loadingBoxBody}>
        <View style={{flex: 0.9, alignItems: 'center'}}>
          {checkIcon}
        </View>
        <View style={{flexDirection: 'column', flex: 2}}>
        {this.titleSuccess()}
        </View>
      </View>
      <Button onPress={() => this.successValidation()}>
        {'Aceptar'}
      </Button>
    </View>
  );

  viewWithValidation = () => {
    if (this.state.showValidation) {
      return (
        <View style={styles.loadingBox}>
          <View style={styles.loadingBoxBody}>
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              {this.title()}
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button
              rkType='danger'
              style={styles.buttonAction}
              onPress={() => this.props.onClose()}>
              {'No'}
            </Button>
            <Button
              rkType='success'
              style={styles.buttonAction}
              onPress={() => this.onYes()}>
              {'Si'}
            </Button>
          </View>
        </View>
      );
    } else {
      return this.props.isLoading ? this.loadingView() : this.succesValidationView();
    }
  };

  view = () => {
    if (!this.props.hasValidation) {
      return this.props.isLoading ? this.loadingView() : this.succesView();
    } else {
      return this.viewWithValidation();
    }
  };

  render() {
    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.onClose}>
        <View style={[styles.container , {backgroundColor: 'rgba(134, 134, 134, 0.5)', paddingHorizontal: 20}]}>
          <View style={{backgroundColor: 'white', padding: 10, flexDirection: 'row', borderRadius: 20, minHeight: 250, borderWidth: 2}}>
            {this.view()}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAction: {
    marginHorizontal: 10,
    flex: 1
  },
  textRow: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  loadingBox: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingBoxBody: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});

export default LoadingComponent;
