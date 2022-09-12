import {useState} from 'react'
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

    const url = '../../public/TablaCompleta.xlsx';
    let data = ''

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

      data = JSON.stringify(excelRows);

      console.log(data)
      //jQuery("#xlx_json").val(datos_json);
      //load_excel_data();
    })
    .catch((err) => console.log("Solicitud fallida", err));
    
  }

const TablaPivotB = () => {

    const [val, setVal] = useState(null)

    ReadExcelB()
  return (
    <div>
        <PivotTableUI
                data={data}
                onChange={s => setVal(s)}
                {...val}
            />
    </div>
  )
}

export default TablaPivotB