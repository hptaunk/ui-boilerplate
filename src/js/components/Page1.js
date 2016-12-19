import React, {Component} from 'react';
import AppPanel from './AppPanel';
import {Title} from '../grommet';
import TBD from './TBD';
class Page1 extends Component {
  render() {
    return (
      <AppPanel headnode={<Title> Page 1 </Title>}>
        <TBD />
      </AppPanel>
    );
  }
}

export default Page1;