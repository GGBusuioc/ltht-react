import { ColumnDef, ColumnHelper, createColumnHelper } from '@tanstack/react-table'
import { Header, TableData, UnknownDataType } from './table-rewrite'
import TableCell from './table-cell'

const createColumns = (tableData: TableData): ColumnDef<UnknownDataType>[] => {
  const columnHelper = createColumnHelper<UnknownDataType>()

  const columns = createColumnsRecursively(tableData.headers, columnHelper)

  return columns
}

const createColumnsRecursively = (
  headers: Header[],
  columnHelper: ColumnHelper<UnknownDataType>
): ColumnDef<UnknownDataType>[] => {
  const result: ColumnDef<UnknownDataType>[] = headers.map((header) => {
    if (header.type === 'display') {
      return columnHelper.display({
        id: header.id,
        header: () => <TableCell {...header.cellProps} />,
      })
    }

    if (header.type === 'accessor') {
      return columnHelper.accessor(header.id, {
        header: () => <TableCell {...header.cellProps} />,
      }) as ColumnDef<UnknownDataType, unknown>
    }

    return columnHelper.group({
      header: header.cellProps.text ?? '',
      columns: createColumnsRecursively(header.subheaders ?? [], columnHelper),
    })
  })

  return result
}

export default createColumns
