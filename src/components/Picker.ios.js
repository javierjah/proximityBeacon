import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Modal,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  Picker,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native';
import {stylePicker, colors} from '../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const {height: WINDOWS_HEIGHT} = Dimensions.get('window');

class ModalSimplePicker extends Component {
  static displayName = 'ModalSimplePicker';

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.object
    ]),
    value: PropTypes.any.isRequired,
    data: PropTypes.array.isRequired,
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string,
    titleText: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    enabled: PropTypes.bool
  };

  static defaultProps = {
    confirmBtnText: 'Confirmar',
    cancelBtnText: 'Cancelar'
  };

  constructor(props) {
    super(props);

    this.setModalVisible = this.setModalVisible.bind(this);
    this.onPressCancel = this.onPressCancel.bind(this);
    this.onPressConfirm = this.onPressConfirm.bind(this);
    this.onPickerPress = this.onPickerPress.bind(this);
    this.onPressOutModal = this.onPressOutModal.bind(this);

    this.state = {
      modalVisible: false,
      value: props.value,
      selectedValue: props.value
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onPressCancel() {
    this.setModalVisible(false);
  }

  onPressConfirm() {
    this.props.onConfirm(this.state.value.value);
    this.setModalVisible(false);
  }

  onPickerPress() {
    this.setModalVisible(true);
  }

  onValueChange(value) {
    this.setState({value: this.props.data[value]});
  }

  onPressOutModal() {
    this.setModalVisible(false);
  }

  render() {
    const selectIcon = (<MaterialIcon name='arrow-drop-down' size={35} color={!this.props.enabled ? 'black' : colors.disabled} />);
    const picker = (
      <Picker
        style={stylePicker.headLine}
        selectedValue={this.state.value.value}
        onValueChange={(value) => this.onValueChange(value)}>
        {this.props.data.map(({value, label}, i) => (
          <Picker.Item
            key={i}
            value={value}
            label={label} />
        )
        )}
      </Picker>
    );

    const cancelBtnText = (
      <TouchableOpacity
        underlayColor={'transparent'}
        onPress={this.onPressCancel}
        style={[stylePicker.btnText, stylePicker.btnCancel]}
      >
        <Text style={[stylePicker.btnTextText, stylePicker.btnTextCancel]}>
          {this.props.cancelBtnText}
        </Text>
      </TouchableOpacity>
    );

    const confirmBtnText = (
      <TouchableOpacity
        underlayColor={'transparent'}
        onPress={this.onPressConfirm}
        style={[stylePicker.btnText, stylePicker.btnConfirm]}
      >
        <Text style={stylePicker.btnTextText}>
          {this.props.confirmBtnText}
        </Text>
      </TouchableOpacity>
    );

    const isIconLoading = this.props.loading ? this.props.loading : false;

    return (
      <TouchableHighlight
        style={[styles.container, this.props.style]}
        underlayColor={'transparent'}
        onPress={!this.props.enabled ? this.onPickerPress : null}>
        <View>
          <View style={[
            stylePicker.pickerBody,
            !this.props.enabled ? {} : stylePicker.pickerBodyDisabled
          ]}>
            <View style={stylePicker.textBox}>
              <Text style={stylePicker.title}>
                {this.props.titleText}
              </Text>

              <Text style={[
                stylePicker.label,
                !this.props.enabled ? {} : stylePicker.textDisabled
              ]}>
                {this.props.value.label}
              </Text>
            </View>
            <View style={stylePicker.icon}>
              {isIconLoading ? <ActivityIndicator /> : selectIcon}
            </View>
          </View>

          <Modal
            transparent={true}
            animationType={'fade'}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.setModalVisible(false);}}>
              <TouchableHighlight
                style={styles.overlay}
                activeOpacity={1}
                underlayColor={'#00000077'}
                onPress={this.onPressOutModal}
              >
                <TouchableHighlight
                  underlayColor={'#fff'}
                  style={{flex: 1}}
                >
                  <View style={styles.pickerContainer}>
                    <View style={styles.headBar} />
                    {picker}
                    {cancelBtnText}
                    {confirmBtnText}
                  </View>
                </TouchableHighlight>
              </TouchableHighlight>
          </Modal>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%'
  },
  overlay: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  pickerContainer: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: WINDOWS_HEIGHT * 0.4
  },
  headBar: {
    position: 'absolute',
    top: 20,
    height: 25,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    width: '100%'
  }
});

export default ModalSimplePicker;

