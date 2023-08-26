import axios from 'axios';

const ApiService = {
  createProjectImage: async (images, projectId) => {
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

    try {
      const response = await axios.post(`http://localhost:8080/api/project-images?projectId=${projectId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createProjectAndGetId: async (projectData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/projects', projectData);
      return response.data.id;
    } catch (error) {
      throw error;
    }
  },

  // Other methods...
};

export default ApiService;




