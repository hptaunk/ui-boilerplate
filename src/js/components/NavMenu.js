import React, {Component} from 'react';
import {Anchor, Menu} from '../grommet';
class NavMenu extends Component {

  _onClick (event) {
    event.preventDefault();
    history.push(this.props.path);
  }

  render() {
    const { items } = this.props;
    var links = items.map((page) => {
      return (
        <Anchor key={page.label} href={page.path} label={page.label} />
      );
    });

    return (
      <Menu primary={true}>
        {links}
      </Menu>
    );
  }
}

export default NavMenu;
