/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { EpisodeOfCare } from '@ltht-react/types'

const styles = css`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const InvolvedTeamDescription: React.FC<Props> = ({ episodeOfCare }) => {
  return <div css={styles}>{episodeOfCare.careManager?.display}</div>
}

interface Props {
  episodeOfCare: EpisodeOfCare
}

export default InvolvedTeamDescription
