type ClassData = {
  id: string
  name: string
  class: string
  section: string
  colorCode: string
}

type ClassInfo = Pick<ClassData, 'id' | 'name'>

type ClassSelectData = {
  label: string
  value: string
  color: string
}
