import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        {this.props.children}
      </svg>
    );
  }
});
