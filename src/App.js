import React from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';

@inject('CounterStore')
@observer
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  artir() {
    this.props.CounterStore.artir();
  }
  azalt() {
    this.props.CounterStore.azalt();
  }
  render() {
    const { CounterStore } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <div>
          <button onClick={this.artir.bind(this)}>+</button>
          <button onClick={this.azalt.bind(this)}>-</button>
        </div>
        <div>
          Sayi : {CounterStore.sayi}
        </div>

        <div>
          <input type="text" onChange={(e) => CounterStore.filter = e.target.value} />
          <ul>
            {
              CounterStore.filtered.map((k, i) => {
                return <li key={i}>{k}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
