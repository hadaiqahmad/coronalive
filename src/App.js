import React from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { styles } from "./App.css";
import fetchdata from "./api";
//import { Cards, Charts, CountryPicker } from "./components";

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetch = await fetchdata();
    this.setState({ data: fetch });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker />
        <Charts />
      </div>
    );
  }
}

export default App;
