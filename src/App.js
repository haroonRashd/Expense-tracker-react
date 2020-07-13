import React  from 'react';
import './App.css';
import './Mycss.css';
import { Header } from './components/Header';
import { BalanceSummary } from './components/BalanceSummary';
import { TrasactionHistory } from './components/TrasactionHistory';
import { AddTransaction } from './components/AddTransaction';
import {MycontextProvider} from'./context/Context.js';


function App() {
  

  return (
    <div className="wrapper">
      <MycontextProvider>
      <Header></Header>
      <BalanceSummary></BalanceSummary>
      <TrasactionHistory></TrasactionHistory>
      <AddTransaction></AddTransaction>
      </MycontextProvider>
    </div>

  );
}

export default App;
