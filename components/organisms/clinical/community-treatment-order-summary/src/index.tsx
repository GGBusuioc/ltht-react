import React from 'react'
import { LypftCommunityTreatmentOrder } from '@ltht-react/types'
import { Card, CardHeader, CardList, CardListItem } from '@ltht-react/card'
import CommunityTreatmentOrderSummaryItem from './molecules/community-treatment-order-summary-item'

const CommunityTreatmentOrderSummary: React.FC<Props> = ({
  title = 'Community Treatment Orders',
  communityTreatmentOrders = [],
  clickHandler,
}) => {
  return (
    <Card noData={communityTreatmentOrders.length === 0}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardList clickable={clickHandler !== undefined}>
        {communityTreatmentOrders.map(order => (
          <CardListItem key={order.id}>
            <CommunityTreatmentOrderSummaryItem communityTreatmentOrder={order} clickHandler={clickHandler} />
          </CardListItem>
        ))}
      </CardList>
    </Card>
  )
}

interface Props {
  title?: string
  communityTreatmentOrders: LypftCommunityTreatmentOrder[] | undefined
  clickHandler?(communityTreatmentOrder: LypftCommunityTreatmentOrder): void
}

export default CommunityTreatmentOrderSummary
