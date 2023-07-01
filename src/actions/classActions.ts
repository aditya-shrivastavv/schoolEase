'use server'

import { Classes, getXataClient } from '@/db/xata'
import getRandomColor from '@/lib/color/getRandomColor'

const xata = getXataClient()

/**
 * Create new class in database.
 * @param {string} data
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
  return record
}

export async function getAllClasses() {
  const records = xata.db.classes.select(['id', 'name']).getAll()
  return JSON.parse(JSON.stringify(records))
  // Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported.
}
