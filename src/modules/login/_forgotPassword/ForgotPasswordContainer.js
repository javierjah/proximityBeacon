import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ForgotPasswordView from './ForgotPasswordView';
import {NavigationActions} from 'react-navigation';

export default connect(
  state => ({
    loading: state.getIn(['login', 'loading'])
  }),
  dispatch => {
    return {
      back: bindActionCreators(NavigationActions.back, dispatch)
    };
  }
)(ForgotPasswordView);
