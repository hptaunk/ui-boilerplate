import React, {Component, PropTypes} from 'react';
import UserMenu from './UserMenu';
import {Box} from '../grommet';
class HeaderMenu extends Component {
  render() {
    return (
      <Box pad="none" direction="row">
        <UserMenu />
      </Box>
    );
  }
}

HeaderMenu.propTypes = {

};

export default HeaderMenu;