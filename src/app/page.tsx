import Image from "next/image";
import styles from "./page.module.css";
import { Landing } from "@/screens";


export default function Home() {
  return (
    <div className={styles.page}>
      <Landing/>
    </div>
  );
}
