import React, {Component, PropTypes} from 'react';
import AppPanel from './AppPanel';
import TBD from './TBD';
class Page2 extends Component {
  render() {
    return (
      <AppPanel headnode={<h3> Page 2 </h3>}>
        <TBD />
      </AppPanel>
    );
  }
}


export default Page2;