'use server'

import { getXataClient } from '@/db/xata'

const xata = getXataClient()

export async function createTeacher(data: TeacherFormProps) {
  const model: Omit<TeacherFormData, 'classes'> & { classes: string[] } = {
    id: data.id,
    name: data.lastName ? `${data.firstName} ${data.lastName}` : data.firstName,
    email: data.email,
    classes: data.classes ? data.classes.map((record) => record.label) : [],
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

export async function updateTeacher(data: TeacherFormProps) {
  const model: Omit<TeacherFormData, 'classes'> & { classes: string[] } = {
    id: data.id,
    name: data.lastName ? `${data.firstName} ${data.lastName}` : data.firstName,
    email: data.email,
    classes: data.classes ? data.classes.map((record) => record.label) : [],
  }
  const record = await xata.db.teachers.createOrReplace(model)
  return record.id
}

export async function deleteTeacher(data: TeacherFormData[]) {
  const ids = data.map((record) => record.id)
  const res = await xata.db.teachers.delete(ids)
  return res.map((record) => record?.id)
}
