import React, {Component} from 'react';
import Tambah from './components/tambah'

const Duwur = Tambah.AppHeader
const TengahPinggir = Tambah.AppSidebar
const Tengah = Tambah.AppContent
const Ngisor = Tambah.AppFooter

const heading = [
                  {id: 1, judul :'Judul 1', isi : 'Isi Content 1'},
                  {id: 2, judul :'Judul 2', isi : 'Isi Content 2'},
                  {id: 3, judul :'Judul 3', isi : 'Isi Content 3'},
                ]

const head = heading.map(name => {
  return (
    <div key={name.id} className="col-xs-6 col-lg-4">
        <h2>{name.judul}</h2>
        <p>{name.isi}</p>
      <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
    </div>
  )
})


class App extends Component{

  render(){
    return(
      <div className="container-fluid">
        <Duwur
          projectNama="Dede Permana" 
        />
        <TengahPinggir
          aktif="Home"
        />
        <Tengah
          judul = "Judul Content"
          isi = "This is Content"
          content = {head}
        />
        <Ngisor/>
      </div>
    );
  }
}

export default App;