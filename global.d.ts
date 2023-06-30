/**
 * Comman fields for teacher edit and create form
 */
type TeacherFormProps = {
  firstName: string
  lastName: string
  email: string
  classes: [ClassProps]
}

type ClassProps = {
  label: string
  value: string
  color: string
}
