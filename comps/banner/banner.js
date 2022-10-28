import styles from "./banner.module.css";
const Banner = (props) => {
  const { title, subtitle } = props;
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.subtitle}>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Banner;
