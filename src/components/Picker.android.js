import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Picker
} from 'react-native';
import {stylePicker, colors} from '../styles';
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
    onConfirm: PropTypes.func.isRequired,
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
    this.props.onConfirm(this.state.value);
    this.setModalVisible(false);
  }

  onPickerPress() {
    this.setModalVisible(true);
  }

  onValueChange(value) {
    this.setState({value: this.props.data[value]});
    this.props.onConfirm(value);
  }

  onPressOutModal() {
    this.setModalVisible(false);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Picker
          mode='dropdown'
          style={stylePicker.headLine}
          selectedValue={this.state.value.value}
          onValueChange={(value) => this.onValueChange(value)}
          enabled={!this.props.enabled}>
          {this.props.data.map(({value, label}, i) => (
            <Picker.Item
              key={i}
              value={value}
              label={label} />
          )
          )}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: 'flex-end'
  }
});

export default ModalSimplePicker;

