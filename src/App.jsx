import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchForm from './components/Form/Form'
import CardView from './components/CardView/CardView'

const app_id = '26e16d31';
const app_key = '9bd19d494560bb58e2e560d6315d9f14'

class App extends Component {
  state = {
    recipies: []
  }

  getRecepie = async (e) => {
    e.preventDefault();
    const query = e.target.elements.recipie.value;
    const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=20`
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({ recipies : data.hits});
    console.log(data.hits);
  }

  render() {
    return (
      <div className="body">
        <Header></Header>
        <SearchForm getRecepie={this.getRecepie}></SearchForm> 
        <CardView recipies={this.state.recipies}></CardView>
      </div>
    );
  }
}

export default App;
