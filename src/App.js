import React from 'react'
import Details from './components/Details/Details'
import { Grid } from '@material-ui/core'
import useStyles from './style'
import Main from './components/Main/Main'
const App = () =>
{
  const classes = useStyles()

  return (
    <div>
      <Grid className={classes.grid} container spacing={3} alignItems="center" justify="center" style={{ height: "100vh" }}>
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
