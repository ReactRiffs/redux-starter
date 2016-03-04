import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class BandList extends React.Component {

  render(){
    const { bands, band, onBandNameChange, bandSaved } = this.props;
    return(
      <div>
        <h1>React Riffs</h1>
        <ul>
          {bands.map((band, index) => {
            return <li key={index}>{band}</li>
          })}
        </ul>
        <input
          ref={field => { this.bandField = field }}
          type="text"
          value={band}
          onChange={() => onBandNameChange(this.bandField.value)}/>
        <button onClick={() => bandSaved(band)}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands,
    band: state.band
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BandList);
