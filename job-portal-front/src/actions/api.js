import axios from 'axios'

const baseUrl = 'http://localhost:5000/admin/'

export default {
    postJob(url = baseUrl)
    {
        return {
            fetchAll: async () => await axios.get(url),
            fetchById: async (id) => await axios.get(url + id),
            create: async (newJob) => await axios.post(url + 'addJobs', newJob),
            update: async (id, updatedJob) => await axios.put(url + id, updatedJob),
            delete: async (id) => await axios.delete(url + id)
        }
    }
}