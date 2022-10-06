import { useEffect, useState, useMemo } from "react";
import { XMLParser } from "fast-xml-parser";
import styled from "styled-components";
import Table from "../components/DataTable";

const LayerList = () => {
  const clickhandler = (name) => console.log("delete", name);
  const [capas, setCapas] = useState([]);
  const [baseGeoUrl, setbaseGeoUrl] = useState(
    "http://giscopade.neuquen.gov.ar/geoserver/ows"
  );

  //const baseGeoUrl = "http://sigepen.neuquen.gov.ar:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities";
  //const baseGeoUrl = "http://aicsig.neuquen.gov.ar:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities";

  useEffect(() => {
    const getXMLResponse = async () => {
      const resp = await fetch(
        baseGeoUrl + "?service=wms&version=1.3.0&request=GetCapabilities"
      )
        .then((response) => response.text())
        .then((textResponse) => {
          const parser = new XMLParser();
          let obj = parser.parse(textResponse);
          setCapas(obj.WMS_Capabilities.Capability.Layer.Layer);
          // console.log("AAA")
          // console.log(obj.WMS_Capabilities.Capability)
          // console.table(obj.WMS_Capabilities.Capability.Layer.Layer[0])
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // const getXMLResponse = async () => {
    //   const resp = axios.get(baseGeoUrl).then((response) => {

    //     const parser = new XMLParser();
    //     let obj = parser.parse(response.data);
    //     console.log(obj)
    //     setCapas(obj.WMS_Capabilities.Capability.Layer.Layer);

    //   })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    getXMLResponse();
  }, []);

  const columns = [
    {
      idconfiguraciontipo: 184,
      descripcion: "Modalidad de violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 185,
      descripcion: "Tipo de violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 186,
      descripcion: "Tipo de documento",
      activo: 1,
    },
    {
      idconfiguraciontipo: 187,
      descripcion: "Actividad Laboral",
      activo: 1,
    },
    {
      idconfiguraciontipo: 188,
      descripcion: "Nivel Educativo",
      activo: 1,
    },
    {
      idconfiguraciontipo: 189,
      descripcion: "Género Autopercibido",
      activo: 1,
    },
    {
      idconfiguraciontipo: 190,
      descripcion: "Orientación sexual",
      activo: 1,
    },
    {
      idconfiguraciontipo: 191,
      descripcion: "Persona Migrante",
      activo: 1,
    },
    {
      idconfiguraciontipo: 192,
      descripcion: "Obra Social",
      activo: 1,
    },
    {
      idconfiguraciontipo: 193,
      descripcion: "Posee red de contención",
      activo: 1,
    },
    {
      idconfiguraciontipo: 194,
      descripcion: "Cambio registral",
      activo: 1,
    },
    {
      idconfiguraciontipo: 195,
      descripcion: "Víctima de violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 196,
      descripcion: "Vínculo con la persona que ejerció violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 197,
      descripcion: "Convivencia con la persona que ejerció violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 198,
      descripcion: "Presencia de niñes",
      activo: 1,
    },
    {
      idconfiguraciontipo: 199,
      descripcion: "Frecuencia de la violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 200,
      descripcion: "Tiempo del maltrato",
      activo: 1,
    },
    {
      idconfiguraciontipo: 201,
      descripcion: "Género de la persona que ejerció violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 202,
      descripcion: "Nivel Educativo de la persona que ejerció violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 203,
      descripcion: "Actividad laboral de la persona que ejerció violencia",
      activo: 1,
    },
    {
      idconfiguraciontipo: 204,
      descripcion: "Acceso al derecho a la salud integral",
      activo: 1,
    },
    {
      idconfiguraciontipo: 205,
      descripcion: "Motivo de demanda",
      activo: 1,
    },
  ];

  return (
    <div className="lg:w-5/6 w-full mx-auto overflow-auto mt-20">
      <Table data={columns} baseGeoUrl={baseGeoUrl} click={clickhandler} />
    </div>
  );
};

export default LayerList;
