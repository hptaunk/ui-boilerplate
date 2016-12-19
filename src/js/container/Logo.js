// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, {Component, PropTypes} from 'react';
import SVGIcon from 'grommet/components/SVGIcon';

const CLASS_ROOT = 'logo-icon';

class Logo extends Component {
  render() {
    const {busy, className, colorIndex, size} = this.props;
    let classes = [CLASS_ROOT];
    if (busy) {
      classes.push(`${CLASS_ROOT}--busy`);
    }
    if (className) {
      classes.push(className);
    }
    return (
      <SVGIcon colorIndex={colorIndex} size={size} viewBox='0 0 48 48'
        version='1.1' type='logo' a11yTitle='HC380 Logo'
        className={classes.join('')}>
        <g dangerouslySetInnerHTML={{__html:this.props.children}} />
      </SVGIcon>
    );
  }

}

Logo.propTypes = {
  busy: PropTypes.bool,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'large'])
};

Logo.defaultProps = {
  colorIndex: 'brand'
};

module.exports = Logo;
