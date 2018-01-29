import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginView from './LoginView';
import {login} from '../session/SessionState';
import {NavigationActions} from 'react-navigation';

export default connect(
  state => ({
    loading: state.getIn(['session', 'loading']),
    isReady: state.getIn(['session', 'isReady'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      login: bindActionCreators(login, dispatch)
    };
  }
)(LoginView);
