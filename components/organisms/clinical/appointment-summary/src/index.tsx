import React from 'react'

import { Encounter } from '@ltht-react/types'
import { Card, CardHeader, CardList, CardListItem } from '@ltht-react/card'
import AppointmentSummaryItem from './molecules/appointment-summary-item'

const AppointmentSummary: React.FC<Props> = ({ title = 'Appointments', encounters = [], clickHandler }) => {
  return (
    <Card noData={encounters.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={!!clickHandler}>
        {encounters.map(encounter => (
          <CardListItem key={encounter.id}>
            <AppointmentSummaryItem encounter={encounter} clickHandler={clickHandler} />
          </CardListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  encounters: Encounter[] | undefined
  clickHandler?(appointment: Encounter): void
}

export default AppointmentSummary
