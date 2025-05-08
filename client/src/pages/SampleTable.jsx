import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const CustomButtonComponent = (props) => {
  return (
    <button onClick={() => console.log(props?.data, "row props")}>
      Push Me!
    </button>
  );
};

const SampleTable = () => {
  const [rowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
    { field: "button", cellRenderer: CustomButtonComponent },
  ]);

  return (
    <div style={{ height: 500, width: "100%", backgroundColor: "gray" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowModelType="clientSide"
      />
    </div>
  );
};

export default SampleTable;
