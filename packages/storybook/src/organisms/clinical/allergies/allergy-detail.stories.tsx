import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

import AllergyDetailItem from '@ltht-react/allergy-detail'
import readme from '@ltht-react/allergy-summary/README.md'
import * as fixtures from './allergy.fixtures'

const stories = storiesOf('Organisms - Clinical|Allergy', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Detail', () => <AllergyDetailItem allergy={fixtures.AllergyOne} />)
