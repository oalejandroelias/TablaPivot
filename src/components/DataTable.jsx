import { useMemo, useState, useEffect, useContext } from "react";

import DataTable, { createTheme } from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import Modal from "./Modal/Modal";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/styles.css";

const Table = (props) => {
  //const { theme } = useContext(ThemeContext);
  const theme = "light";

  const [show_modal, setShow_modal] = useState(false);

  const [id, setId] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [activo, setActivo] = useState(null);

  const columns = [
    {
      name: "idconfiguraciontipo",
      selector: (row) => row.idconfiguraciontipo,
      sortable: true,
      grow: 0.8,
      style: "font-weight:bold; font-family: Arial, Helvetica, sans-serif;",
      //maxWidth: "200px"
    },
    {
      name: "descripcion",
      selector: (row) => row.descripcion,
      sortable: true,
      grow: 0.8,
      hide: "sm",
      style: "font-weight:bold; font-family: Arial, Helvetica, sans-serif;",
      //maxWidth: "200px"
    },
    {
      name: "activo",
      selector: (row) => row.activo,
      sortable: true,
      grow: 0.8,
      maxWidth: "400px",
      style: "font-weight:bold; font-family: Arial, Helvetica, sans-serif;",
    },
    {
      name: "Vista",
      button: true,
      cell: (row) => (
        <>
          <button
            className="bg:white dark:bg-slate-900 mb-1 inline-flex px-2 rounded-md items-center ml-4 hover:bg-gray-200 focus:outline-none  text-gray-900 dark:text-white"
            onClick={() => {
              setShow_modal(!show_modal);
              setId(row.idconfiguraciontipo);
              setDescripcion(row.descripcion);
              setActivo(row.activo);
            }}
            style={{ marginRight: "5px" }}
            key={row.idconfiguraciontipo}
          >
            <h1 style={{ color: "blue" }}>Ver</h1>
          </button>
        </>
      ),
      grow: 0.1,
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  createTheme("dark", {
    striped: {
      default: "transparent",
      text: "#fff",
    },
    background: {
      default: "transparent",
      background: {
        default: "transparent",
      },
      context: {
        background: "transparent",
        text: "#C70039",
      },
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
    highlightOnHover: {
      default: "#252f45",
    },
  });

  createTheme("light", {
    //   headCells: {
    //     style: {
    //         color: 'red', // override the cell padding for head cells
    //         paddingRight: '8px',
    //     },
    // },
    striped: {
      default: "transparent",
      text: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#2aa198",
    },
    background: {
      default: "transparent",
    },
    // context: {
    //   background: "#cb4b16",
    //   text: "#FFFFFF"
    // },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
    highlightOnHover: {
      default: "#BAC7EE",
    },
  });

  const customStyles = {
    headCells: {
      style: {
        font: "bold", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
  };

  return (
    <>
      <DataTable
        className="border-collapse"
        theme={theme}
        descripcion=""
        columns={columns}
        data={filteredItems}
        defaultSortField="name"
        striped
        pagination
        subHeader
        subHeaderComponent={subHeaderComponent}
        highlightOnHover
        customStyles={customStyles}
      />
      <Modal
        // key={id}
        show_modal={show_modal}
        setShow_modal={setShow_modal}
        id={id}
        descripcion={descripcion}
        activo={activo}
      />
    </>
  );
};

export default Table;
