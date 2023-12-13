import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewstud = () => {
    var [student,setStudent] = useState([]);
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setStudent(res.data);
        })
    })
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Roll No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {student.map((val, i) => {
                        return (
                            <TableRow>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.email}</TableCell>
                            <TableCell>{val.phone}</TableCell>
                            <TableCell>{val.city}</TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Viewstud