import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StoresView from './StoresView';
import {NavigationActions} from 'react-navigation';
import * as StoresStateActions from './StoresState';

export default connect(
  state => ({
    counter: state.getIn(['stores', 'value']),
    loading: state.getIn(['stores', 'loading'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      storesStateActions: bindActionCreators(StoresStateActions, dispatch)
    };
  }
)(StoresView);
