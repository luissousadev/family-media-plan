import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 14,
    paddingTop: 35,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 65,
  },
  title: {
    fontSize: 24,
    textAlign: "justify",
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 18,
    textAlign: "justify",
    marginBottom: 10,
    marginTop: 20,
    textDecoration: "underline",
    fontWeight: "900",
  },
  content: {
    textAlign: "justify",
    marginBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  list: {
    textAlign: "justify",
    marginBottom: 3,
    marginLeft: 5,
  },
  pointList: {
    fontSize: 20,
    textAlign: "justify",
    marginBottom: 3,
    marginLeft: 5,
  },
});


const MyPDFComponent = ({ family, member }) => (
  <Document>
      <Page wrap={false} size="A4" style={styles.page}>
        <View wrap={false}>
          <Text style={styles.title}>
            {member.nameMember} {member.age}{" "}
          </Text>

          <Text style={styles.title}>
            The {family.familyName} Family Media Plan
          </Text>

          {family.hasMediaBalance && (
            <>
              <Text style={styles.subTitle}>
                {member.mediaBalance.titleSection}
              </Text>
              {member.mediaBalance.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {family.hasCommunicatingAboutMedia && (
            <>
              <Text style={styles.subTitle}>
                {member.communicatingAboutMedia.titleSection}
              </Text>
              {member.communicatingAboutMedia.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {family.hasCommunicatingAboutMedia && (
            <>
              <Text style={styles.subTitle}>
                {member.communicatingAboutMedia.titleSection}
              </Text>
              {member.communicatingAboutMedia.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {family.hasCommunicatingAboutMedia && (
            <>
              <Text style={styles.subTitle}>
                {member.communicatingAboutMedia.titleSection}
              </Text>
              {member.communicatingAboutMedia.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {family.hasCommunicatingAboutMedia && (
            <>
              <Text style={styles.subTitle}>
                {member.communicatingAboutMedia.titleSection}
              </Text>
              {member.communicatingAboutMedia.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {family.hasCommunicatingAboutMedia && (
            <>
              <Text style={styles.subTitle}>
                {member.communicatingAboutMedia.titleSection}
              </Text>
              {member.communicatingAboutMedia.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {family.hasCommunicatingAboutMedia && (
            <>
              <Text style={styles.subTitle}>
                {member.communicatingAboutMedia.titleSection}
              </Text>
              {member.communicatingAboutMedia.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {family.hasCommunicatingAboutMedia && (
            <>
              <Text style={styles.subTitle}>
                {member.communicatingAboutMedia.titleSection}
              </Text>
              {member.communicatingAboutMedia.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {family.hasCommunicatingAboutMedia && (
            <>
              <Text style={styles.subTitle}>
                {member.communicatingAboutMedia.titleSection}
              </Text>
              {member.communicatingAboutMedia.topicos.map((topico, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.pointList}>•</Text>
                  <Text style={styles.list}>{topico}</Text>
                </View>
              ))}
            </>
          )}

          {/* {family.hasKindnessEmpathy && (
            <>
              <Text style={styles.subTitle}>
                {member.kindnessEmpathy.titleSection}
              </Text>
              {member.kindnessEmpathy.topicos.map((topico, index) => (
                <Text key={index} style={styles.list}>
                  {topico}
                </Text>
              ))}
            </>
          )}

          {family.hasKindnessEmpathy && (
            <>
              <Text style={styles.subTitle}>
                {member.kindnessEmpathy.titleSection}
              </Text>
              {member.kindnessEmpathy.topicos.map((topico, index) => (
                <Text key={index} style={styles.list}>
                  {topico}
                </Text>
              ))}
            </>
          )}

          {family.hasDigitalPrivacySafety && (
            <>
              <Text style={styles.subTitle}>
                {member.digitalPrivacySafety.titleSection}
              </Text>
              {member.digitalPrivacySafety.topicos.map((topico, index) => (
                <Text key={index} style={styles.list}>
                  {topico}
                </Text>
              ))}
            </>
          )}

          {family.hasScreenFreeZones && (
            <>
              <Text style={styles.subTitle}>
                {member.screenFreeZones.titleSection}
              </Text>
              {member.screenFreeZones.topicos.map((topico, index) => (
                <Text key={index} style={styles.list}>
                  {topico}
                </Text>
              ))}
            </>
          )}

          {family.hasScreenFreeTimes && (
            <>
              <Text style={styles.subTitle}>
                {member.screenFreeTimes.titleSection}
              </Text>
              {member.screenFreeTimes.topicos.map((topico, index) => (
                <Text key={index} style={styles.list}>
                  {topico}
                </Text>
              ))}
            </>
          )}

          {family.hasChosingGoodContent && (
            <>
              <Text style={styles.subTitle}>
                {member.chosingGoodContent.titleSection}
              </Text>
              {member.chosingGoodContent.topicos.map((topico, index) => (
                <Text key={index} style={styles.list}>
                  {topico}
                </Text>
              ))}
            </>
          )}

          {family.hasUsingMediaTogether && (
            <>
              <Text style={styles.subTitle}>
                {member.usingMediaTogether.titleSection}
              </Text>
              {member.usingMediaTogether.topicos.map((topico, index) => (
                <Text key={index} style={styles.list}>
                  {topico}
                </Text>
              ))}
            </>
          )} */}
        </View>
      </Page>
   
  </Document>
);

export default MyPDFComponent;
