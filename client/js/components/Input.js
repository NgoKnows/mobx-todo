import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

class Input extends Component {
    render() {
        const { value, placeholder, handleChange, handleKeyUp } = this.props;

        return (
            <div style={{ width: '100%', margin: 30 }}>
                <input
                    style={STYLES}
                    onChange={handleChange}
                    value={value}
                    placeholder={placeholder}
                    onKeyUp={handleKeyUp}
                />
            </div>
        );
    }
}

const STYLES = {
    width: '100%',
    fontSize: '52px',
    padding: '12px',
    fontFamily: 'Lato',
    fontWeight: 300,
    letterSpacing: '2px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
};

Input.propTypes = {
    value        : PropTypes.string.isRequired,
    placeholder  : PropTypes.string.isRequired,
    handleChange : PropTypes.func.isRequired,
    handleKeyUp  : PropTypes.func.isRequired
};

export default Radium(Input);
