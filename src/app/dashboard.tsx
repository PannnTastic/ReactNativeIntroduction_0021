import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type TripType = "Round Trip" | "One way" | "Multi city";

export default function Dashboard() {
  const { username } = useLocalSearchParams<{ username: string }>();
  const router = useRouter();
  const [selectedTrip, setSelectedTrip] = useState<TripType>("Round Trip");

  // Capitalize first letter, fallback to Guest
  const displayName = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : "Guest";

  const tripTypes: TripType[] = ["Round Trip", "One way", "Multi city"];

  return (
    <View style={styles.root}>
      {/* Blue Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.greetingBlock}>
            <Text style={styles.greetingText}>Hello {displayName},</Text>
            <Text style={styles.headerTitle}>Book your next Flight</Text>
          </View>
          <Image
            source={require("../../assets/images/user_avatar.png")}
            style={styles.avatar}
          />
        </View>

        {/* Trip type selector */}
        <View style={styles.tripSelector}>
          {tripTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.tripTab,
                selectedTrip === type && styles.tripTabActive,
              ]}
              onPress={() => setSelectedTrip(type)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.tripTabText,
                  selectedTrip === type && styles.tripTabTextActive,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Card */}
        <View style={styles.searchCard}>
          {/* From */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>From (Location)</Text>
            <View style={styles.fieldInput}>
              <Text style={styles.fieldValue}>New York (NYC)</Text>
            </View>
          </View>

          {/* To */}
          <View style={styles.fieldGroup}>
            <Text style={styles.fieldLabel}>To (Destination)</Text>
            <View style={styles.fieldInput}>
              <Text style={styles.fieldValue}>London (LDN)</Text>
            </View>
          </View>

          {/* Date row */}
          <View style={styles.dateRow}>
            <View style={styles.dateGroup}>
              <Text style={styles.fieldLabel}>Departure</Text>
              <View style={styles.fieldInputHalf}>
                <Text style={styles.fieldValue}>Dec 4th, 2021</Text>
              </View>
            </View>
            <View style={styles.dateGroup}>
              <Text style={styles.fieldLabel}>Return</Text>
              <View style={styles.fieldInputHalf}>
                <Text style={styles.fieldValue}>Dec 16th, 2021</Text>
              </View>
            </View>
          </View>

          {/* Search Button */}
          <TouchableOpacity style={styles.searchButton} activeOpacity={0.8}>
            <Text style={styles.searchButtonText}>Search flights</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Place */}
        <Text style={styles.sectionTitle}>Popular place</Text>
        <View style={styles.popularCard}>
          <Image
            source={require("../../assets/images/london_bridge.png")}
            style={styles.popularImage}
            resizeMode="cover"
          />
          <View style={styles.popularOverlay}>
            <Text style={styles.popularCity}>London, UK</Text>
            <Text style={styles.popularDesc}>Tower Bridge · Thames River</Text>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Link
            href={{
              pathname: "./dashboard",
              params: { username: username || "" },
            }}
            asChild
          >
            <Text style={styles.navIcon}>🏠</Text>
          </Link>
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Link href="./abra" asChild>
            <Text style={styles.navIcon}>🎟️</Text>
          </Link>
          <Text style={styles.navLabelActive}>Tiket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Link href="./contoh" asChild>
            <Text style={styles.navIcon}>🔔</Text>
          </Link>
          <Text style={styles.navLabelActive}>Pengumuman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Link href="./form" asChild>
            <Text style={styles.navIcon}>👤</Text>
          </Link>
          <Text style={styles.navLabelActive}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  /* ── HEADER ── */
  header: {
    backgroundColor: "#1a6ef5",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  greetingBlock: {
    flex: 1,
  },
  greetingText: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
    marginBottom: 4,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 28,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  /* ── TRIP SELECTOR ── */
  tripSelector: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 50,
    padding: 4,
  },
  tripTab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 50,
    alignItems: "center",
  },
  tripTabActive: {
    backgroundColor: "#ffffff",
  },
  tripTabText: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    fontWeight: "500",
  },
  tripTabTextActive: {
    color: "#1a6ef5",
    fontWeight: "700",
  },
  /* ── SCROLL ── */
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  /* ── SEARCH CARD ── */
  searchCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 6,
  },
  fieldInput: {
    backgroundColor: "#f5f7fa",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  fieldInputHalf: {
    backgroundColor: "#f5f7fa",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flex: 1,
  },
  fieldValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  dateRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  dateGroup: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: "#1a6ef5",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#1a6ef5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  searchButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  /* ── POPULAR PLACE ── */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 14,
  },
  popularCard: {
    borderRadius: 16,
    overflow: "hidden",
    height: 180,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  popularImage: {
    width: "100%",
    height: "100%",
  },
  popularOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  popularCity: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  popularDesc: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    marginTop: 2,
  },
  /* ── BOTTOM NAV ── */
  bottomNav: {
    position: "absolute",
    bottom: 24,
    left: 20,
    right: 20,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 10,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  navIcon: {
    fontSize: 22,
  },
  navLabelActive: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1a6ef5",
    marginTop: 2,
  },
});
