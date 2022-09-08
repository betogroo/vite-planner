import { ref } from 'vue'
import axios from 'axios'

interface Project {
  id: string
  title: string
  details: string
  complete: boolean
}
const useProject = () => {
  const projects = ref<Project[]>([])
  const fetchProject = async () => {
    try {
      const data = await axios.get(`http://localhost:3000/projects`)
      projects.value = data.data
      console.log(projects.value)
    } catch (err) {
      console.log(err)
    }
  }

  return { projects, fetchProject }
}

export default useProject
