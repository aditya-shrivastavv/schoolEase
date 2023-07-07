'use client'

import { getAllTeachers } from '@/actions/teacherActions'
import { editTeacherModalAtom } from '@/atom/editTeacherState'
import { teacherTableNeedsRefresh } from '@/atom/refresh/teacherTableNeedsRefresh'
import { errorToast, successToast, warningToast } from '@/components/toast/toast'
import { MuiTheme } from '@/theme/mui'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Button, Link, Tag, TagLabel, useToast } from '@chakra-ui/react'
import NextLink from 'next/link'
import { LinearProgress, ThemeProvider } from '@mui/material'
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
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { deleteTeacher as deleteTeacherDb } from '@/actions/teacherActions'

let selectedRows: TeacherFormData[] = []

export default function TeacherTable() {
  const [rows, setRows] = useState<TeacherFormData[]>([])
  const [loading, setLoading] = useState(true)
  const refresh = useRecoilValue(teacherTableNeedsRefresh)

  useEffect(() => {
    const getRows = async () => {
      setLoading(true)
      const data = await getAllTeachers()
      setRows(data)
      setLoading(false)
    }
    getRows()
  }, [refresh])

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
        params.value.map((cls: ClassSelectData) => (
          <Link
            as={NextLink}
            key={cls.label}
            href={`/manage/classes/${cls.label}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Tag size={'sm'} bgColor={cls.color} px={2} mr={2} borderRadius={'full'}>
              <TagLabel>{cls.value}</TagLabel>
            </Tag>
          </Link>
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
            loadingOverlay: LinearProgress,
          }}
          loading={!rows.length && loading}
        />
      </ThemeProvider>
    </div>
  )
}

function CustomToolbar() {
  const toast = useToast()
  const [deletingTeacher, setDeletingTeacher] = useState(false)
  const setRefresh = useSetRecoilState(teacherTableNeedsRefresh)
  const handleTeacherEditModal = useSetRecoilState(editTeacherModalAtom)

  function handleEditModal() {
    if (selectedRows.length !== 1) {
      warningToast(toast, 'You can only edit one teacher at a time.')
    } else {
      handleTeacherEditModal({
        open: true,
        teacherData: selectedRows[0],
      })
    }
  }

  async function deleteTeacher() {
    if (!selectedRows.length) {
      errorToast(toast, 'Please select at least one teacher to delete.')
      return
    }
    setDeletingTeacher(true)
    const res = await deleteTeacherDb(selectedRows)
    setRefresh((prev) => ({ ...prev, count: prev.count + 1 }))
    setDeletingTeacher(false)
    successToast(toast, `Successfully deleted ${res.length} teachers.`)
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
        onClick={deleteTeacher}
        isLoading={deletingTeacher}
      >
        DELETE
      </Button>
    </GridToolbarContainer>
  )
}
