import { lightningElement } from 'lwc';

export default App extends lightningElement {


  count = 0;

  countUp()
  {
    this.count++;
  }


  countDown()
  {
    this.count--;
  }
}
