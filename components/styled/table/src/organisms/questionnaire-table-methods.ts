import {
  Axis,
  Maybe,
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireResponse,
  QuestionnaireResponseItem,
  QuestionnaireResponseItemAnswer,
} from '@ltht-react/types'
import { EnsureMaybe, EnsureMaybeArray, partialDateTimeText } from '@ltht-react/utils'
import { DataEntity, Header, TableData } from '../molecules/table'
import { CellProps } from '../molecules/table-cell'

const mapQuestionnaireDefinitionAndResponsesToTableData = (
  definition: Questionnaire,
  questionnaireResponses: QuestionnaireResponse[],
  axis: Axis
): TableData | undefined => {
  const definitionItems = EnsureMaybeArray<QuestionnaireItem>(
    EnsureMaybe<Maybe<QuestionnaireItem>[]>(definition.item, [])
  )

  if (definitionItems.length === 0) {
    return undefined
  }

  if (axis === 'y') {
    return mapQuestionnaireObjectsToVerticalTableData(definitionItems, questionnaireResponses)
  }
  return mapQuestionnaireObjectsToHorizontalTableData(definitionItems, questionnaireResponses)
}

const mapQuestionnaireObjectsToHorizontalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[]
): TableData => ({
  headers: [
    {
      id: 'date',
      type: 'accessor',
      cellProps: { text: 'Record Date' },
    },
    ...recursivelyMapQuestionnaireItemsIntoHeaders(definitionItems),
  ],
  rows: mapQuestionnaireResponsesIntoDataEntities(records),
})

const recursivelyMapQuestionnaireItemsIntoHeaders = (questionnaireItems: QuestionnaireItem[]): Header[] =>
  questionnaireItems.map((questionnaireItem) => {
    const subItems = EnsureMaybeArray<QuestionnaireItem>(questionnaireItem.item ?? [])

    return {
      id: questionnaireItem?.linkId ?? '',
      type: subItems.length > 0 ? 'group' : 'accessor',
      cellProps: { text: questionnaireItem?.text ?? '' },
      subHeaders: recursivelyMapQuestionnaireItemsIntoHeaders(subItems),
    }
  })

const mapQuestionnaireResponsesIntoDataEntities = (records: QuestionnaireResponse[]): DataEntity[] =>
  records
    .filter((record) => !!record.item)
    .map((record) => {
      let dataEntity: DataEntity = {}
      dataEntity.date = { text: partialDateTimeText(record.authored) }

      record.item
        ?.filter((item) => item?.linkId && item?.answer)
        .forEach((item) => {
          const linkId = EnsureMaybe<string>(item?.linkId)
          const answer = EnsureMaybe<QuestionnaireResponseItemAnswer>(item?.answer?.find((answer) => !!answer))

          dataEntity[linkId] = { text: EnsureMaybe<string>(answer.valueString, '') }

          if (answer.item) {
            dataEntity = recursivelyMapResponseItemsOntoData(
              EnsureMaybeArray<QuestionnaireResponseItem>(answer.item),
              dataEntity
            )
          }
        })

      return dataEntity
    })

const recursivelyMapResponseItemsOntoData = (
  items: QuestionnaireResponseItem[],
  dataEntity: DataEntity
): DataEntity => {
  let updatedDataEntity = { ...dataEntity }
  items.forEach((item) => {
    const firstAnswer = item.answer ? item.answer[0] : undefined

    if (item.linkId && firstAnswer) {
      updatedDataEntity[item.linkId] = {
        text: EnsureMaybe<string>(firstAnswer.valueString, ''),
      }

      if (firstAnswer.item) {
        updatedDataEntity = recursivelyMapResponseItemsOntoData(
          EnsureMaybeArray<QuestionnaireResponseItem>(firstAnswer.item),
          updatedDataEntity
        )
      }
    }
  })
  return updatedDataEntity
}

const mapQuestionnaireObjectsToVerticalTableData = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[]
): TableData => ({
  headers: [
    {
      id: 'property',
      type: 'accessor',
      cellProps: { text: '' },
    },
    ...records.map(
      (record): Header => ({
        id: record?.id ?? '',
        type: 'accessor',
        cellProps: { text: partialDateTimeText(record.authored) ?? '' },
      })
    ),
  ],
  rows: buildVerticalCellRows(definitionItems, records),
})

const buildVerticalCellRows = (definitionItems: QuestionnaireItem[], records: QuestionnaireResponse[]): DataEntity[] =>
  definitionItems.map((item) => {
    let dataEntity: DataEntity = {}

    dataEntity = buildVerticalCellRowsRecursive(
      EnsureMaybeArray<QuestionnaireItem>([item]),
      records,
      dataEntity
    )

    return dataEntity
  })

const buildVerticalCellRowsRecursive = (
  definitionItems: QuestionnaireItem[],
  records: QuestionnaireResponse[],
  dataEntity: DataEntity
): DataEntity => {
  let updatedDataEntity = { ...dataEntity }
  definitionItems.forEach((definitionItem) => {
    updatedDataEntity.property = { text: definitionItem.text ?? '' }

    if (definitionItem.linkId) {
      records.forEach((record, recordIndex) => {
        updatedDataEntity = getRecordItemByLinkId(
          EnsureMaybeArray<QuestionnaireResponseItem>(record.item ?? []),
          EnsureMaybe<string>(definitionItem.linkId),
          updatedDataEntity,
          recordIndex
        )
      })
    }

    if (definitionItem.item && definitionItem.item.length > 0) {
      updatedDataEntity.subRows = buildVerticalCellRows(
        EnsureMaybeArray<QuestionnaireItem>(definitionItem.item),
        records
      )
    }
  })

  return updatedDataEntity
}

const getRecordItemByLinkId = (
  recordItems: QuestionnaireResponseItem[],
  linkId: string,
  dataEntity: DataEntity,
  recordIndex: number
) => {
  let updatedDataEntity = { ...dataEntity }
  recordItems.forEach((recordItem) => {
    const recordItemAnswer =
      recordItem.answer && recordItem.answer.length > 0 ? EnsureMaybe(recordItem.answer[0]) : undefined

    if (recordItemAnswer) {
      if (recordItem?.linkId && recordItem?.linkId === linkId) {
        updatedDataEntity[recordIndex + 1] = createCellPropsForAnswer(recordItemAnswer)
      }
      if (recordItemAnswer.item && recordItemAnswer.item.length > 0) {
        updatedDataEntity = getRecordItemByLinkId(
          EnsureMaybeArray<QuestionnaireResponseItem>(recordItemAnswer.item),
          linkId,
          updatedDataEntity,
          recordIndex
        )
      }
    }
  })

  return updatedDataEntity
}

const createCellPropsForAnswer = (answer: QuestionnaireResponseItemAnswer): CellProps => {
  if (answer.valueString) {
    if (answer.valueString === 'CHECKBOX') {
      return {
        iconProps: { type: 'checkbox', size: 'medium' },
      }
    }
    return {
      text: answer.valueString,
    }
  }
  return {
    text: '',
  }
}

export default mapQuestionnaireDefinitionAndResponsesToTableData
