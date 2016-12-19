'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Drop from 'grommet/utils/Drop';
import {Anchor, Box, Heading, Menu, UserIcon} from "../grommet";

class UserMenu extends Component {
  constructor (props) {
    super(props);

    this._onLogout = () => {return null};
  }

  render() {
    const {userName, email, dropAlign, colorIndex} = this.props;
    return (
      <Menu icon={<UserIcon />} dropAlign={dropAlign}
        colorIndex={colorIndex} a11yTitle="Session">
        <Box pad="medium">
          <Heading tag="h3" margin="none">{userName}</Heading>
        </Box>
        <Anchor href="#" onClick={this._onLogout} label="Logout" />
      </Menu>
    );
  }
}

UserMenu.defaultProps  = {
  email: null,
  token: null,
  dropAlign: {right: "right"}
};

UserMenu.propTypes = {
  dropAlign: Drop.alignPropType,
  token: PropTypes.string,
  email: PropTypes.string
};

let select = (state) => state.session;
export default connect(select)(UserMenu);
