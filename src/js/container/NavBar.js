import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Header, Sidebar, Title} from '../grommet';
import NavMenu from '../components/NavMenu';
import Logo from './Logo';
const CLASS_ROOT = "nav-bar";
class NavBar extends Component {

  render() {
    const {headerStyle, index: {title, logo, logoStyle}, nav: {navmenu}} = this.props;

    return (
      <Sidebar className={CLASS_ROOT} fixed={true} size="small" separator="right" colorIndex="brand" >
        <Header {...headerStyle}>
          <Title>
            <Logo className={CLASS_ROOT + "_logo"} {...logoStyle}> {logo} </Logo>
            {title}
          </Title>
        </Header>
        <NavMenu items={navmenu} /> 
      </Sidebar>
    );
  }
}

NavBar.propTypes = {
  logo: PropTypes.node,
  title: PropTypes.string
};

NavBar.defaultProps = {
  headerStyle: {
    separator: "bottom",
    size: "large",
    pad: {horizontal: 'small'},
    // colorIndex: "neutral-1",
    justify: "between"
  }
}

let select = (state) => ({nav: state.navReducer, index: state.indexReducer});

export default connect(select)(NavBar);