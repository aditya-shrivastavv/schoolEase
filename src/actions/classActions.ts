'use server'

import { Classes, getXataClient } from '@/db/xata'
import getRandomColor from '@/lib/color/getRandomColor'

const xata = getXataClient()

/**
 * Create new class in database.
 * @param {string} record.id - id of the class
 * @returns
 */
export async function createClass(data: { name: string }) {
  const model: Omit<Classes, 'id'> = {
    name: data.name,
    class: data.name.split('-')[0],
    section: data.name.split('-')[1],
    colorCode: getRandomColor(),
  }
  const record = xata.db.classes.create(model)
  return (await record).id
}

/**
 * Get id and name of all classes from database.
 * @returns {{id: string, name: string}[]} - Array of all classes(as objects)
 */
export async function getAllClasses() {
  const records = xata.db.classes.getAll()
  return (await records).map((record) => ({
    id: record.id,
    name: record.name,
  }))
}
