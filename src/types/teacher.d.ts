type TeacherData = {
  id: string
  name: string
  email: string
  classes: ClassData[]
}

type TeacherFormData = Omit<TeacherData, 'classes'> & {
  classes: ClassSelectData[]
}

type TeacherFormProps = Omit<TeacherFormData, 'name'> & {
  firstName: string
  lastName: string
}
