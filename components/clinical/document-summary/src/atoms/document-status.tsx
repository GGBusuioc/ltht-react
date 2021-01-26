import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { titleCase } from '@ltht-react/utils'
import { DocumentReference } from '@ltht-react/types'

const StyledStatus = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const DocumentStatus: React.FC<Props> = ({ document: { status } }) => {
  if (!status) return <></>

  return <StyledStatus>{titleCase(status)}</StyledStatus>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  document: DocumentReference
}

export default DocumentStatus
