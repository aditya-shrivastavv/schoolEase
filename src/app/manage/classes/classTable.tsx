'use client'

import { getAllClasses } from '@/actions/classActions'
import { deleteClass as deleteClassDb } from '@/actions/classActions'
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
import { classTableNeedsRefresh } from '@/atom/refresh/classTableNeedsRefresh'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { errorToast, successToast } from '@/components/toast/toast'

// gets value automatically.
let selectedRows: any = []

/**
 * Table for displaying all classes. Uses MUI DataGrid.
 */
export default function ClassTable() {
  const [loading, setLoading] = useState(true)
  const [rows, setRows] = useState<ClassInfo[]>([])
  const refresh = useRecoilValue(classTableNeedsRefresh)

  // Fetching Classes in useEffect
  useEffect(() => {
    const getRows = async () => {
      setLoading(true)
      const data = await getAllClasses()
      setRows(data as ClassInfo[])
      setLoading(false)
    }
    getRows()
  }, [refresh])

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
  const setRefresh = useSetRecoilState(classTableNeedsRefresh)
  const [deletingClass, setDeletingClass] = useState(false)

  async function deleteClass() {
    if (!selectedRows.length) {
      errorToast(toast, 'Please select at least one class to delete.')
      return
    }
    setDeletingClass(true)
    const res = await deleteClassDb(selectedRows)
    setRefresh((prev) => ({ ...prev, count: prev.count + 1 }))
    setDeletingClass(false)
    successToast(toast, `Successfully deleted ${res.length} classes.`)
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
        isLoading={deletingClass}
        onClick={deleteClass}
      >
        DELETE
      </Button>
    </GridToolbarContainer>
  )
}
