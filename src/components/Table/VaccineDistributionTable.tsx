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
      backgroundColor: "#186fb5",
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

const VaccineTable: React.FC<IProps> = ({ data }: IProps) => {
  const classes = useStyles();
  const [rows, setRows] = React.useState<any>();

  React.useEffect(() => {
    const detail = data?.dataDistribution;
    const rows = detail && Object.entries(detail);
    sortData(rows);
    setRows(rows);
  }, [data]);

  const sortData = (receiveData: any) => {
    receiveData &&
      receiveData?.sort((a: any, b: any) => {
        var nameA = a && a[1].Planned; // ignore upper and lowercase
        var nameB = b && b[1].Planned; // ignore upper and lowercase
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
                Vaccine theo kế hoạch
              </StyledTableCell>
              <StyledTableCell align="center">Vaccine hiện có</StyledTableCell>
              <StyledTableCell align="center">Tỉ lệ phân phối</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row: any, index: number) => (
              <StyledTableRow key={index}>
                {/* {console.log(row)} */}
                <StyledTableCell align="center">{row[1]?.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {Number(row[1]?.Planned).toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {Number(row[1]?.Realistic).toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {Number(row[1]?.DistributedRate).toLocaleString()}%
                </StyledTableCell>{" "}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default VaccineTable;
