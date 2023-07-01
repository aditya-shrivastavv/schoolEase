'use server'

import { getXataClient } from '@/db/xata'

const xata = getXataClient()

export async function dbCreateTeacher(data: TeacherFormProps) {
  const record = await xata.db.teachers.create({})
}
