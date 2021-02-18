import React, { useEffect, useState } from 'react';
import useForm from './useForm'
import { connect } from 'react-redux'
import * as actions from '../../../actions/JobActions'
import '../CSS/home.css'

const initialFieldValues = {
    jobId: '', jobTitle: '', jobPostedDate: '',
    role: '', responsibility: '', companyName: '',
    experience: '', salaryRange: '', noOfPositions: '',
    location: '', skills: '', degree: '', companyInfo: '',
    employmentType: '', industryType: '', keyword: '',
    description: ''
}

const JobsForm  = (props) => {

    const {
        values, 
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, props.setCurrentId);

    useEffect(() => {
        if(props.currentId != 0)
            setValues({
                ...props.jobsList[0].find(x => x._id == props.currentId)
            })
            
    }, [props.currentId])

    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = () => {
            window.alert('submitted successfully!')
            resetForm()}
        if (props.currentId == 0)
            props.createJob(values, onSuccess)
        else
            props.updateJobs(props.currentId, values, onSuccess)
    }

   

    return (
        <div className="form-container">
            <form className="form"
                onSubmit={handleSubmit}>
                <label htmlFor="jobId">Job ID</label>
                <input 
                    id="jobId" 
                    type="text" 
                    value={ values.jobId }
                    onChange={handleInputChange}/>

                <label htmlFor="jobTitle">Job Title</label>
                <input 
                    id="jobTitle" 
                    type="text"
                    value={ values.jobTitle }
                    onChange={handleInputChange}/>
                    

                <label htmlFor="date">Job Posted Date</label>
                <input 
                    id="jobPostedDate" 
                    type="date" 
                    value={ values.jobPostedDate}
                    onChange={handleInputChange}/>

                <label htmlFor="role">Role</label>
                <input 
                    id="role" 
                    type="text" 
                    value={ values.role }
                    onChange={handleInputChange}/>

                <label htmlFor="responsibility">Responsibility</label>
                <input 
                    id="responsibility" 
                    type="text" 
                    value={ values.responsibilty }
                    onChange={handleInputChange}/>

                <label htmlFor="companyName">Company Name</label>
                <input 
                    id="companyName" 
                    type="text" 
                    value={ values.companyName }
                    onChange={handleInputChange}/>

                <label htmlFor="experience">Experience</label>
                <input 
                    id="experience" 
                    type="number" 
                    value={ values.experience }
                    onChange={handleInputChange}/>
                
                <label htmlFor="salaryRange">Salary</label>
                <input 
                    id="salaryRange" 
                    type="number" 
                    value={ values.salaryRange }
                    onChange={handleInputChange}/>
                    
                <label htmlFor="noOfPositions">No. of positions</label>
                <input 
                    id="noOfPositions" 
                    text="number" 
                    value={ values.noOfPositions }
                    onChange={handleInputChange}/>

                <label htmlFor="location">Location</label>
                <input 
                    id="location" 
                    text="text" 
                    value={ values.location }
                    onChange={handleInputChange}/>

                <label htmlFor="skills">Skills</label>
                <input 
                    id="skills" 
                    text="text" 
                    value={ values.skills }
                    onChange={handleInputChange}/>
                
                <label htmlFor="degree">Degree</label>
                <input 
                    id="degree" 
                    text="text" 
                    value={ values.degree }
                    onChange={handleInputChange}/>

                <label htmlFor="companyInfo">Company-info</label>
                <input 
                    id="companyInfo" 
                    text="text" 
                    value={ values.companyInfo }
                    onChange={handleInputChange}/>

                <label htmlFor="employmentType">Employment-Type</label>
                <input 
                    id="employmentType" 
                    text="text" 
                    value={ values.employmentType }
                    onChange={handleInputChange}/>

                <label htmlFor="industryType">Industry-Type</label>
                <input 
                    id="industryType" 
                    text="text" 
                    value={ values.industryType }
                    onChange={handleInputChange}/>

                <label htmlFor="keyword">Keywords</label>
                <input 
                    id="keyword" 
                    text="text" 
                    value={ values.keyword }
                    onChange={handleInputChange}/>

                <label htmlFor="description">Description</label>
                <input 
                    id="description" 
                    text="text" 
                    value={ values.description }
                    onChange={handleInputChange}/>
                
                <input id="addjob" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    jobsList: state.JobsReducer.list
})

const mapActionToProps = {
    createJob: actions.create,
    updateJobs: actions.update
}


export default connect(mapStateToProps, mapActionToProps) (JobsForm);
