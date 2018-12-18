import Hello from "../components/Hello";
import { connect } from 'react-redux';
import { selectColor } from "../selectors";

const mapStateToProps = (state) => ({
  name: selectColor(state),
});

const HelloColor = connect(mapStateToProps)(Hello);

export default HelloColor;