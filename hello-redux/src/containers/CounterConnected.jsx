import Counter from '../components/Counter';
import { connect }  from 'react-redux';
import { counterIncrement } from '../actions';
import { selectCount } from '../selectors';

const mapStateToProps = (state) => ({
  count: selectCount(state),
});


const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(counterIncrement()),
});

const CounterConnected = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterConnected;