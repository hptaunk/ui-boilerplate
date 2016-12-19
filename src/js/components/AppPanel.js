import React, {Component, PropTypes} from 'react';
import {Article, Box, Header} from '../grommet';
import HeaderMenu from './HeaderMenu';
const CLASS_ROOT = "app-panel"
class AppPanel extends Component {
  render() {
    const {headnode, headerStyle, bodyStyle, children} = this.props;
    let head = undefined;
    if (headnode) {
      head = headnode
    } 

    return (
      <Article>
        <Header {...headerStyle}>
          {head}
          <HeaderMenu />
        </Header>
        <Box ref='content' {...bodyStyle}>
          {children}
        </Box>
      </Article>
    );
  }
}

AppPanel.propTypes = {
  title: PropTypes.string,
  headnode: PropTypes.node,
  headerStyle: PropTypes.shape({colorIndex: PropTypes.string}),
  bodyStyle: PropTypes.shape({colorIndex: PropTypes.string, direction: PropTypes.oneOf(['row', "column"]), })
};

AppPanel.defaultProps = {
  headerStyle: {
    separator: "bottom",
    size: "large",
    pad: {horizontal: 'small'},
    colorIndex: "neutral-1",
    justify: "between"
  },
  bodyStyle: {
    colorIndex: "light-1",
    direction: "column",
    pad: 'small'
  }
};

export default AppPanel;