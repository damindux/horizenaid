import axios from 'axios';

interface ProjectImageData {
    id: number;
}

interface ProjectData {
    title: string;
    startDate: string;
    endDate: string;
    fundingGoal: string;
    description: string;
}

const ApiService = {
    createProjectImage: async (images: File[], projectId: number): Promise<ProjectImageData> => {
        const formData = new FormData();
        images.forEach((image, index) => {
            formData.append(`images`, image);
        });

        try {
            const response = await axios.post<ProjectImageData>(
                `http://localhost:8080/api/project-images?projectId=${projectId}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createProjectAndGetId: async (projectData: ProjectData): Promise<number> => {
        try {
            const response = await axios.post<{ id: number }>('http://localhost:8080/api/projects', projectData);
            return response.data.id;
        } catch (error) {
            throw error;
        }
    },

    // Other methods...
};

export default ApiService;





