import { StyleSheet, Text, View } from "react-native";

interface StudentProps {
  label: string;
  value: string;
}

export default function StudentCard({ label, value }: StudentProps) {
  return (
    <View style={styles.cardRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  label: { fontSize: 13, color: "#64748B", fontWeight: "500" },
  value: { fontSize: 13.5, color: "#0F172A", fontWeight: "700" },
});
