/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Observation } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const ObservationValue: React.FC<Props> = ({ observation }) => {
  return <div css={styles}>{codeableConceptDisplaySummary(observation.code)}</div>
}

interface Props {
  observation: Observation
}

export default ObservationValue
