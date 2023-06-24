'use client'

import * as React from 'react'
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from '@mui/x-data-grid'
import { ThemeProvider } from '@mui/material'
import { MuiTheme } from '@/theme/mui'
import { sampledata } from '@/db/sample'
import { Checkbox } from '@chakra-ui/react'

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'data-grid-header',
    minWidth: 160,
    flex: 0.8,
  },
  { field: 'email', headerName: 'Email', headerClassName: 'data-grid-header', minWidth: 250 },
  { field: 'dob', headerName: 'Date of Birth', headerClassName: 'data-grid-header', minWidth: 220 },
  {
    field: 'phone',
    headerName: 'Contact Number',
    headerClassName: 'data-grid-header',
    minWidth: 150,
  },
  {
    field: 'classes',
    headerName: 'Assigned Classes',
    headerClassName: 'data-grid-header',
    minWidth: 150,
    flex: 1,
  },
]

export default function DataTable() {
  const rows = sampledata

  return (
    <div style={{ height: 300, width: '100%' }}>
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
  return (
    <GridToolbarContainer sx={{ gap: 1, mb: 1 }}>
      <GridToolbarDensitySelector />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}
