const DATA = {
  id: 5,
  title: "Palma de Mallorca",
  days: 13,
  date: "2025-01-08T13:18:56.572Z",
  startDate: "2025-03-02T23:00:00.000Z",
  endDate: "2025-03-15T23:00:00.000Z",
  image:
    "https://www.racc.es/wp-content/uploads/2021/06/Guia-practica-para-viajar-a-Mallorca.jpg",
  userId: 1,
  items: [
    {
      id: 26,
      type: "FLIGHT",
      days: 1,
      startDate: "2025-03-03T03:00:00.000Z",
      endDate: "2025-01-08T14:08:29.757Z",
      departure: "MAD",
      departureLabel: "Madrid",
      destination: "PMI",
      destinationLabel: "Palma de Mallorca",
      arrivalTime: "23:00-00:20",
      stars: null,
      placeUrl: null,
      numberFlight: "IB1679",
      description: [],
      imageUrl: null,
      cityName: null,
      region: null,
      country: null,
      name: null,
      collapse: false,
      itineraryId: 5,
    },
    {
      id: 32,
      type: "HOTEL",
      days: 1,
      startDate: "2025-03-06T00:00:00.000Z",
      endDate: "2025-03-12T00:00:00.000Z",
      departure: null,
      departureLabel: null,
      destination: null,
      destinationLabel: null,
      arrivalTime: null,
      stars: 2,
      placeUrl: null,
      numberFlight: null,
      description: ["Un hotel que es bien"],
      imageUrl: null,
      cityName: "Roma",
      region: null,
      country: "Italia",
      name: "Hotel Roma",
      collapse: false,
      itineraryId: 5,
    },
    {
      id: 27,
      type: "FLIGHT",
      days: 1,
      startDate: "2025-03-16T00:00:00.000Z",
      endDate: "2025-01-08T14:23:41.834Z",
      departure: "PMI",
      departureLabel: "Palma de Mallorca",
      destination: "MAD",
      destinationLabel: "Madrid",
      arrivalTime: "06:25-07:50",
      stars: null,
      placeUrl: null,
      numberFlight: "IB1680",
      description: [],
      imageUrl: null,
      cityName: null,
      region: null,
      country: null,
      name: null,
      collapse: false,
      itineraryId: 5,
    },
    {
      id: 29,
      type: "TRIP",
      days: 1,
      startDate: "2025-03-04T02:00:00.000Z",
      endDate: "2025-01-08T20:06:33.618Z",
      departure: null,
      departureLabel: null,
      destination: null,
      destinationLabel: null,
      arrivalTime: null,
      stars: null,
      placeUrl: null,
      numberFlight: null,
      description: [
        "La Palma romana, la medina Alllllllll-Mayurqa árabe, la Civta deooooooooooooooooooooooooo Mallorques medieval... En este free tour por Palma de Mallorca os llevaremos a descubrir la riqueza cultural de la capital balear.",
      ],
      imageUrl:
        "https://www.civitatis.com/f/espana/palma-de-mallorca/galeria/big/palacio-almudaina.jpg",
      cityName: null,
      region: null,
      country: null,
      name: "Free tour por Palma de Mallorca",
      collapse: false,
      itineraryId: 5,
    },
    {
      id: 30,
      type: "TRANSFER",
      days: 1,
      startDate: "2025-03-03T04:00:00.000Z",
      endDate: "2025-01-08T20:19:03.678Z",
      departure: null,
      departureLabel: null,
      destination: null,
      destinationLabel: null,
      arrivalTime: null,
      stars: null,
      placeUrl: null,
      numberFlight: null,
      description: ["Lo cogeré al salir del aeropuerto"],
      imageUrl: null,
      cityName: null,
      region: null,
      country: null,
      name: "uber",
      collapse: false,
      itineraryId: 5,
    },
  ],
  budget: [
    {
      id: 4,
      expensive: 20,
      types: ["Vuelo", "IB1679"],
      itineraryId: 5,
    },
  ],
};

import { capitalCase } from "@/utils";
import { format } from "@formkit/tempo";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import {
  Document,
  Image,
  Page,
  Path,
  PDFDownloadLink,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import Stars from "./ui/stars";

// 🎨 Estilos para la Card en el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    border: "1px solid #ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    height: 100,
  },
  header: {
    height: 40,
  },
  logo: {
    width: "auto",
    height: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
});

// 📄 Documento PDF con una Card
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src="../../logo.png" />
      </View>
      <View
        style={{
          width: "100%",
          height: 210,
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            marginBottom: 10,
            borderRadius: 8,
            objectFit: "cover",
            zIndex: 1,
            marginTop: 10,
          }}
          source={{
            uri: "https://images.pexels.com/photos/63508/pexels-photo-63508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
      </View>
      {DATA.items.map((item) => (
        <View style={styles.card}>
          <View
            style={{
              borderBottom: "1px solid #ddd",
              height: 20,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                textAlign: "left",
              }}
            >
              {capitalCase(format(new Date(item.startDate), "ddd, D MMM"))}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <View style={{ marginRight: 14 }}>
              <Image
                style={{
                  maxWidth: 80,
                  minHeight: 50,
                  width: 80,
                  height: "auto",
                  borderRadius: 8,
                }}
                source={{ uri: item.imageUrl || "../../unnamed-min.jpg" }}
              />
            </View>
            <View>
              {item.type === "FLIGHT" && (
                <View>
                  <View style={{ marginRight: 14 }}>
                    <Text
                      style={{
                        display: "flex",
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      {item.departureLabel}({item.departure}) a{" "}
                      {item.destinationLabel}({item.destination})
                    </Text>
                  </View>
                  <View style={{ marginRight: 14 }}>
                    <Text style={{ display: "flex", fontSize: 12 }}>
                      {VUELO.numberFlight}
                    </Text>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 4,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          style={{ width: 16, height: 16, marginRight: 4 }}
                        >
                          <Path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </Svg>
                      </View>
                      <Text style={{ display: "flex", fontSize: 12 }}>
                        {VUELO.arrivalTime?.split("-")[0]}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          style={{ width: 16, height: 16, marginRight: 4 }}
                        >
                          <Path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                          />
                        </Svg>
                      </View>
                      <Text style={{ display: "flex", fontSize: 12 }}>
                        {VUELO.arrivalTime?.split("-")[1]}
                      </Text>
                    </View>
                  </View>
                </View>
              )}

              {item.type === "HOTEL" && (
                <View style={{ display: "flex" }}>
                  <Text
                    style={{
                      display: "flex",
                      fontSize: 14,
                      fontWeight: "bold",
                      marginBottom: 4,
                    }}
                  >
                    {item.name} {Stars({ count: 4 })}
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      style={{
                        width: 16,
                        height: 16,
                        marginRight: 4,
                        color: "text-gray-600",
                      }}
                    >
                      <Path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <Path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </Svg>
                    <Text style={{ display: "flex", fontSize: 12 }}>
                      {item.cityName}, {item.country}
                    </Text>
                  </View>
                </View>
              )}

              {item.type === "TRIP" && (
                <View style={{ marginRight: 14 }}>
                  <Text
                    style={{
                      display: "flex",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              )}

              {item.type === "TRANSFER" && (
                <View style={{ marginRight: 14 }}>
                  <Text
                    style={{
                      display: "flex",
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    Transfer {item.name}
                  </Text>
                </View>
              )}
            </View>
          </View>

          {item.description && item.description?.length > 0 && (
            <View
              style={{
                borderTop: "1px solid #ddd",
                marginTop: 10,
                height: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  marginTop: 8,
                  textAlign: "left",
                }}
              >
                {item.description.map((item) => (
                  <Text>{item}</Text>
                ))}
              </Text>
            </View>
          )}
        </View>
      ))}
    </Page>
  </Document>
);

const VUELO = {
  id: 26,
  type: "FLIGHT",
  days: 1,
  startDate: "2025-03-03T03:00:00.000Z",
  endDate: "2025-01-08T14:08:29.757Z",
  departure: "MAD",
  departureLabel: "Madrid",
  destination: "PMI",
  destinationLabel: "Palma de Mallorca",
  arrivalTime: "23:00-00:20",
  stars: null,
  placeUrl: null,
  numberFlight: "IB1679",
  description: [],
  imageUrl: null,
  cityName: null,
  region: null,
  country: null,
  name: null,
  collapse: false,
  itineraryId: 5,
};

// ⬇️ Botón para descargar el PDF
export default function GeneratePDF() {
  return (
    <div className="flex flex-col items-center">
      <PDFDownloadLink
        document={<MyDocument />}
        fileName={`itinerary-${DATA.title}.pdf`}
      >
        {() => (
          <button className="px-0 py-0 text-white bg-transparent rounded">
            <DocumentTextIcon className="w-5 h-5 mr-1 mt-1 text-gray-700 dark:text-gray-400 size-[22px]" />
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
