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
import { IDistributeVaccine } from "../../interface";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#1bb55c",
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
  data?: IDistributeVaccine;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const VaccineDistributionTable: React.FC<IProps> = ({ data }: IProps) => {
  const classes = useStyles();
  const [rows, setRows] = React.useState<any>();

  React.useEffect(() => {
    const detail = data?.dataVacDose;
    const rows = detail && Object.entries(detail);
    sortData(rows);
    setRows(rows)
  }, [data]);

  const sortData = (receiveData: any) => {
    receiveData &&
      receiveData?.sort((a: any, b: any) => {
        var nameA = a && a[1].vaccines; // ignore upper and lowercase
        var nameB = b && b[1].vaccines; // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Tỉnh/TP</StyledTableCell>
              <StyledTableCell align="center">
                Số người đã tiêm chủng
              </StyledTableCell>
              <StyledTableCell align="center">Đã tiêm 1 lần</StyledTableCell>
              <StyledTableCell align="center">Đã tiêm 2 lần</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: any, index: number) => (
              <StyledTableRow key={index}>
                {/* {console.log(row)} */}
                <StyledTableCell align="center">{row[1]?.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {row[1]?.vaccines.toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row[1]?.onedose.toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row[1]?.fulldose.toLocaleString()}
                </StyledTableCell>{" "}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default VaccineDistributionTable;
