/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { DESKTOP_MEDIA_QUERY, BTN_COLOURS } from '@ltht-react/styles'

export const styles = {
  base: css`
    display: block;
    text-align: center;
    white-space: nowrap;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 4px;
    width: 100%;

    &:hover:not([disabled]) {
      cursor: pointer;
    }

    &:disabled {
      opacity: 0.65;
    }

    ${DESKTOP_MEDIA_QUERY} {
      display: inline-block;
      vertical-align: middle;
      width: auto;
    }
  `,
  primary: css`
    color: ${BTN_COLOURS.PRIMARY.TEXT};
    background-color: ${BTN_COLOURS.PRIMARY.VALUE};
    &:hover {
      background-color: ${BTN_COLOURS.PRIMARY.HOVER};
    }

    &:disabled {
      background-color: ${BTN_COLOURS.PRIMARY.DISABLED};
    }
  `,
  standard: css`
    color: ${BTN_COLOURS.STANDARD.TEXT};
    background-color: ${BTN_COLOURS.STANDARD.VALUE};
    &:hover {
      background-color: ${BTN_COLOURS.STANDARD.HOVER};
    }

    &:disabled {
      background-color: ${BTN_COLOURS.STANDARD.DISABLED};
    }
  `,
  default: css`
    color: ${BTN_COLOURS.DEFAULT.TEXT};
    background-color: ${BTN_COLOURS.DEFAULT.VALUE};
    &:hover {
      background-color: ${BTN_COLOURS.DEFAULT.HOVER};
    }

    &:disabled {
      background-color: ${BTN_COLOURS.DEFAULT.DISABLED};
    }
  `,
  workflow: css`
    color: ${BTN_COLOURS.WORKFLOW.TEXT};
    background-color: ${BTN_COLOURS.WORKFLOW.VALUE};
    &:hover {
      background-color: ${BTN_COLOURS.WORKFLOW.HOVER};
    }

    &:disabled {
      background-color: ${BTN_COLOURS.WORKFLOW.DISABLED};
    }
  `,
}

const Button: React.FC<Props> = ({ type, value, buttonStyle = 'default', disabled = false }) => {
  /* eslint-disable react/button-has-type */
  return (
    <button type={type} css={[styles.base, styles[buttonStyle]]} disabled={disabled}>
      {value}
    </button>
  )
}

type ButtonStyle = 'default' | 'primary' | 'standard' | 'workflow'

interface Props extends ButtonProps {
  buttonStyle?: ButtonStyle
}

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  value: string
  disabled?: boolean
}

export default Button
