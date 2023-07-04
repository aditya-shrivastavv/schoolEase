'use server'

import { getXataClient } from '@/db/xata'

const xata = getXataClient()

export async function createTeacher(data: TeacherFormProps) {
  const model: Omit<TeacherFormData, 'classes'> & { classes: string[] } = {
    id: data.id,
    name: data.lastName ? `${data.firstName} ${data.lastName}` : data.firstName,
    email: data.email,
    classes: data.classes ? data.classes.map((record) => record.value) : [],
  }
  const record = await xata.db.teachers.create(model)
  return record.id
}

export async function getAllTeachers() {
  const teachers = await xata.db.teachers.getAll()
  const allClasses = await xata.db.classes.getAll()
  const classes = allClasses.map((record) => ({
    label: record.name,
    value: record.name,
    color: record.colorCode,
  }))
  return teachers.map((teacher) => ({
    id: teacher.id,
    name: teacher.name,
    email: teacher.email,
    classes: teacher.classes
      ? teacher.classes.map((classStr) => ({
          label: classStr,
          value: classStr,
          color: classes.find((record) => record.value === classStr)?.color || '#D3D3D3', // lightgray
        }))
      : [],
  }))
}
