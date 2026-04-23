import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobTypes from "../assets/jobRole.json";
import skillJSON from "../assets/jobSkills.json";
import summaryJSON from "../assets/summaries.json";
import { addResumeAPI } from '../services/allResumeapiService';
import { useNavigate } from 'react-router-dom';

const steps = [
  'Basic Information',
  'Contact Details',
  'Educational Details',
  'Skills And Summary'
];

function UserInputs({ resumeData, setResumeData }) {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  const generateAI = () => {
    setResumeData({
      ...resumeData,
      skills: skillJSON[resumeData.job] || [],
      summary: summaryJSON[resumeData.job] || ""
    });
    handleNext();
  };

  const renderStepContent = (step) => {
    switch (step) {

      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
            <div className='p-3 row'>
              <TextField
                value={resumeData.fullName || ""}
                onChange={e => setResumeData({ ...resumeData, fullName: e.target.value })}
                label="Full Name"
                variant="standard"
              />

              <TextField
                value={resumeData.location || ""}
                onChange={e => setResumeData({ ...resumeData, location: e.target.value })}
                label="Location"
                variant="standard"
              />

              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel>Job Role</InputLabel>
                <Select
                  value={resumeData.job || ""}
                  onChange={e => setResumeData({ ...resumeData, job: e.target.value })}
                  label="Job"
                >
                  {jobTypes.jobRoles.map(role => (
                    <MenuItem key={role} value={role}>{role}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h3>Contact Details</h3>
            <div className='p-3 row'>
              <TextField
                value={resumeData.email || ""}
                onChange={e => setResumeData({ ...resumeData, email: e.target.value })}
                label="Email"
                variant="standard"
              />

              <TextField
                value={resumeData.phone || ""}
                onChange={e => setResumeData({ ...resumeData, phone: e.target.value })}
                label="Contact Number"
                variant="standard"
              />

              <TextField
                value={resumeData.linkedin || ""}
                onChange={e => setResumeData({ ...resumeData, linkedin: e.target.value })}
                label="LinkedIn Link"
                variant="standard"
              />

              <TextField
                value={resumeData.github || ""}
                onChange={e => setResumeData({ ...resumeData, github: e.target.value })}
                label="GitHub Link"
                variant="standard"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3>Educational Details</h3>
            <div className='p-3 row'>
              <TextField
                value={resumeData.degree || ""}
                onChange={e => setResumeData({ ...resumeData, degree: e.target.value })}
                label="Bachelor's Degree"
                variant="standard"
              />

              <TextField
                value={resumeData.university || ""}
                onChange={e => setResumeData({ ...resumeData, university: e.target.value })}
                label="University/College Name"
                variant="standard"
              />

              <TextField
                value={resumeData.passOut || ""}
                onChange={e => setResumeData({ ...resumeData, passOut: e.target.value })}
                label="Year of Graduation"
                variant="standard"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className='p-3 row'>
            <h6>
              Our AI will generate Skills and Summary according to Job Role.
              Click the <b>AI Skills & Summary</b> button to proceed.
            </h6>
          </div>
        );

      default:
        return null;
    }
  };

  const handleAddResume = async () => {
    const {
      fullName, location, job, email, phone,
      linkedin, github, degree, university,
      passOut, skills, summary
    } = resumeData;

    if (
      fullName && location && job && email && phone &&
      linkedin && github && degree && university &&
      passOut  && skills.length > 0 && summary
    ) {
      
        const response = await addResumeAPI(resumeData);
        console.log(response);
        
        if (response.status === 201) {
          alert("Resume added successfully");

          
        }
     

    } else {
      alert("Please fill the form completely");
    }
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleAddResume}>Finish</Button>
          </Box>
        </>
      ) : (
        <>
          <Box>
            {renderStepContent(activeStep)}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={generateAI}>
                Generate AI Skills & Summary
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}

export default UserInputs;