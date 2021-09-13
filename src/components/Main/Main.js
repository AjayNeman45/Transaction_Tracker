import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './style'
import Form from './Form/Form'
import List from './List/List'
import  useTransactions  from '../../useTransactions'

const Main = () =>
{
    const classes = useStyles();
    const income_total = useTransactions("Income")
    const expense_total = useTransactions("Expense")
    const total_balance = income_total.total - expense_total.total;
    return (
        <Card classes={classes.root}>
            <CardHeader title="Transaction Tracker" subheader="Made by Ajay Neman" />
            <CardContent>
                <Typography align="center" variant="h5">Total balance is <b>${total_balance}</b></Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
