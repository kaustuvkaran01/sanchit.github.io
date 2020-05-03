import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
 import samplePDF from "./sample.pdf";
class CVdoc extends Component {
  render() {
    return (
      <Document
        file={samplePDF}
        onLoadSuccess={this.onDocumentLoadSuccess}
      >
        <Page pageNumber={1} />
      </Document>
    );
  }
}

export default CVdoc;