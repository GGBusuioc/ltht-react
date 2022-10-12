import { FC } from 'react'

import { Questionnaire, QuestionnaireResponse, SummaryTableViewType } from '@ltht-react/types'
import QuestionnaireTable from './molecules/questionnaire-table'

const Table: FC<IProps> = ({ definition, records, orientation = 'VERTICAL' }) => {
  if (!definition.item || definition.item.length === 0) {
    return <div>Could not render table. Definition items array was empty.</div>
  }

  return <QuestionnaireTable definitionItems={definition.item} records={records} orientation={orientation} />
}

interface IProps {
  orientation?: SummaryTableViewType
  definition: Questionnaire
  records: QuestionnaireResponse[]
}

export default Table
