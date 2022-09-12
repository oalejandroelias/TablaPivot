import React, {useState} from "react";
import * as XLSX from "xlsx";
import ReactDOM from 'react-dom';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

  const url="../public/TablaCompleta.xlsx "

  async function ReadExcelB(){
    const result = await fetch(url)
    .then((res) => {
      return res.arrayBuffer();
    })
    .then((res) => {
      var workbook = XLSX.read(new Uint8Array(res), {
        type: "array",
      });
      var firstSheet = workbook.SheetNames[0];

      //Lee todas las filas de la primera hoja en un array JSON.
      var excelRows = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[firstSheet]
      );

      var datos_json = JSON.stringify(excelRows);

      console.log(datos_json)
      //jQuery("#xlx_json").val(datos_json);
      //load_excel_data();
    })
    .catch((err) => console.log("Solicitud fallida", err));
    
  }

 function ReadExcel() {

  //ReadExcelB();
  const onChange = (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      console.log(data);
    };
    reader.readAsBinaryString(file);
  };
  return (
    <div>
      <input type="file" onChange={onChange} />
    
    </div>
  );
}

export default ReadExcel