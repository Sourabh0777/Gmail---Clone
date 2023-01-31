import React from 'react';
import './App.css';
//Components Imported
import EmailList from './EmailList';
import Header from './Header';
import Mail from './Mail';
import Sidebar from './Sidebar';
import SendMail from './SendMail';

//Icons
//Redux 
import { useSelector, useDispatch } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice';

//Firebase
//React Router
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';
// Functions

function App() {
  const SendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/mail" element= {<Mail />}>
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {SendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
