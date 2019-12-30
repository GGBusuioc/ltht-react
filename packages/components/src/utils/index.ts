import { withInfo as _withInfo } from '@storybook/addon-info'
const css = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    h2: {
      display: 'inline',
      color: '#999',
    },
  },
  infoBody: {
    backgroundColor: '#eee',
    padding: '0px 5px',
    lineHeight: '2',
  },
}
export const withInfo = (text: string) => _withInfo({ inline: true, source: false, styles: css, text: text })
