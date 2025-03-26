class StudentClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL
        });
    }

    async createStudent(name, age, branch) {
        const studentData = {
            name: name,
            age: age,
            branch: branch
        };
        try {
            const response = await this.api.post('/students', studentData);
            return response.data;
        } catch (error) {
            console.error('Error creating student:', error);
            throw error;
        }
    }

    async getStudent(studentId) {
        try {
            const response = await this.api.get(`/students/${studentId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching student:', error);
            throw error;
        }
    }

    async updateStudent(studentId, name, age, branch) {
        const studentData = {};
        if (name) studentData.name = name;
        if (age) studentData.age = age;
        if (branch) studentData.branch = branch;

        try {
            const response = await this.api.put(`/students/${studentId}`, studentData);
            return response.data;
        } catch (error) {
            console.error('Error updating student:', error);
            throw error;
        }
    }

    async deleteStudent(studentId) {
        try {
            await this.api.delete(`/students/${studentId}`);
            return true; // Deletion successful
        } catch (error) {
            console.error('Error deleting student:', error);
            return false; // Deletion failed
        }
    }

    async listStudents() {
        try {
            const response = await this.api.get('/students');
            return response.data;
        } catch (error) {
            console.error('Error listing students:', error);
            throw error;
        }
    }
}

// Example usage
(async () => {
    const baseURL = 'http://example.com/api'; // Replace with your API base URL
    const client = new StudentClient(baseURL);

    try {
        // Create a new student
        const newStudent = await client.createStudent('John Doe', 20, 'Computer Science');
        console.log('Created Student:', newStudent);

        // List all students
        const students = await client.listStudents();
        console.log('All Students:', students);

        // Get a specific student
        const studentId = newStudent.id; // Assuming the response contains the student ID
        const student = await client.getStudent(studentId);
        console.log('Fetched Student:', student);

        // Update a student
        const updatedStudent = await client.updateStudent(studentId, null, 21, null);
        console.log('Updated Student:', updatedStudent);

        // Delete a student
        const deleted = await client.deleteStudent(studentId);
        console.log('Deleted Student with ID:', studentId, 'Success:', deleted);
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
