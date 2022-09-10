export interface Project {
  id: string
  title: string
  details: string
  complete: boolean
  disabled: boolean
}
export interface ProjectError {
  error: boolean
  message: string
  code: string
}
