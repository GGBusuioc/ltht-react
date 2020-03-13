/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const FlagTitle: React.FC<Props> = ({ flag }) => {
  return <div css={styles}>{codeableConceptDisplaySummary(flag.code)}</div>
}

interface Props {
  flag: Flag
}

export default FlagTitle
