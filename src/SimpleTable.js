// import * as React from 'react'
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// interface MyProps{
//   rows: Array<{
//     id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//   }>;
// }

// export default function SimpleTable({ rows }: MyProps) {
//   return (
//     <Paper>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Id</TableCell>
//             <TableCell>First Name</TableCell>
//             <TableCell>Last Name</TableCell>
//             <TableCell>Email</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.id}>
//               <TableCell>{row.id}</TableCell>
//               <TableCell>{row.firstName}</TableCell>
//               <TableCell>{row.lastName}</TableCell>
//               <TableCell>{row.email}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }