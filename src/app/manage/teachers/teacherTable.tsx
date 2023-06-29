'use client'

import { type TeacherData, editTeacherModalAtom } from '@/atom/editTeacherState'
import { multipleRowEditToastWarn } from '@/components/toast/toast'
import { sampledata } from '@/db/sample'
import { MuiTheme } from '@/theme/mui'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Button, Tag, TagLabel, useToast } from '@chakra-ui/react'
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
import { useSetRecoilState } from 'recoil'

let selectedRows: TeacherData = []

export default function TeacherTable() {
  const rows = sampledata
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 240,
    },
    { field: 'email', headerName: 'Email', minWidth: 260 },
    {
      field: 'classes',
      headerName: 'Classes',
      minWidth: 320,
      renderCell: (params: GridRenderCellParams) =>
        params.value.map((item: string) => (
          <Tag key={item} size={'sm'} bgColor={'green.300'} px={2} mr={2} borderRadius={'full'}>
            <TagLabel>{item}</TagLabel>
          </Tag>
        )),
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
  const handleTeacherEditModal = useSetRecoilState(editTeacherModalAtom)
  function handleEditModal() {
    if (selectedRows.length !== 1) {
      multipleRowEditToastWarn(toast)
    } else {
      handleTeacherEditModal({
        open: true,
        teacherData: [selectedRows[0]],
      })
    }
  }

  return (
    <GridToolbarContainer sx={{ gap: 1, mb: 1 }}>
      <GridToolbarDensitySelector />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
      <Button
        leftIcon={<EditIcon boxSize={'16px'} />}
        variant={'ghost'}
        color={'orange.500'}
        borderRadius={'md'}
        p={'4px 5px'}
        _hover={{ color: 'orange.500', bgColor: 'orange.50' }}
        onClick={handleEditModal}
      >
        EDIT
      </Button>
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
