import React from 'react'
import { storiesOf } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import InvolvedTeamSummary from '@ltht-react/involved-team-summary'
import readme from '@ltht-react/involved-team-summary/README.md'
import * as fixtures from './involved-team-summary.fixtures'

const stories = storiesOf('Organisms - Clinical|Involved Team', module)

stories.addWithJSX = JSXAddon.addWithJSX

stories.addParameters({
  readme: {
    sidebar: readme,
  },
})

stories.addWithJSX('Summary', () => (
  <InvolvedTeamSummary episodeOfCares={[fixtures.InvolvedTeamOne, fixtures.InvolvedTeamTwo]} />
))
