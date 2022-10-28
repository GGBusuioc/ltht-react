import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const calculateIconColor = (status: string): SerializedStyles => css`
  ${status === 'green' && `${ICON_COLOURS.SUCCESS.VALUE};`}
  ${status === 'amber' && `${ICON_COLOURS.WARNING};`}
  ${status === 'red' && `${ICON_COLOURS.DANGER};`}
  ${status === 'default' && `${ICON_COLOURS.DEFAULT};`}
  ${status === 'info' && `${ICON_COLOURS.INFO};`}
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledFontAwesomeIconProps>`
  color: ${({ status }): SerializedStyles => calculateIconColor(status)};
`

const ExclamationIcon: FC<ExclamationIconProps> = ({ status, size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__exclamation`.trimStart()}
    status={status}
    icon={faExclamationTriangle}
    size={calculateIconSize(size)}
    {...rest}
  />
)

type StatusValues = 'red' | 'green' | 'amber' | 'info' | 'default'

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status: StatusValues
}

interface ExclamationIconProps extends HTMLAttributes<SVGElement> {
  status: StatusValues
  size: IconSizes
}

export default ExclamationIcon
