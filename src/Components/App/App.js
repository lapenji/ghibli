import React from 'react';
import Film from '../Film/Film'


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }
  
  componentDidMount(){
    const url = 'https://ghibliapi.herokuapp.com/films'
    fetch(url).then(response => response.json()).then(datas =>{
        this.setState({loading: false, films: datas})
      
    })
  }
  render(){
    let contenuto;
    if(this.state.loading){
      contenuto= <h1>Loading</h1>
    }
    else{
      let lista = this.state.films
      let griglia = lista.map(film =>{
        return <Film key={film.id} title={film.title} description={film.description} director={film.director} producer={film.producer} year={film.release_date} />
      })
      return(
        <div className='App'>
          <h1>I FILM DELLO STUDIO GHIBLI</h1>
          <div className='main'>
            {griglia}
          </div>
        </div>
      )
    }
    return(

      <container>
        <h1>I FILM DELLO STUDIO GHIBLI</h1>  
        {contenuto}
      </container>
    )
  
  }
}

export default App;
