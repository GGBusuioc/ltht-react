import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import FlagSummary from '@ltht-react/flag-summary'
import readme from '@ltht-react/flag-summary/README.md'
import * as fixtures from './flag-summary.fixtures'

const stories = storiesOf('Components|Flag|Examples', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Flag Summary', () => <FlagSummary title="Alerts" flags={[fixtures.FlagOne, fixtures.FlagTwo]} />)
