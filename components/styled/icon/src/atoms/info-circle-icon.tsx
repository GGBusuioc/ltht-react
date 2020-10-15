/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const InfoCircleIcon: React.FC<IconProps> = ({ status, size }) => {
  const styles = css`
  color: inherit;
  ${status === 'green' && `color: ${ICON_COLOURS.SUCCESS};`}
  ${status === 'amber' && `color: ${ICON_COLOURS.WARNING};`}
  ${status === 'red' && `color: ${ICON_COLOURS.DANGER};`}
  ${status === 'default' && `color: ${ICON_COLOURS.DEFAULT};`}
  ${status === 'info' && `color: ${ICON_COLOURS.INFO};`}
  `
  return (
    <FontAwesomeIcon className="icon__info-circle" css={styles} icon={faInfoCircle} size={calculateIconSize(size)} />
  )
}

type IconProps = {
  status?: 'red' | 'green' | 'amber' | 'info' | 'default'
  size: IconSizes
}

export default InfoCircleIcon
