import React, {Component, PropTypes} from 'react';
import {App, Split} from '../grommet';
import NavBar from './NavBar';

const CLASS_ROOT = "app";
class Layout extends Component {
  _renderMenu() {
    return <NavBar />;
  }

  render() {
    return (
      <App centered={false} className={CLASS_ROOT}>
        <Split flex='right' priority="left" fixed={true} className={CLASS_ROOT+ "_split"}>
          {this._renderMenu()}
          {this.props.children}
        </Split>
      </App>
    );
  }
}

Layout.propTypes = {

};

export default Layout;
