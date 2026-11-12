import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ScoreCard from "../../components/ScoreCard";
import scoreData from "../../data/score.json";

export default function ScoreScreen() {
  const { identitas, currentScore, progress } = scoreData;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Course Info Header */}
      <View style={styles.infoCard}>
        <View style={styles.badgeMK}>
          <Text style={styles.badgeMKText}>MATA KULIAH</Text>
        </View>
        <Text style={styles.mkTitle}>{identitas.mk}</Text>
        <View style={styles.dosenRow}>
          <Ionicons name="person-circle-outline" size={16} color="#64748B" />
          <Text style={styles.dosenText}>Dosen: {identitas.dosen}</Text>
        </View>
      </View>

      {/* Main Score Banner Widgets */}
      <View style={styles.scoreBanner}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>CURRENT SCORE</Text>
          <Text style={styles.scoreValue}>{currentScore.nilai}</Text>
          <View style={styles.gradeBadge}>
            <Text style={styles.gradeText}>Grade {currentScore.grade}</Text>
          </View>
        </View>

        <View style={styles.lpBox}>
          <Ionicons
            name="trophy-outline"
            size={24}
            color="#FFFFFF"
            style={{ marginBottom: 4 }}
          />
          <Text style={styles.lpLabel}>LEARNING POINTS</Text>
          <Text style={styles.lpValue}>
            {currentScore.learningPoints.toLocaleString()} LP
          </Text>
        </View>
      </View>

      {/* Progress Breakdown */}
      <View style={styles.sectionTitleRow}>
        <Ionicons name="analytics-outline" size={18} color="#2563EB" />
        <Text style={styles.sectionHeader}>Learning Progress Breakdown</Text>
      </View>
      <ScoreCard
        title="Attendance"
        percentage={progress.attendance}
        color="#10B981"
      />
      <ScoreCard
        title="Practice"
        percentage={progress.practice}
        color="#2563EB"
      />
      <ScoreCard title="Quest" percentage={progress.quest} color="#8B5CF6" />
      <ScoreCard
        title="Challenge"
        percentage={progress.challenge}
        color="#F59E0B"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC", padding: 16 },
  infoCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    elevation: 2,
  },
  badgeMK: {
    backgroundColor: "#EFF6FF",
    alignSelf: "flex-start",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  badgeMKText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#2563EB",
    letterSpacing: 0.5,
  },
  mkTitle: { fontSize: 18, fontWeight: "800", color: "#0F172A" },
  dosenRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },
  dosenText: { fontSize: 12.5, color: "#64748B", fontWeight: "500" },
  scoreBanner: { flexDirection: "row", gap: 12, marginBottom: 20 },
  scoreBox: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreLabel: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  scoreValue: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "900",
    marginVertical: 2,
  },
  gradeBadge: {
    backgroundColor: "#059669",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  gradeText: { color: "#FFFFFF", fontWeight: "800", fontSize: 11 },
  lpBox: {
    flex: 1,
    backgroundColor: "#2563EB",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  lpLabel: {
    color: "#DBEAFE",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  lpValue: { color: "#FFFFFF", fontSize: 18, fontWeight: "800", marginTop: 4 },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionHeader: { fontSize: 15, fontWeight: "700", color: "#0F172A" },
});
