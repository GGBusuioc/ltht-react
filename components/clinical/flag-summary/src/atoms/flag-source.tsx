/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { metadataSourceSummaryText } from '@ltht-react/utils'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: right;
`

const FlagSource: React.FC<Props> = ({ flag }) => {
  return <div css={styles}>{metadataSourceSummaryText(flag.metadata)}</div>
}

interface Props {
  flag: Flag
}

export default FlagSource
