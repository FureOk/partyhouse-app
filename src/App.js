import './App.css';
import Header from './components/Header';
import Bar from './components/Bar';
import Card from './components/Card';
import cardImg1 from './imgs/card.jpg';
import cardImg2 from './imgs/card2.jpg';
import cardImg3 from './imgs/card3.jpg';
import cardImg4 from './imgs/card4.jpg';
import cardImg5 from './imgs/card5.jpg';
import cardImg6 from './imgs/card6.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <div>
            <Header/>   
        </div>
        <div>
          <Bar/>
        </div>
        <div className='cardRow'>
          {/* ROW 1 */}
            <Card Town={'Rumuosi'} City={'Port-Harcourt'} State={'Rivers'} Country ={'Nigeria'} Stars={'4.0'} Price={'70,000'} cardImg={cardImg1}/>
            <Card Town={'Choba'} City={'Port-Harcourt'} State={'Rivers'} Country ={'Nigeria'} Stars={'3.5'} Price={'30,000'} cardImg={cardImg2}/>
            <Card Town={'Ada-George'} City={'Port-Harcourt'} State={'Rivers'} Country ={'Nigeria'} Stars={'4.5'} Price={'150,000'} cardImg={cardImg3}/>
        </div>
          {/* ROW 2 */}
        <div className='cardRow'>
            <Card Town={'Peter-Odili'} City={'Port-Harcourt'} State={'Rivers'} Country ={'Nigeria'} Stars={'4.0'} Price={'100,000'} cardImg={cardImg4}/>
            <Card Town={'Ada-George'} City={'Port-Harcourt'} State={'Rivers'} Country ={'Nigeria'} Stars={'4.5'} Price={'150,000'} cardImg={cardImg5}/>
            <Card Town={'GRA Phase 1'} City={'Port-Harcourt'} State={'Rivers'} Country ={'Nigeria'} Stars={'4.8'} Price={'400,000'} cardImg={cardImg6}/>
        </div>
    </div>
  );
}

export default App;
