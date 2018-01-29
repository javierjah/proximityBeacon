import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StoresMapView from './StoresMapView';
import {NavigationActions} from 'react-navigation';

export default connect(
  state => ({
    loading: state.getIn(['stores', 'loading'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    };
  }
)(StoresMapView);
