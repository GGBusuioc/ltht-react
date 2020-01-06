import { Flag, FlagStatusCode, PartialDateTimeKindCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
}

const FlagOne: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard',
  metadata: mockMetadata,
  author: {
    display: 'John Smith',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    type: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'Lives in Known High Risk Area', code: '109006' }],
  },
  period: {
    start: {
      value: new Date(2019, 4, 5),
      kind: PartialDateTimeKindCode.Date,
    },
  },
  status: FlagStatusCode.Inactive,
}

const FlagTwo: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard',
  metadata: mockMetadata,
  author: {
    display: 'John Smith',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    type: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'High Risk of Violence', code: '56706' }],
  },
  period: {
    start: {
      value: new Date(2017, 3, 12),
      kind: PartialDateTimeKindCode.Date,
    },
  },

  status: FlagStatusCode.Active,
}

export { FlagOne, FlagTwo }
