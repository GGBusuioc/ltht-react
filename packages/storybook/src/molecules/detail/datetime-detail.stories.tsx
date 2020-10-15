import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import readme from '@ltht-react/detail/README.md'
import { DatetimeDetail } from '@ltht-react/detail'
import * as fixtures from './detail.fixtures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stories = storiesOf('Molecules|Detail', module) as any

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Datetime', () => <DatetimeDetail term="Start Date" datetime={fixtures.partialDateTime} />)
