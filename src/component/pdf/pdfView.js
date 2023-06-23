import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyPDFComponent from "./pdfComponente";

const MyPDFViewer = ({ family, member }) => (
  <PDFViewer
    showToolbar={false}
    style={{ width: "100%", height: "230rem" }}
  >
    <MyPDFComponent family={family} member={member} />
  </PDFViewer>
);

export default MyPDFViewer;
