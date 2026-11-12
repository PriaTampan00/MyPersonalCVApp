import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function ContactScreen() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setSubmitted(false);

    if (!nama.trim() || !email.trim() || !pesan.trim()) {
      const msg = "Semua kolom form wajib diisi!";
      setErrorMsg(msg);

      if (Platform.OS === "web") {
        alert(msg);
      } else {
        Alert.alert("Peringatan", msg);
      }
      return;
    }

    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.formCard}>
        <Text style={styles.headerTitle}>Send a Message</Text>
        <Text style={styles.subTitle}>
          Ada pertanyaan atau ajakan kolaborasi? Silakan isi form di bawah.
        </Text>

        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap..."
          placeholderTextColor="#94A3B8"
          value={nama}
          onChangeText={(text) => {
            setNama(text);
            setErrorMsg("");
          }}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="email@domain.com"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrorMsg("");
          }}
        />

        <Text style={styles.label}>Pesan</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Tuliskan pesan kamu..."
          placeholderTextColor="#94A3B8"
          multiline
          numberOfLines={4}
          value={pesan}
          onChangeText={(text) => {
            setPesan(text);
            setErrorMsg("");
          }}
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSubmit}
        >
          <Ionicons name="paper-plane-outline" size={18} color="#FFFFFF" />
          <Text style={styles.buttonText}>Kirim Pesan</Text>
        </Pressable>
      </View>

      {/* Kartu Peringatan (Jika Ada Kolom Kosong) */}
      {errorMsg !== "" && (
        <View style={styles.errorCard}>
          <Ionicons name="alert-circle" size={24} color="#DC2626" />
          <View style={{ flex: 1 }}>
            <Text style={styles.errorTitle}>Gagal Mengirim!</Text>
            <Text style={styles.errorText}>{errorMsg}</Text>
          </View>
        </View>
      )}

      {/* Kartu Sukses (Jika Semua Terisi) */}
      {submitted && (
        <View style={styles.resultCard}>
          <Ionicons name="checkmark-circle" size={24} color="#059669" />
          <View style={{ flex: 1 }}>
            <Text style={styles.resultTitle}>Pesan Berhasil Terkirim!</Text>
            <Text style={styles.resultText}>
              Terima kasih {nama}, pesan kamu telah diterima.
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC", padding: 16 },
  formCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  headerTitle: { fontSize: 18, fontWeight: "800", color: "#0F172A" },
  subTitle: {
    fontSize: 12.5,
    color: "#64748B",
    marginTop: 4,
    marginBottom: 20,
    lineHeight: 18,
  },
  label: { fontSize: 13, fontWeight: "700", color: "#0F172A", marginBottom: 6 },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#F8FAFC",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 14,
    color: "#0F172A",
  },
  textArea: { height: 100, textAlignVertical: "top", paddingTop: 12 },
  button: {
    backgroundColor: "#0F172A",
    height: 48,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 6,
  },
  buttonPressed: { opacity: 0.85 },
  buttonText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14 },
  errorCard: {
    backgroundColor: "#FEF2F2",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FCA5A5",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 32,
  },
  errorTitle: { fontSize: 14, fontWeight: "700", color: "#B91C1C" },
  errorText: { fontSize: 12.5, color: "#991B1B", marginTop: 2 },
  resultCard: {
    backgroundColor: "#ECFDF5",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#A7F3D0",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 32,
  },
  resultTitle: { fontSize: 14, fontWeight: "700", color: "#047857" },
  resultText: { fontSize: 12.5, color: "#065F46", marginTop: 2 },
});
