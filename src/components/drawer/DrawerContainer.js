
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DrawerView from './DrawerView';
import {NavigationActions} from 'react-navigation';
import {initializeSessionState, setLogoutVisible} from '../../modules/session/SessionState';

export default connect(
  state => ({
    type: state.getIn(['session', 'type'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      logout: bindActionCreators(initializeSessionState, dispatch),
      setLogoutVisible: bindActionCreators(setLogoutVisible, dispatch)
    };
  }
)(DrawerView);
