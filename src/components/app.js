import { h, Component } from 'preact';
import Hello from './hello';
import Thing from './hello';

export default class App extends Component {
  render() {
    return (
      <div class="app">
        <h1>Hello!</h1>
        <Hello />
        <Thing />
      </div>
    );
  }
}