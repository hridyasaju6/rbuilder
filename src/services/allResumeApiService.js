import apiService from "../api/apiService";

// Add resume API call
export const addResumeAPI = async (resumeData) => {
  return await apiService("POST", "/allResumes", resumeData);
};

// Get resume by ID
export const getResumeAPI = async (id) => {
  return await apiService("GET", `/allResumes/${id}`);
};

// Add resume to downloads
export const downloadResumeAPI = async (resumeData) => {
  return await apiService("POST", "/downloads", resumeData);
};

// Get all downloaded resumes
export const getDownloadResumeAPI = async () => {
  return await apiService("GET", "/downloads");
};

// delet selected download resumes api call by downloads when clicked on delete button
export const deleteDownloadResumeAPI = async (resumeId) => {
  return await apiService("DELETE",`/downloads/${resumeId}`,{});
};

// edit resume api call by edit when clicked on update button
export const editResumeAPI = async (id, updateDetails) => {
  return await apiService("PUT",`/allResumes/${id}`,updateDetails);
};
