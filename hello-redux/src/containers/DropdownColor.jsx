import Dropdown from "../components/Dropdown";
import { connect } from 'react-redux';
import { selectColor } from "../selectors";
import { colorSelect } from "../actions";

const mapStateToProps = (state) => ({
  selected: selectColor(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSelected: (item) => dispatch(colorSelect(item)),
});

const DropdownColor = connect(mapStateToProps, mapDispatchToProps)(Dropdown);

export default DropdownColor;