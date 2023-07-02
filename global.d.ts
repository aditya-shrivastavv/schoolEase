/**
 * Comman fields for teacher edit and create form
 */

type Teacher = {
  id: number
  name: string
  email: string
  classes: ClassData[]
}

type TeacherFormProps = {
  firstName: string
  lastName: string
  email: string
  classes: ClassData[]
}
