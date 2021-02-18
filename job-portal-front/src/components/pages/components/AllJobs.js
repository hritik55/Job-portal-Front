import React, { useState, useEffect } from 'react'
import '../CSS/jobs.css'
import { connect } from 'react-redux'
import * as actions from '../../../actions/JobActions'
import moment from 'moment'
import { AiFillProfile, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import AddJob from './JobsForm';


const AllJobs = ({...props}) => {

    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const response = await props.fetchAllJobs()
            return response
        }
        fetchData();
    });

    const handleDelete = id => {
        const onSuccess = () => {
            window.alert('The Job was removed.')
        }
        if(window.confirm('Do you want to remove this job?'))
            props.deleteJob(id, onSuccess)
    }

    return (
        <div className='container'>
            <div>
            {props.jobsList
                .map((record, index) => (
                    record.map((el, index) => (
                        <div key={index} className='job-card'>
                            <div className="primary-info">
                                <h3>{ el.jobTitle }</h3>
                                <h4>{ el.location }</h4>
                                <p>{ el.companyName }</p>
                                <small>Job ID: { el.jobId }</small>
                            </div>
                            <div className="secondary-info">
                                <h4>Experience</h4>
                                <p>{el.experience}yrs</p>
                                <h4>Posted on</h4>
                                <p>{(moment(el.jobPostedDate).format('DD-MM-YYYY'))}</p>
                            </div>
                            <div className="action-buttons">
                                <button className="edit" onClick={() => setCurrentId(el._id)}>
                                    <AiFillEdit size={ 20 }/></button>
                                <button className="delete" onClick={() => handleDelete(el._id)}>
                                    <AiFillDelete size={ 20 }/></button>
                            </div>
                        </div>
                    ))
                ))
            }
            </div>
            <div> <AddJob {...{currentId, setCurrentId}}/></div>
        </div>
        )
    }

const mapStateToProps = state => ({
    jobsList: state.JobsReducer.list
})

const mapActionsToProps = {
    fetchAllJobs: actions.fetchAll,
    deleteJob: actions.Delete
}


export default connect(mapStateToProps, mapActionsToProps)(AllJobs);