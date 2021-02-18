import React from 'react'
import './CSS/home.css'
import AllJobs from './components/AllJobs';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../actions/store'

export const Admin = () => {
    return (
      <Provider store={ store }>
        <div className="container">
          <div className="jobs-list">
            <AllJobs />
          </div>
        </div>
      </Provider>
    );
}