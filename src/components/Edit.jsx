import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RiFileEditFill } from "react-icons/ri";
// import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import { HiWrench } from "react-icons/hi2";
// import jobTypes from '../assets/jobRole.json';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 600,
//   maxHeight: '80vh',
//   overflow: 'auto',
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

function Edit({resumeData, setResumeData}) {
//   const skillRef = useRef()
//  const [open,setOpen] = React.useState(false)
//  const handleOpen = ()=> setOpen(true);
//  const handleclose = ()=> setOpen(false);

//  console.log(resumeData);
 
//  const removeSkill =(skill)=>{
//   setResumeData({...resumeData, skills:resumeData?.skills?.filter(item=>item!=skill)})
//  }

//  const addSkill =(skill)=>{
//   if(skill){
//     if(resumeData?.skills?.map(item=>item.toLowerCase())?.includes(skill.toLowerCase())){
//       alert("Given Skill Already Exists!!!")
//     }else{
//       setResumeData({...resumeData, skills[...resumeData?.skills,skill]})
//     }
//     skillRef.current.value = ""
//   }else{
//     alert("Input valid skill")
//   }
//  }

//  const handleEditResume = async()=>{
//   const {
//     fullName, location, job, email, phone,
//     linkedin, github, degree, university,
//     passOut, skills, summary
//   } = resumeData;

//   if (
//     fullName && location && job && email && phone &&
//     linkedin && github && degree && university &&
//     passOut && skills.length > 0 && summary
//   ) {

//     // api call
//     const response = await editResumeAPI(resumeData?.id, resumeData);
//     console.log(response);

//     if (response.status === 200) {
//       alert("Resume updated successfully");
//       handleClose();
//     }

//   } else {
//     alert("Please fill the form completely");
//   }
//  }

  return (
    <div>
      <Button onClick={handleOpen} className='btn text-warning fs-2 me-2'><RiFileEditFill /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}

export default Edit