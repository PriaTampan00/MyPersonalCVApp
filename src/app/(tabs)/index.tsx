import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import StudentCard from "../../components/StudentCard";
import profileData from "../../data/profile.json";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Banner Accent */}
      <View style={styles.bannerHeader} />

      {/* Main Profile Header */}
      <View style={styles.profileCard}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../../../assets/images/profile.jpeg")}
            style={styles.avatar}
          />
          <View style={styles.verifiedBadge}>
            <Ionicons name="checkmark-circle" size={20} color="#2563EB" />
          </View>
        </View>

        <Text style={styles.name}>{profileData.nama}</Text>
        <Text style={styles.profession}>{profileData.profesi}</Text>
        <Text style={styles.univ}>{profileData.univ}</Text>

        {/* Quick Stats Bar */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3+</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>96</Text>
            <Text style={styles.statLabel}>Score</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Attendance</Text>
          </View>
        </View>
      </View>

      {/* About Me */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person-outline" size={18} color="#2563EB" />
          <Text style={styles.sectionTitle}>About Me</Text>
        </View>
        <Text style={styles.bioText}>{profileData.deskripsi}</Text>
      </View>

      {/* Informasi Akademik */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="school-outline" size={18} color="#2563EB" />
          <Text style={styles.sectionTitle}>Informasi Akademik</Text>
        </View>
        <StudentCard label="NIM" value={profileData.nim} />
        <StudentCard label="Program Studi" value={profileData.prodi} />
        <StudentCard label="Status Mahasiswa" value="Aktif Reguler" />
      </View>

      {/* Skills & Expertise */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeader}>
          <Ionicons name="code-slash-outline" size={18} color="#2563EB" />
          <Text style={styles.sectionTitle}>Skills & Expertise</Text>
        </View>
        <View style={styles.skillsWrapper}>
          {profileData.skills.map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Certifications & Achievements */}
      <View style={[styles.sectionCard, { marginBottom: 32 }]}>
        <View style={styles.sectionHeader}>
          <Ionicons name={"ribbon-outline" as any} size={18} color="#2563EB" />
          <Text style={styles.sectionTitle}>Certifications</Text>
        </View>
        <View style={{ gap: 12, marginTop: 4 }}>
          {profileData.certifications.map((cert: any, index: number) => (
            <View key={index} style={styles.certItemMinimal}>
              <Text style={styles.certName}>{cert.name}</Text>
              <Text style={styles.certIssuer}>
                {cert.issuer} • {cert.year}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  bannerHeader: { height: 80, backgroundColor: "#0F172A" },
  profileCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: -40,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    elevation: 4,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },
  avatarWrapper: { position: "relative", marginBottom: 12 },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  verifiedBadge: {
    position: "absolute",
    bottom: 0,
    right: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -0.3,
  },
  profession: {
    fontSize: 13,
    color: "#2563EB",
    fontWeight: "700",
    marginTop: 4,
  },
  univ: { fontSize: 12, color: "#64748B", marginTop: 2, fontWeight: "500" },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },
  statItem: { alignItems: "center" },
  statNumber: { fontSize: 16, fontWeight: "800", color: "#0F172A" },
  statLabel: {
    fontSize: 11,
    color: "#64748B",
    fontWeight: "600",
    marginTop: 2,
  },
  statDivider: { width: 1, height: 24, backgroundColor: "#E2E8F0" },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    elevation: 2,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#0F172A" },
  bioText: {
    fontSize: 13.5,
    color: "#475569",
    lineHeight: 22,
    fontWeight: "400",
  },
  skillsWrapper: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  skillBadge: {
    backgroundColor: "#EFF6FF",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DBEAFE",
  },
  skillText: { fontSize: 12, color: "#1D4ED8", fontWeight: "700" },
  certItemMinimal: {
    paddingLeft: 12,
    borderLeftWidth: 3,
    borderLeftColor: "#2563EB",
    paddingVertical: 2,
  },
  certName: { fontSize: 13.5, fontWeight: "700", color: "#0F172A" },
  certIssuer: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
    fontWeight: "500",
  },
});
