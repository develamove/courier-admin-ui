import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'
import yellow from '@material-ui/core/colors/yellow'


const themes = [
  {
    id: 'default',
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red,
      },
    },
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
      },
    },
  },
  {
    id: 'yellow',
    color: yellow[500],
    source: {
      palette: {
        primary: yellow,
        secondary: red,
        error: red,
      },
    },
  },
]

export default themes
