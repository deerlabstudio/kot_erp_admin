import React, { Component } from 'react';

// Styles
import '../../styles/BackOffice.css';

// Components
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Content from '../../components/Content';

class BackOffice extends Component {
  state = {
    openSideBar: true,
  };

  toogleSideBar = () => {
    const { openSideBar } = this.state;
    this.setState({ openSideBar: !openSideBar });
  }

  render() {
    const { openSideBar } = this.state;

    return (
      <div className="app-wrapper">
        <SideBar isOpen={openSideBar} />
        <div className="main-content">
          <TopBar toogleSideBar={this.toogleSideBar} />
          <Content />
        </div>
      </div>
    );
  }
}

export default BackOffice;
