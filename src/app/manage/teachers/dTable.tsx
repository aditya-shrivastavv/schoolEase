'use client'

import * as React from 'react'
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import { ThemeProvider } from '@mui/material'
import { MuiTheme } from '@/theme/mui'
import { sampledata } from '@/db/sample'
import { Button, Tag, TagLabel } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    minWidth: 230,
  },
  { field: 'email', headerName: 'Email', minWidth: 250 },
  { field: 'dob', headerName: 'Date of Birth', minWidth: 220 },
  {
    field: 'phone',
    headerName: 'Contact Number',
    minWidth: 150,
  },
  {
    field: 'classes',
    type: 'ReactNode',
    headerName: 'Assigned Classes',
    minWidth: 230,
    renderCell: (params: GridRenderCellParams) => {
      return params.value.map((item: string) => (
        <Tag key={item} size={'sm'} bgColor={'green.300'} px={2} mr={2} borderRadius={'full'}>
          <TagLabel>{item}</TagLabel>
        </Tag>
      ))
    },
  },
]

export default function DataTable() {
  const rows = sampledata

  return (
    <div style={{ width: '100%' }}>
      <ThemeProvider theme={MuiTheme}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{
            toolbar: CustomToolbar,
          }}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          density="compact"
          checkboxSelection
          autoHeight
        />
      </ThemeProvider>
    </div>
  )
}

function CustomToolbar() {
  function handleDeleteTeacher() {
    console.log('Delete Teacher.')
  }

  return (
    <GridToolbarContainer sx={{ gap: 1, mb: 1 }}>
      <GridToolbarDensitySelector />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
      <Button
        leftIcon={<DeleteIcon boxSize={'16px'} />}
        variant={'ghost'}
        color={'red.500'}
        borderRadius={'md'}
        p={'4px 5px'}
        _hover={{ color: 'red.400', bgColor: 'red.50' }}
      >
        DELETE
      </Button>
    </GridToolbarContainer>
  )
}
