import { CSSProperties } from "react";

type SpinnerProps = {
  styles: CSSProperties;
};

export default function Spinner({ styles }: SpinnerProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div style={styles} className="spinner"></div>
    </div>
  );
}
