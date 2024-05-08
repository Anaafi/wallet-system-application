// import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  date: string,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, date, fat, carbs, protein };
}

const rows = [
  createData('Wallet Deposit', 'May 27, 2020 | 12:38 PM', 6.0, 24, 4.0),
  createData('Wallet Transfer', 'May 27, 2020 | 12:38 PM', 9.0, 37, 4.3),
  createData('Wallet Deposit', 'May 27, 2020 | 12:38 PM', 16.0, 24, 6.0),
  createData('Wallet Deposit', 'May 27, 2020 | 12:38 PM', 16.0, 24, 6.0),
  createData('Wallet Transfer', 'May 27, 2020 | 12:38 PM', 3.7, 67, 4.3),
  createData('Wallet Deposit', 'May 27, 2020 | 12:38 PM', 16.0, 49, 3.9),
];

export function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-red-300">
            <TableCell>Transaction Type</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
