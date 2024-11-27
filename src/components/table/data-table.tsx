import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { CircularProgress, Typography, Button } from '@mui/material';
import { useRef } from 'react';
import useFetchData from '../../hooks/crud/use-fetch-data';

interface DataTableProps {
  url: string;
  rowData: any[]
  columnDefs: any[];
  paginationPageSize?: number;
  defaultColDef?: any;
  exportFileName?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  url,
  columnDefs,
  paginationPageSize = 10,
  defaultColDef = { resizable: true, sortable: true, filter: true },
  exportFileName = 'data',
}) => {
  const { data, isLoading, isError, error } = useFetchData(url);

  const gridApiRef = useRef<any>(null);

  const handleExport = () => {
    if (gridApiRef.current) {
      const gridOptions = {
        fileName: `${exportFileName}.csv`,
      };
      gridApiRef.current.exportDataAsCsv(gridOptions);
    }
  };

  const rowData = Array.isArray(data) ? data : data?.users || []; 

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <CircularProgress />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h6" color="error">
          {error ? error.message : 'Error loading data!'}
        </Typography>
      </div>
    );
  }

   const modifiedColumnDefs = columnDefs.map((colDef: any) => {
    console.log(colDef.cellRenderer)
     if (colDef.cellRenderer) {
       colDef.cellRendererFramework = colDef.cellRenderer;
     }
     return colDef;
   });

  return (
    <div className="ag-theme-alpine" style={{ height: '600px', width: '100%' }}>
      <div style={{ marginBottom: '10px' }}>
        <Button variant="contained" color="primary" onClick={handleExport}>
          Export to CSV
        </Button>
      </div>
      <AgGridReact
        columnDefs={modifiedColumnDefs}
        rowData={rowData} 
        paginationPageSize={paginationPageSize}
        defaultColDef={defaultColDef}
        pagination={true}
        domLayout="autoHeight"
        onGridReady={params => {
          gridApiRef.current = params.api;
        }}
      />
      {rowData.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body1">No data available</Typography>
        </div>
      )}
    </div>
  );
};

export default DataTable;
