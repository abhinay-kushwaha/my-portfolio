import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, LinearProgress, Typography } from '@mui/material';
 
 
const skills = [
  { skill: 'JavaScript', percentage: 60 },
  { skill: 'React & Redux', percentage: 85 },
  { skill: 'Next js', percentage: 75 },
  { skill: 'Java', percentage: 80 },
  { skill: 'DSA', percentage: 50 },
  { skill: 'Python', percentage: 60 },
];

const Skills = () => {

 
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timers = skills.map((skill, index) => {
      return setTimeout(() => {
        setProgress(prevProgress => {
          const newProgress = [...prevProgress];
          newProgress[index] = skill.percentage;
          return newProgress;
        });
      }, 500 * index);
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div  className='-mt-56'>
      <div  >
        <div className='flex flex-col items-center gap-3 px-10 pt-16 sm:pt-0'>
          <h1 className='text-red-500 font-semibold text-xl'>My Skills</h1>
          <h2 className='font-bold text-4xl'>I Develop Skills Regularly</h2>
          <p className='text-center'>In the fast-paced world of web development, staying ahead requires continuous learning and skill enhancement. I am committed to regularly developing and refining my skills to keep up with the latest technologies and industry trends.</p>

          <Container>
            <Grid container spacing={4}>
              {skills.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ width: '100%', mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight="bold">
                        {item.skill}
                      </Typography>
                      <Typography variant="body1" color="error">
                        {progress[index]}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={progress[index]}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        '& .MuiLinearProgress-bar': {
                          animation: 'scaleUp 2s ease-out'
                        }
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Skills;
