'use server'

import { Classes, getXataClient } from '@/db/xata'
import getRandomColor from '@/lib/color/getRandomColor'

const xata = getXataClient()

/**
 * Create new class in database.
 * @param {Promise<string>} record.id - id of the class
 * @returns
 */
export async function createClass(data: { name: string }) {
  const model: Omit<Classes, 'id'> = {
    name: data.name,
    class: data.name.split('-')[0],
    section: data.name.split('-')[1],
    colorCode: getRandomColor(),
  }
  const record = await xata.db.classes.create(model)
  return record.id
}

/**
 * Get id and name of all classes from database.
 * @returns {{id: string, name: string}[]} - Array of all classes(as objects)
 */
export async function getAllClasses() {
  const records = await xata.db.classes.getAll()
  return records.map((record) => ({
    id: record.id,
    name: record.name,
  }))
}

export async function deleteClass(data: ClassInfo[]) {
  const ids = data.map((record) => record.id)
  const res = await xata.db.classes.delete(ids)
  return res.map((record) => record?.id)
}

export async function getClassSelectOptions() {
  const records = await xata.db.classes.getAll()
  return records.map((record) => ({
    value: record.name,
    label: record.name,
    color: record.colorCode,
  }))
}
