import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  header: { fontSize: 18, marginBottom: 20 },
  content: { fontSize: 14, marginBottom: 10 },
  footer: { fontSize: 12, marginTop: 30, textAlign: "center" },
});

const AssetPrint = ({ asset }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>XYZ Company - Asset Details</Text>
      <Text style={styles.content}>Asset Name: {asset.productName}</Text>
      <Text style={styles.content}>Asset Type: {asset.type}</Text>
      <Text style={styles.content}>
        Request Date: {new Date(asset.requestDate).toLocaleDateString()}
      </Text>
      <Text style={styles.content}>
        Approval Date:{" "}
        {asset.approvalDate
          ? new Date(asset.approvalDate).toLocaleDateString()
          : "N/A"}
      </Text>
      <Text style={styles.content}>Status: {asset.status}</Text>
      <Text style={styles.footer}>
        Printing Date: {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

export default AssetPrint;
