import React, {Component} from 'react';
import Tambah from './components/tambah'

const Duwur = Tambah.AppHeader
const Ngisor = Tambah.AppFooter

export default class layout extends Component{

  render(){
    return(
      <div className="container-fluid">
        <Duwur projectNama={this.props.projectNama}/>
        {this.props.children}
        <Ngisor/>
      </div>
    );
  }
}