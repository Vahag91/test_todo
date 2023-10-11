// const apiKey11 = "AIzaSyArDBX_JMwnpJvYerOPwXZ3t5DTewBBpQk"


class ApiService {
  constructor() {
    this.apiKey = 'AIzaSyDagIn3vzwaBB1FiBmlo2DrBPS4zN0sGnw';
    this.baseUrl = 'https://tasks.googleapis.com/tasks/v1/lists/@default';
  }


  async createTask(taskId, title) {
    const url = `${this.baseUrl}/tasks?key=${this.apiKey}`;
    const task = { id: taskId, title };
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task)
      })
      if (!res.ok) {
        throw new Error(`faild to create task: ${res.statusText}`)
      }
      return await res.json()
    } catch (err) {
      console.log("Error creating task:", err);
      throw err;
    }
  }



  async getTask() {

    const url = `${this.baseUrl}/tasks?key=${this.apiKey}`;
    try {
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`faild to get task: ${res.statusText}`)
      }
      return await res.json()
    } catch (err) {
      console.log("Can not get task", err);
      throw err
    }
  }



  async deleteTask(taskId) {
    const url = `${this.baseUrl}/tasks/${taskId}?key=${this.apiKey}`;
    try {
      const res = await fetch(url, {
        method: 'DELETE'
      })
  
      if (!res.ok) {
        throw new Error(`Failed to delete task: ${res.statusText}`)
      }
  
      return `Task ${taskId} has been deleted.`
    } catch (err) {
      console.log("Error deleting task:", err)
      throw err
    }
  }


  async putTask(taskId, updatedTask) {
    const url = `${this.baseUrl}/tasks/${taskId}?key=${this.apiKey}`
    try {
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask)
      })
  
      if (!res.ok) {
        throw new Error(`Failed to update task: ${res.statusText}`)
      }
  
      return await res.json()
    } catch (err) {
      console.log("Error updating task:", err)
      throw err
    }
  }
  

}
export default ApiService;