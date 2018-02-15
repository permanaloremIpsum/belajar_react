import React, {Component} from 'react';


const AppHeader = ({projectNama})=> (

  <div className="navbar-wrapper">
    <div className="container-fluid">
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">{projectNama}</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">Separated Category </a></li>
                  <li><a href="#">One more separated Category </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>

)

const AppSidebar = ({aktif})=> (
  
  <div className="col-sm-2 sidebar-offcanvas" id="sidebar">
      <div className="list-group">
        <a href="#" className="list-group-item active">{aktif}</a>
        <a href="#" className="list-group-item">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
        <a href="#" className="list-group-item">Category 4</a>
        <a href="#" className="list-group-item">Category 5</a>
        <a href="#" className="list-group-item">Category 6</a>
        <a href="#" className="list-group-item">Category 7</a>
        <a href="#" className="list-group-item">Category 8</a>
        <a href="#" className="list-group-item">Category 9</a>
        <a href="#" className="list-group-item">Category 10</a>
        <a href="#" className="list-group-item">Category 11</a>
        <a href="#" className="list-group-item">Category 12</a>
      </div>
  </div>
  
)

const AppContent = ({judul, isi, content})=> (

  
  <div className="col-sm-10 col-xs-12">
    <p className="pull-right visible-xs">
      <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
    </p>
    <div className="jumbotron">
      <h1>{judul}</h1>
      <p>{isi}</p>
    </div>
    <div className="row">
      {content}
    </div>
    <hr/>
  </div>

)

const AppFooter = ()=> (
  <div>
    <footer className="text-center">
        Copyright &copy; Dede Permana 2018 &emsp;|&emsp; Template by Dede Permana
    </footer>
  </div>
)


export default {AppHeader, AppSidebar, AppContent, AppFooter};