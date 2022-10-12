import { useEffect, useState, useMemo } from "react";
import { XMLParser } from "fast-xml-parser";
import styled from "styled-components";
import Table from "../components/DataTable";
import axios from "axios";

const Configuracion = () => {
  const clickhandler = (name) => console.log("delete", name);
  const [capas, setCapas] = useState([]);
  const [baseGeoUrl, setbaseGeoUrl] = useState(
    "http://giscopade.neuquen.gov.ar/geoserver/ows"
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://diversidad.biamobile.com/api/web/sdi_com_Configuracions")
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

export default Configuracion;
