import React, { useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const Example = () => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  /**La API debe poder implementar peticiones de paginado */
  const { data, isError, isFetching, isLoading } = useQuery(
    [
      "table-data",
      columnFilters,
      globalFilter,
      pagination.pageIndex,
      pagination.pageSize,
      sorting,
    ],
    async () => {
      //const url = new URL("/api/data", "https://www.material-react-table.com");
      const url = new URL("/posts", "https://jsonplaceholder.typicode.com");
      url.searchParams.set(
        "start",
        `${pagination.pageIndex * pagination.pageSize}`
      );
      url.searchParams.set("size", `${pagination.pageSize}`);
      url.searchParams.set("filters", JSON.stringify(columnFilters ?? []));
      url.searchParams.set("globalFilter", globalFilter ?? "");
      url.searchParams.set("sorting", JSON.stringify(sorting ?? []));

      const { data: axiosData } = await axios.get(url.href);
      return axiosData;
    },
    { keepPreviousData: true }
  );

  //   const columns = useMemo(
  //     () => [
  //       {
  //         accessorKey: "firstName",
  //         header: "First Name",
  //       },
  //       {
  //         accessorKey: "lastName",
  //         header: "Last Name",
  //       },
  //       {
  //         accessorKey: "address",
  //         header: "Address",
  //       },
  //       {
  //         accessorKey: "state",
  //         header: "State",
  //       },
  //       {
  //         accessorKey: "phoneNumber",
  //         header: "Phone Number",
  //       },
  //     ],
  //     []
  //   );

  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "First Name",
      },
      {
        accessorKey: "body",
        header: "Last Name",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data ?? []}
      initialState={{ showColumnFilters: true }}
      manualFiltering
      manualPagination
      manualSorting
      muiToolbarAlertBannerProps={
        isError
          ? {
              color: "error",
              children: "Error loading data",
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={data?.meta?.totalRowCount ?? 0}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: isFetching,
        sorting,
      }}
    />
  );
};

const queryClient = new QueryClient();

const Listado = () => (
  <QueryClientProvider client={queryClient}>
    <Example />
  </QueryClientProvider>
);

export default Listado;
