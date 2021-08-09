import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IReportVN } from "../../interface";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      // backgroundColor: "#1bb55c",
      backgroundColor: "#f50057",
      color: theme.palette.common.white,
      fontWeight: 600,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

interface IProps {
  data?: IReportVN;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const CovidTable: React.FC<IProps> = ({ data }: IProps) => {
  const classes = useStyles();
  const detail = data?.detail;
  const rows = detail && Object.entries(detail);

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Tỉnh/TP</StyledTableCell>
              <StyledTableCell align="center">Tổng ca mắc bệnh</StyledTableCell>
              <StyledTableCell align="center">Đã khỏi</StyledTableCell>
              <StyledTableCell align="center">Tử vong</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: any, index: number) => (
              <StyledTableRow key={index}>
                {/* {console.log(row)} */}
                <StyledTableCell align="center">{row[1]?.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {Number(row[1]?.cases).toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {Number(row[1]?.recovered).toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {Number(row[1]?.deaths).toLocaleString()}
                </StyledTableCell>{" "}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CovidTable;
