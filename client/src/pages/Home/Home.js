import React, { useState, useEffect } from 'react'
import SimCard from '../../components/Card'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'
<<<<<<< HEAD
import HomePage from '../../components/HomePage'
=======
import { Container } from '@material-ui/core'
>>>>>>> ebfa7fc98cc81c174f21fb9159eb462301cb9f11

const { getAllJobs, updateJob } = JobCardAPI

const Home = () => {

  const [jobState, setJobState] = useState({
    jobs: []
  })

  useEffect(() => {
    getAllJobs(localStorage.getItem('userAuth'))
      .then(({ data: jobs }) => {
        console.log(jobs)
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])

  return (

    <>
      <h1>THIS IS THE HOME PAGE</h1>
      <JobCardContext.Provider value={jobState}>
        <SimCard />
      </JobCardContext.Provider>
      <HomePage />
    </>

  )
}

export default Home