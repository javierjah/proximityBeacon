import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  RkButton,
  RkText
} from 'react-native-ui-kitten';

import Camera from 'react-native-camera';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const closeIcon = (<MaterialIcon name='close' size={40} color={'white'} />);
const shotIcon = (<MaterialIcon name='camera' size={60} color={'white'} />);

class cameraRollModal extends Component {
  static displayName = 'cameraRollModal';

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onCloseCameraRoll: PropTypes.func.isRequired,
    onTakePicture: PropTypes.func.isRequired,
    onTakePictureRequest: PropTypes.func
  };

  static defaultProps = {
    hasValidation: false
  };

  constructor(props) {
    super(props);

  }

  takePicture = () => {
    this.props.onTakePictureRequest();
    this.camera.capture()
      .then((data) => {
        this.props.onTakePicture(data.path);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.onCloseCameraRoll}>
        <View style={styles.container}>
          <View style={styles.closeButtonModal}>
            <RkButton rkType='clear medium' style={styles.closeButton} onPress={this.props.onCloseCameraRoll}>
              <RkText rkType='awesome hero accentColor'>{closeIcon}</RkText>
            </RkButton>
          </View>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            type={'back'}
            audio={true}
            playSoundOnCapture={true}
            captureTarget={Camera.constants.CaptureTarget.disk}>
            <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
              {shotIcon}
            </TouchableOpacity>
          </Camera>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(134, 134, 134, 0.5)',
    paddingHorizontal: 20
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: 'transparent',
    borderRadius: 5,
    padding: 10,
    margin: 40
  },
  closeButtonModal: {
    position: 'absolute',
    top: 20,
    zIndex: 9,
    right: 0
  },
  closeButton: {
    width: 70,
    height: 70
  }
});

export default cameraRollModal;
