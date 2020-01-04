import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import ExclamationIcon from '@ltht-react/exclamation-icon'
import ExclamationIconReadMe from '@ltht-react/exclamation-icon/README.md'

const stories = storiesOf('Elements|Icons|Examples', module)

stories.addParameters({
  readme: {
    content: ExclamationIconReadMe,
  },
})

stories.addWithJSX('Exclamation Icon', () => (
  <>
    <ExclamationIcon status="green" size="small" />
    <ExclamationIcon status="green" size="medium" />
    <ExclamationIcon status="green" size="large" />
    <ExclamationIcon status="amber" size="small" />
    <ExclamationIcon status="amber" size="medium" />
    <ExclamationIcon status="amber" size="large" />
    <ExclamationIcon status="red" size="small" />
    <ExclamationIcon status="red" size="medium" />
    <ExclamationIcon status="red" size="large" />
  </>
))
