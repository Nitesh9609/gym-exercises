import React,{useState,useEffect} from 'react'
import { Pagination } from '@mui/material'
import {Box,Stack,Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchDatas'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart }) => {
  console.log(exercises)
  return (
    
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {/* {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))} */}
        {
          exercises.map((exercise,index) => (
           <ExerciseCard key={index} exercise={exercise}/>
          ))
        }
      </Stack>
    </Box>
  )
}

export default Exercises