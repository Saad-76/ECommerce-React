import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BasicEnhancedTableHead from "./BasicEnhancedTableHead";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import theme from "../theme";
import SettingsIcon from "@mui/icons-material/Settings";
import BasicCustomizedCheckbox from "../components/BasicCustomizedCheckbox";
import BasicTablePagination from "./BasicTablePagination";
import DTSpinner from "../components/BasicSpinner";
import { changeSizeUnit } from "../utils/utils";
import { useEffect } from "react";
import {
  SortableContainer,
  SortableHandle,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function descendingComparator(a, b, orderBy) {
  if (orderBy === "size") {
    if (changeSizeUnit(b[orderBy]) < changeSizeUnit(a[orderBy])) {
      return -1;
    }
    if (changeSizeUnit(b[orderBy]) > changeSizeUnit(a[orderBy])) {
      return 1;
    }
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
  }

  return 0;
}

function BasicEnhancedTable(props) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("sr");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(
    props.rowsPage ? props.rowsPage : 5
  );
  const { rows, headerCells, isSetting } = props;
  const CustomTableCell = styled(TableCell)(({ theme, props }) => ({
    color: theme.palette.primary.main,
    fontSize: "14px",
    padding: isSetting ? "10px 1px 10px 20px !important" : "5px  1px 5px 2px",
  }));

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      props.someFunctionHere(newSelecteds);
      setSelected(newSelecteds);
      return;
    } else {
      props.someFunctionHere(rows[0]);
    }
    setSelected([]);
  };
  useEffect(() => {
    if (props.checkedBoxes) {
      let temp = [...rows];
      temp = temp.filter((item) => item.checked);
      const dummyData = temp.map((item) => item.id);
      setSelected([...dummyData]);
    }
  }, [props.checkedBoxes]);

  // useEffect(()=>{
  //   if(props?.reloadOnPageChange){
  //     props.someFunctionHere([]);
  //     setSelected([]);
  //   }
  // },[JSON.stringify(props?.rows)?.length])
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (!props.selectSingleItem) {
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
    } else {
      newSelected = [];
      newSelected.push(name);
    }
    props.someFunctionHere(newSelected);
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleEdit = (row) => {};

  const handleDelete = (row) => {
    props.handleDelete(row.sr);
  };

  //Modal End
  var fixOffset = 40;
  var processedColumns = [];

  // Implementation for drag and drop
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newArray = [];
    let resp = arrayMove(rows, oldIndex, newIndex);
    resp.map((item) => {
      const newObj = {
        id: item.id,
      };
      newArray.push(newObj);
    });
    props.handleRowsDragAndDrop(newArray);
  };

  const Row = SortableElement(({ data, ...other }) => {
    return <TableRow {...other}>{other.children}</TableRow>;
  });
  // Universal component for turning a TableBody into a sortable container
  const TableBodySortable = SortableContainer(
    ({ children, displayRowCheckbox }) => (
      <TableBody displayRowCheckbox={displayRowCheckbox}>{children}</TableBody>
    )
  );
  //  Component which uses drag-n-drop activation when clicking inside the component
  const DragHandle = SortableHandle(({ style }) => (
    <DragHandleIcon sx={{ cursor: "move" }} />
  ));
  return (
    <>
      <TableContainer
        sx={{
          width: "100%",
          borderRadius: theme.shapes.primaryBtnBorderRadius,
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "2px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#D9D9D9",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#D9D9D9",
            borderRadius: 2,
          },
          minHeight: props.minHeight ? props.minHeight : "",
          background: `${theme.palette.primary.white}`,
          maxHeight: props.maxHeight ? props.maxHeight : "70vh",
          overflow: "auto",
        }}
      >
        <Table
          sx={{
            borderRadius: `${theme.table.borderRadius}`,
            overflow: "scroll",
          }}
          stickyHeader={props.stickyHeader}
          aria-label="sticky table"
          size="medium"
        >
          <BasicEnhancedTableHead
            {...props}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows?.length}
            headerCells={headerCells}
            selectedItem={selected}
          />
          {props.loading ? (
            <DTSpinner open={props.loading} />
          ) : rows?.length === 0 ? (
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ textAlign: "center" }}
                  colSpan={props.colSpan ? props.colSpan : 15}
                >
                  <Typography variant="p">No data found !</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : !props.dragRows ? (
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={props.key ? props.key : row.name + index}
                      id={props.id ? props.id : index}
                      selected={isItemSelected}
                      onClick={props.onClick ? props.onClick : ""}
                      sx={{
                    
                        "&.Mui-selected, &.Mui-selected:hover": {
                          backgroundColor:
                            theme.palette.primary.table.table_row,
                        },
                        "&.MuiTableRow-hover": {
                          "&:hover": {
                            backgroundColor:
                              theme.palette.primary.table.table_row,
                          },
                        },
                        fontSize: theme.fonts.small_heading,
                        cursor: props.cursor ? props.cursor : "",
                      }}
                    >
                      {props.isSetting ? null : (
                        <CustomTableCell
                          align="center"
                          sx={{
                            position: "sticky",
                            left: 0,
                            minWidth: "25px",
                            background: "#ffffff !important",
                            zIndex: 10,
                          }}
                        >
                          <BasicCustomizedCheckbox
                            onClick={(event) => handleClick(event, row.id)}
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                            sx={{
                              svg: { fill: theme.palette.primary.yellow_dark },
                            }}
                          />
                        </CustomTableCell>
                      )}

                      {Object.keys(row).map((key) => {
                        if (headerCells[Object.keys(row).indexOf(key)]) {
                          if (
                            headerCells[Object.keys(row).indexOf(key)].type ===
                            "text"
                          ) {
                            if (
                              headerCells[Object.keys(row).indexOf(key)].avatar
                            ) {
                              return (
                                <CustomTableCell
                                  component="td"
                                  id={labelId}
                                  scope="row"
                                  sx={{
                                    marginLeft: "2vh",
                                    position: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? "" // sticky
                                      : "initial",
                                    left: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? () => {
                                          if (
                                            !processedColumns.includes(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            )
                                          ) {
                                            processedColumns.push(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            );
                                            var offset = `${fixOffset}px`;
                                            fixOffset =
                                              fixOffset +
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              );
                                            return offset;
                                          } else {
                                            return (
                                              fixOffset -
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              )
                                            );
                                          }
                                        }
                                      : 0,
                                    background: "#ffffff",
                                  }}
                                >
                                  <span
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    {row[key].value ? row[key].value : row[key]}
                                    {row[key]?.icons?.map((icon) => {
                                      return icon.element;
                                    })}
                                  </span>
                                  {row[key].new ? (
                                    <span className="new-badge">New</span>
                                  ) : (
                                    ""
                                  )}
                                </CustomTableCell>
                              );
                            } else if (
                              headerCells[Object.keys(row).indexOf(key)].badge
                            ) {
                              return (
                                <CustomTableCell
                                  align={
                                    headerCells[Object.keys(row).indexOf(key)]
                                      .align
                                  }
                                  sx={{
                                    marginLeft: "2vh",
                                    position: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? "" // sticky
                                      : "initial",
                                    left: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? () => {
                                          if (
                                            !processedColumns.includes(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            )
                                          ) {
                                            processedColumns.push(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            );
                                            var offset = `${fixOffset}px`;
                                            fixOffset =
                                              fixOffset +
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              );
                                            return offset;
                                          } else {
                                            return (
                                              fixOffset -
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              )
                                            );
                                          }
                                        }
                                      : 0,
                                    background: "#ffffff",
                                  }}
                                >
                                  <span
                                    className="new-badge"
                                    style={{
                                      color: row[key].color,
                                      backgroundColor: row[key].background,
                                      borderRadius: "6px",
                                    }}
                                  >
                                    {typeof row[key] === "object"
                                      ? row[key].value
                                      : row[key]}
                                  </span>
                                </CustomTableCell>
                              );
                            } else {
                              return (
                                <CustomTableCell
                                  align={
                                    headerCells[Object.keys(row).indexOf(key)]
                                      .align
                                  }
                                  sx={{
                                    fontSize: theme.fonts.small_heading,
                                    position: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? "" // sticky
                                      : "initial",
                                    left: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? () => {
                                          if (
                                            !processedColumns.includes(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            )
                                          ) {
                                            processedColumns.push(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            );
                                            var offset = `${fixOffset}px`;
                                            fixOffset =
                                              fixOffset +
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              );

                                            return offset;
                                          } else {
                                            return (
                                              fixOffset -
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              )
                                            );
                                          }
                                        }
                                      : 0,
                                    background: "#ffffff",
                                  }}
                                >
                                  {row[key]
                                    ? typeof row[key] === "object"
                                      ? row[key].value
                                      : row[key]
                                    : "--"}
                                  {row[key] ? (
                                    row[key].new ? (
                                      <span className="new-badge">New</span>
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    "--"
                                  )}
                                </CustomTableCell>
                              );
                            }
                          } else if (
                            headerCells[Object.keys(row).indexOf(key)].type ===
                            "actions"
                          ) {
                            return (
                              <CustomTableCell
                                align="left"
                                sx={{
                                  position: headerCells[
                                    Object.keys(row).indexOf(key)
                                  ].fixed
                                    ? "" // sticky
                                    : "initial",
                                  left: headerCells[
                                    Object.keys(row).indexOf(key)
                                  ].fixed
                                    ? () => {
                                        if (
                                          !processedColumns.includes(
                                            headerCells[
                                              Object.keys(row).indexOf(key)
                                            ].label
                                          )
                                        ) {
                                          processedColumns.push(
                                            headerCells[
                                              Object.keys(row).indexOf(key)
                                            ].label
                                          );
                                          var offset = `${fixOffset}px`;
                                          fixOffset =
                                            fixOffset +
                                            Number.parseInt(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].minWidth.split("px")[0]
                                            );

                                          return offset;
                                        } else {
                                          return (
                                            fixOffset -
                                            Number.parseInt(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].minWidth.split("px")[0]
                                            )
                                          );
                                        }
                                      }
                                    : 0,
                                  background: "#ffffff",
                                }}
                              >
                                {row[key].includes("edit") ? (
                                  <img
                                    alt="Edit icon"
                                    onClick={(e) => {
                                      handleEdit(row);
                                    }}
                                  />
                                ) : (
                                  ""
                                )}
                                {row[key].includes("settings") ? (
                                  <SettingsIcon
                                    alt="Settings icon"
                                    onClick={async () => {}}
                                    style={{
                                      marginLeft: "10px",
                                      fontSize: "18px",
                                      color: "#C5CACE",
                                    }}
                                  />
                                ) : (
                                  ""
                                )}
                                {row[key].includes("delete") ? (
                                  <img
                                    alt="Delete icon"
                                    onClick={(e) => {
                                      handleDelete(row);
                                    }}
                                    style={{ marginLeft: "10px" }}
                                  />
                                ) : (
                                  ""
                                )}
                              </CustomTableCell>
                            );
                          }
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          ) : (
            <TableBodySortable
              onSortEnd={onSortEnd}
              useDragHandle
              displayRowCheckbox={false}
            >
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <Row
                      index={index}
                      data={row}
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={props.key ? props.key : row.name + index}
                      id={props.id ? props.id : index}
                      selected={isItemSelected}
                      onClick={props.onClick ? props.onClick : ""}
                      sx={{
                        "&.Mui-selected, &.Mui-selected:hover": {
                          backgroundColor:
                            theme.palette.primary.table.table_row,
                        },
                        "&.MuiTableRow-hover": {
                          "&:hover": {
                            backgroundColor:
                              theme.palette.primary.table.table_row,
                          },
                        },
                        fontSize: theme.fonts.small_heading,
                        cursor: props.cursor ? props.cursor : "",
                      }}
                    >
                      {props.isSetting ? null : (
                        <CustomTableCell
                          align="center"
                          sx={{
                            position: "sticky",
                            left: 0,
                            right: 0,
                            minWidth: "25px",
                            background: "#ffffff !important",
                            zIndex: 10,
                          }}
                        >
                          <DragHandle></DragHandle>

                          <BasicCustomizedCheckbox
                            onClick={(event) => handleClick(event, row.id)}
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                            sx={{
                              svg: { fill: theme.palette.primary.yellow_dark },
                            }}
                          />
                        </CustomTableCell>
                      )}

                      {Object.keys(row).map((key) => {
                        if (headerCells[Object.keys(row).indexOf(key)]) {
                          if (
                            headerCells[Object.keys(row).indexOf(key)].type ===
                            "text"
                          ) {
                            if (
                              headerCells[Object.keys(row).indexOf(key)].avatar
                            ) {
                              return (
                                <CustomTableCell
                                  component="td"
                                  id={labelId}
                                  scope="row"
                                  sx={{
                                    marginLeft: "2vh",
                                    position: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? "" // sticky
                                      : "initial",
                                    left: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? () => {
                                          if (
                                            !processedColumns.includes(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            )
                                          ) {
                                            processedColumns.push(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            );
                                            var offset = `${fixOffset}px`;
                                            fixOffset =
                                              fixOffset +
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              );
                                            return offset;
                                          } else {
                                            return (
                                              fixOffset -
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              )
                                            );
                                          }
                                        }
                                      : 0,
                                    background: "#ffffff",
                                  }}
                                >
                                  <span
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    {row[key].value ? row[key].value : row[key]}
                                    {row[key]?.icons?.map((icon) => {
                                      return icon.element;
                                    })}
                                  </span>
                                  {row[key].new ? (
                                    <span className="new-badge">New</span>
                                  ) : (
                                    ""
                                  )}
                                </CustomTableCell>
                              );
                            } else if (
                              headerCells[Object.keys(row).indexOf(key)].badge
                            ) {
                              return (
                                <CustomTableCell
                                  align={
                                    headerCells[Object.keys(row).indexOf(key)]
                                      .align
                                  }
                                  sx={{
                                    marginLeft: "2vh",
                                    position: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? "" // sticky
                                      : "initial",
                                    left: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? () => {
                                          if (
                                            !processedColumns.includes(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            )
                                          ) {
                                            processedColumns.push(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            );
                                            var offset = `${fixOffset}px`;
                                            fixOffset =
                                              fixOffset +
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              );
                                            return offset;
                                          } else {
                                            return (
                                              fixOffset -
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              )
                                            );
                                          }
                                        }
                                      : 0,
                                    background: "#ffffff",
                                  }}
                                >
                                  <span
                                    className="new-badge"
                                    style={{
                                      color: row[key].color,
                                      backgroundColor: row[key].background,
                                      borderRadius: "6px",
                                    }}
                                  >
                                    {typeof row[key] === "object"
                                      ? row[key].value
                                      : row[key]}
                                  </span>
                                </CustomTableCell>
                              );
                            } else {
                              return (
                                <CustomTableCell
                                  align={
                                    headerCells[Object.keys(row).indexOf(key)]
                                      .align
                                  }
                                  sx={{
                                    fontSize: theme.fonts.small_heading,
                                    position: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? "" // sticky
                                      : "initial",
                                    left: headerCells[
                                      Object.keys(row).indexOf(key)
                                    ].fixed
                                      ? () => {
                                          if (
                                            !processedColumns.includes(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            )
                                          ) {
                                            processedColumns.push(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].label
                                            );
                                            var offset = `${fixOffset}px`;
                                            fixOffset =
                                              fixOffset +
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              );

                                            return offset;
                                          } else {
                                            return (
                                              fixOffset -
                                              Number.parseInt(
                                                headerCells[
                                                  Object.keys(row).indexOf(key)
                                                ].minWidth.split("px")[0]
                                              )
                                            );
                                          }
                                        }
                                      : 0,
                                    background: "#ffffff",
                                  }}
                                >
                                  {row[key]
                                    ? typeof row[key] === "object"
                                      ? row[key].value
                                      : row[key]
                                    : "--"}
                                  {row[key] ? (
                                    row[key].new ? (
                                      <span className="new-badge">New</span>
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    "--"
                                  )}
                                </CustomTableCell>
                              );
                            }
                          } else if (
                            headerCells[Object.keys(row).indexOf(key)].type ===
                            "actions"
                          ) {
                            return (
                              <CustomTableCell
                                align="left"
                                sx={{
                                  position: headerCells[
                                    Object.keys(row).indexOf(key)
                                  ].fixed
                                    ? "" // sticky
                                    : "initial",
                                  left: headerCells[
                                    Object.keys(row).indexOf(key)
                                  ].fixed
                                    ? () => {
                                        if (
                                          !processedColumns.includes(
                                            headerCells[
                                              Object.keys(row).indexOf(key)
                                            ].label
                                          )
                                        ) {
                                          processedColumns.push(
                                            headerCells[
                                              Object.keys(row).indexOf(key)
                                            ].label
                                          );
                                          var offset = `${fixOffset}px`;
                                          fixOffset =
                                            fixOffset +
                                            Number.parseInt(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].minWidth.split("px")[0]
                                            );

                                          return offset;
                                        } else {
                                          return (
                                            fixOffset -
                                            Number.parseInt(
                                              headerCells[
                                                Object.keys(row).indexOf(key)
                                              ].minWidth.split("px")[0]
                                            )
                                          );
                                        }
                                      }
                                    : 0,
                                  background: "#ffffff",
                                }}
                              >
                                {row[key].includes("edit") ? (
                                  <img
                                    alt="Edit icon"
                                    onClick={(e) => {
                                      handleEdit(row);
                                    }}
                                  />
                                ) : (
                                  ""
                                )}
                                {row[key].includes("settings") ? (
                                  <SettingsIcon
                                    alt="Settings icon"
                                    onClick={async () => {}}
                                    style={{
                                      marginLeft: "10px",
                                      fontSize: "18px",
                                      color: "#C5CACE",
                                    }}
                                  />
                                ) : (
                                  ""
                                )}
                                {row[key].includes("delete") ? (
                                  <img
                                    alt="Delete icon"
                                    onClick={(e) => {
                                      handleDelete(row);
                                    }}
                                    style={{ marginLeft: "10px" }}
                                  />
                                ) : (
                                  ""
                                )}
                              </CustomTableCell>
                            );
                          }
                        }
                      })}
                    </Row>
                  );
                })}
            </TableBodySortable>
          )}
        </Table>
      </TableContainer>
      {props.hidePagination ? null : (
        <Grid sx={{ paddingTop: "12px" }}>
          <BasicTablePagination
            rowsPerPageOptions={[
              5,
              10,
              15,
              { label: "All", value: rows.length },
            ]}
            component="div"
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage="Items per page"
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      )}
    </>
  );
}

export default BasicEnhancedTable;
