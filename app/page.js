import Image from "next/image";
import styles from "./page.module.css";
import MaterialUpload from "./pages/MaterialUpload";
export default function Home() {
  return (
    <main className={styles.main}>
      <MaterialUpload />
    </main>
  );
}
