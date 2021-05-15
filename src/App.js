
import React from 'react';

import  Cards from './components/Cards/Cards';
import  Chart from './components/Chart/Chart';
import  Contries from './components/Contries/Contries';
import { fetchData } from './api/index';
import styles from './App.module.css';

import image from './images/image.jpg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <Contries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;
