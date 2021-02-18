import React from 'react'
import './CSS/home.css'
import SearchJobs from './components/SearchJobs' 
import JobList from './components/JobList'  
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const Home = () => {
    return (
      <>
        <div className="main-container">
          <header><h1>Find the right jobs.</h1></header>
          <section className="search-field">
            <SearchJobs />
          </section>
          <h2 className="title">Hot Jobs</h2><hr/>
          <section>
            <JobList />
          </section>
        </div>
      </>
      
    );
}
