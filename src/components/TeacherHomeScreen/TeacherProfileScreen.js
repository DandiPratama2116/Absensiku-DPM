import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const TeacherProfileScreen = ({ navigation, route }) => {
  const { username, role, school, position, nik, year } = route.params;

  // Function to handle back navigation
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        <Image
          source={require("../../../assets/sidikjari.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>ABSENSIKU</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={require("../../../assets/student1.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{username}</Text>
          <Text style={styles.profileRole}>{role}</Text>
        </View>
      </View>

      {/* Details Card */}
      <View style={styles.detailsCard}>
        <View style={styles.detailRow}>
          <Image
            source={require("../../../assets/school_4130952.png")}
            style={styles.icon}
          />
          <Text style={styles.detailText}>{school}</Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={require("../../../assets/smart_15112647.png")}
            style={styles.icon}
          />
          <Text style={styles.detailText}>{position}</Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={require("../../../assets/contract.png")}
            style={styles.icon}
          />
          <Text style={styles.detailText}>NUPTK: {nik}</Text>
        </View>
        <View style={styles.detailRow}>
          <Image
            source={require("../../../assets/DefinitionSearchBook1.png")}
            style={styles.icon}
          />
          <Text style={styles.detailText}>Tahun Ajaran: {year}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
    backgroundColor: "#00796b",
    borderRadius: 5,
    marginRight: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileRole: {
    fontSize: 14,
    color: "gray",
  },
  detailsCard: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
  },
});

export default TeacherProfileScreen;
