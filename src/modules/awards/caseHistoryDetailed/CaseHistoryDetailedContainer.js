import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CaseHistoryDetailedView from './CaseHistoryDetailedView';
import {NavigationActions} from 'react-navigation';

export default connect(
  null,
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    };
  }
)(CaseHistoryDetailedView);
