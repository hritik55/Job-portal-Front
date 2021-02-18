import React, {useState, useEffect} from 'react'
import { SearchResults } from '../components/SearchResults'
import { connect } from 'react-redux'
import * as actions from '../../../actions/JobActions'

const initialValues = {
    skills: '',
    location: ''
}

export function SearchJobs({...props}) {

    const [values, setValues] = useState(initialValues)
    const [matchedJobs, setMatchedJobs] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const searchName = (Jobname, skills) => {
        const jobsFound = [];
        props.jobsList[0].map(el => 
            {if(el.location.toLowerCase() === Jobname.toLowerCase()) 
                console.log(el)})
    }

    const dynamicSearch = () => {
         
        console.log(props.jobsList.map((record, index) => searchName(values.location)));
        //setMatchedJobs({jobs})
    }

    useEffect(() => {
        dynamicSearch()
    },[values.location])


    return (
        <>
            <div>
            <form className="search-form" 
                    onSubmit={handleSubmit}>
                <label htmlFor="">Skills</label>
                <input type="text" 
                        name="skills" 
                        id="skills"
                        value={values.skills}
                        onChange={handleChange}/>
                <label htmlFor="location">Location</label>
                <input type="text" 
                        name="location" 
                        id="location"
                        value={values.location}
                        onChange={handleChange}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
        <SearchResults searchedJobs={matchedJobs}/>
        </>
    )
}

const mapStateToProps = state => ({
    jobsList: state.JobsReducer.list
})

const mapActionsToProps = {
    fetchAllJobs: actions.fetchAll,
}

export default connect(mapStateToProps, mapActionsToProps)(SearchJobs);
