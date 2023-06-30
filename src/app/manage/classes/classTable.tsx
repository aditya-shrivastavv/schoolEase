'use client'

import React from 'react'
import { ThemeProvider } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid'
import { classData } from '@/db/sample'
import { MuiTheme } from '@/theme/mui'
import { Button, Link, useToast } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { multipleRowEditToastWarn } from '@/components/toast/toast'
import NextLink from 'next/link'

let selectedRows: typeof classData = []

export default function ClassTable() {
  const rows = classData
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
          onClick={(e) => e.stopPropagation}
          _hover={{ textDecoration: 'underline' }}
        >
          {params.value}
        </Link>
      ),
    },
  ]

  return (
    <div style={{ width: '100%' }}>
      <ThemeProvider theme={MuiTheme}>
        <DataGrid
          rows={rows}
          columns={columns}
          density="compact"
          checkboxSelection
          autoHeight
          onRowSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids)
            selectedRows = rows.filter((row) => selectedIDs.has(row.id))
            console.log(selectedRows)
          }}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </ThemeProvider>
    </div>
  )
}

function CustomToolbar() {
  const toast = useToast()
  function changeMyName() {
    if (selectedRows.length !== 1) {
      multipleRowEditToastWarn(toast)
    } else {
      // do something
    }
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
