import { ref } from 'vue'
import axios from 'axios'
import { Project, ProjectError } from '@/types/project'

const useProject = () => {
  const projects = ref<Project[]>([])
  const error = ref<ProjectError | null>(null)
  const fetchProject = async () => {
    try {
      const data = await axios.get(`http://localhost:3000/projects`)
      projects.value = data.data
    } catch (err: any) {
      error.value = {
        error: true,
        code: err.code,
        message: err.message
      }
      console.log(err)
    }
  }

  return { projects, error, fetchProject }
}

export default useProject
