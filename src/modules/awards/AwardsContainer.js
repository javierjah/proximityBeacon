import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import caseHistoryView from './caseHistoryView';
import {NavigationActions} from 'react-navigation';

export default connect(
  state => ({
    loading: state.getIn(['repelledCase', 'loading'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      back: bindActionCreators(NavigationActions.back, dispatch),
      setParams: bindActionCreators(NavigationActions.setParams, dispatch)
    };
  }
)(caseHistoryView);
