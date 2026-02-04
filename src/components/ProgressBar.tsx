import { StyleSheet, View } from "react-native";
import { palette, spacing } from "../theme";

type ProgressBarProps = {
  value: number;
  color?: string;
};

export function ProgressBar({ value, color = palette.ocean }: ProgressBarProps) {
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${Math.min(value, 100)}%`, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 8,
    backgroundColor: palette.mist,
    borderRadius: 999,
    overflow: "hidden"
  },
  fill: {
    height: "100%",
    borderRadius: 999
  }
});
