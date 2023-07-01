'use server'

import { Classes, getXataClient } from '@/db/xata'
import getRandomColor from '@/lib/color/getRandomColor'

const xata = getXataClient()

export async function createClass(data: { name: string }): Promise<Classes> {
  const model = {
    name: data.name,
    section: data.name.split('-')[1],
    colorCode: getRandomColor(),
  }
  const record = xata.db.classes.create(model)
  return record
}
