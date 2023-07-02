import { Link } from '@chakra-ui/react'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import NextLink from 'next/link'

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Class',
    minWidth: 350,
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <Link
        as={NextLink}
        href={`/manage/classes/${params.value}`}
        onClick={(e) => e.stopPropagation()}
        _hover={{ textDecoration: 'underline' }}
      >
        {params.value}
      </Link>
    ),
  },
]

export default columns
