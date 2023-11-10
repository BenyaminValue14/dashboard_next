import Image from "next/image";
import styles from "./rightbar.module.css";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="https://dummyimage.com/100x100/000/fff" fill alt="pro" />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Nuevo!!!</span>
          <h1>How to use the new version of the dashboard</h1>
          <span>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
