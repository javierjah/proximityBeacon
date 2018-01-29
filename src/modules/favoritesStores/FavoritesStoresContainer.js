import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FavoritesStoresView from './FavoritesStoresView';
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
)(FavoritesStoresView);
