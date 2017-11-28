import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className="title-bar__subitile">{this.props.subtitle}</h2>
    }
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
};

//define the type of props (see react doc) gives a warning in console
TitleBar.propTypes = {
  title: PropTypes.string.isRequired
};
