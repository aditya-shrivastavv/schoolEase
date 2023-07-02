'use client'

import { getAllClasses } from '@/actions/classActions'
import { multipleRowEditToastWarn } from '@/components/toast/toast'
import { MuiTheme } from '@/theme/mui'
import { DeleteIcon } from '@chakra-ui/icons'
import { Button, useToast } from '@chakra-ui/react'
import { LinearProgress, ThemeProvider } from '@mui/material'
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import columns from './columns'

let selectedRows = []

/**
 * Table for displaying all classes. Uses MUI DataGrid.
 */
export default function ClassTable() {
  const [loading, setLoading] = useState(true)
  const [rows, setRows] = useState<ClassInfo[]>([])

  // Fetching Classes in useEffect
  useEffect(() => {
    const getRows = async () => {
      setLoading(true)
      const data = await getAllClasses()
      setRows(data as ClassInfo[])
      setLoading(false)
    }
    getRows()
  }, [])

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
            loadingOverlay: LinearProgress,
          }}
          loading={!rows.length && loading}
        />
      </ThemeProvider>
    </div>
  )
}

/**
 * @returns Custom toolbar for the table.
 */
function CustomToolbar() {
  const toast = useToast()
  function changeMyName() {
    if (selectedRows.length !== 1) {
      multipleRowEditToastWarn(toast, "You can't edit multiple rows at once")
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
