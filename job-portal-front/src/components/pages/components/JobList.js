import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/JobActions'
import moment from 'moment'
import '../CSS/hotjobs.css'
import { AiFillEnvironment } from 'react-icons/ai'

const JobList = ({...props}) => {

    useEffect(() => {
        props.fetchAllJobs()
    });

    // useEffect(() => {
    //     const allJobs = props.jobsList;
    //     console.log(allJobs);
    // },[props]);


    return (
        <div >
            <div className='container-box'>
            {props.jobsList
                .map((record, index) => (
                    record.slice(-5).reverse().map((el, index) => (
                        <div key={index} className='card'>
                            <div className="primary-info">
                                <h3>{ el.jobTitle }</h3>
                                <p className="location">
                                    <AiFillEnvironment size={ 20 } className="icon-location"/>
                                    <span>{ el.location }</span></p>
                                <p className="company">{ el.companyName }</p>
                                <div className="secondary-info">
                                <h4>Experience</h4>
                                <p className="experience">{el.experience} yrs</p>
                            </div>
                            </div>
                           
                        </div>
                    ))
                ))
            }
            </div>
        </div>
        )
    }

const mapStateToProps = state => ({
    jobsList: Array.from(state.JobsReducer.list)
})

const mapActionsToProps = {
    fetchAllJobs: actions.fetchAll,
    deleteJob: actions.Delete
}


export default connect(mapStateToProps, mapActionsToProps)(JobList);