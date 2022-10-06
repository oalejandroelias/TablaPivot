import { useEffect, useState, useMemo } from "react";
import { XMLParser } from "fast-xml-parser";
import styled from "styled-components";
import Table from "../components/DataTable";
import axios from "axios";

const LayerList = () => {
  const clickhandler = (name) => console.log("delete", name);
  const [capas, setCapas] = useState([]);
  const [baseGeoUrl, setbaseGeoUrl] = useState(
    "http://giscopade.neuquen.gov.ar/geoserver/ows"
  );

  const [data, setData] = useState([]);

  //const baseGeoUrl = "http://sigepen.neuquen.gov.ar:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities";
  //const baseGeoUrl = "http://aicsig.neuquen.gov.ar:8080/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities";

  // useEffect(() => {
  //   const getXMLResponse = async () => {
  //     const resp = await fetch(
  //       baseGeoUrl + "?service=wms&version=1.3.0&request=GetCapabilities"
  //     )
  //       .then((response) => response.text())
  //       .then((textResponse) => {
  //         const parser = new XMLParser();
  //         let obj = parser.parse(textResponse);
  //         setCapas(obj.WMS_Capabilities.Capability.Layer.Layer);
  //         // console.log("AAA")
  //         // console.log(obj.WMS_Capabilities.Capability)
  //         // console.table(obj.WMS_Capabilities.Capability.Layer.Layer[0])
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   // const getXMLResponse = async () => {
  //   //   const resp = axios.get(baseGeoUrl).then((response) => {

  //   //     const parser = new XMLParser();
  //   //     let obj = parser.parse(response.data);
  //   //     console.log(obj)
  //   //     setCapas(obj.WMS_Capabilities.Capability.Layer.Layer);

  //   //   })
  //   //     .catch((error) => {
  //   //       console.log(error);
  //   //     });
  //   // };

  //   getXMLResponse();
  // }, []);

  useEffect(() => {
    axios
      .get(
        "https://diversidad.biamobile.com/api/web/sdi_com_configuraciontipos"
      )
      .then((response) => {
        setData(response.data);
        return response.data;
        //console.log(response.data);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div className="lg:w-5/6 w-full mx-auto overflow-auto mt-20">
      <Table data={data} baseGeoUrl={baseGeoUrl} click={clickhandler} />
    </div>
  );
};

export default LayerList;
