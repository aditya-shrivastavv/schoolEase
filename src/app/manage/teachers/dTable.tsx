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
import { Button, Tag, TagLabel, Flex, Text, IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import { editTeacherModalAtom } from '@/atom/editTeacherModalAtom'

export default function DataTable() {
  const openEditModal = useSetRecoilState(editTeacherModalAtom)

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 230,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Flex justify={'space-between'} align={'center'} w={'100%'} className="parent">
            <Text>{params.value}</Text>
            <IconButton
              icon={<EditIcon />}
              display={'none'}
              bgColor={'gray.300'}
              p={'1px 4px'}
              borderRadius={'md'}
              aria-label="edit profile btn"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                console.log('Edit Teacher')
                openEditModal({ open: true })
                console.log('Edit Teacher 2')
              }}
              css={{
                '.parent:hover &': {
                  display: 'block',
                },
              }}
            />
          </Flex>
        )
      },
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
      headerName: 'Assigned Classes',
      minWidth: 230,
      renderCell: (params: GridRenderCellParams) =>
        params.value.map((item: string) => (
          <Tag key={item} size={'sm'} bgColor={'green.300'} px={2} mr={2} borderRadius={'full'}>
            <TagLabel>{item}</TagLabel>
          </Tag>
        )),
    },
  ]

  const rows = sampledata

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
            const selectedRows = rows.filter((row) => selectedIDs.has(row.id))
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
