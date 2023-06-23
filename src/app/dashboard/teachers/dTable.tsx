'use client'

import * as React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import { ThemeProvider } from '@mui/material'
import { MuiTheme } from '@/theme/mui'

const rows: GridRowsProp = [
  {
    id: 1,
    name: 'Superman',
    age: 30,
    address: 'New York',
  },
  {
    id: 2,
    name: 'Spiderman',
    age: 19,
    address: 'LA',
  },
  {
    id: 3,
    name: 'Hulk',
    age: 55,
    address: 'Bay Area',
  },
  {
    id: 4,
    name: 'Abraham Lincoln',
    age: 67,
    address: 'Washington DC',
  },
  {
    id: 5,
    name: 'Zach King',
    age: 24,
    address: 'California',
  },
]
const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'age', headerName: 'Age', width: 70 },
  { field: 'address', headerName: 'Address', width: 200 },
]

export default function DataTable() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <ThemeProvider theme={MuiTheme}>
        <DataGrid rows={rows} columns={columns} rowHeight={36} checkboxSelection />
      </ThemeProvider>
    </div>
  )
}
