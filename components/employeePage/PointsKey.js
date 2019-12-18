import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  },
  title: {
    fontFamily: 'Roboto Condensed',
    color: 'white',
    background: '#637ACA',
    fontSize: '14pt',
    size: '100%',
  },
  text: { fontFamily: 'Roboto Condensed', fontSize: '12pt' },
  points: {
    width: '50px',
    fontFamily: 'Roboto Condensed',
    fontSize: '16pt'
  },
  prize: { margin: '10px 0px 0px 0px' }
});

function createData(title, points) {
  return { title, points };
}

const rows = [
  createData('SUBMIT FEEDBACK', '+25 ⭐'),
  createData('RECEIVE  FEEDBACK', '+50 ⭐'),
  createData('POLL', '+10 ⭐')
];

export default function PointsKey() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title} />
              <TableCell align="right" className={classes.title}>
                REWARD
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row" className={classes.text}>
                  {row.title}
                </TableCell>
                <TableCell align="right" className={classes.points}>
                  {row.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
