import styles from "./navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = (props) => {
  const { Login } = props;
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const handleHome = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleAbout = (e) => {
    e.preventDefault();
    router.push("/about");
  };

  const handledropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Tekswipe <span className={styles.gold}>Company</span>
      </h1>
      <div className={styles.navbar}>
        <ul className={styles.list}>
          <li onClick={handleHome}>Home</li>
          <li className={styles.about} onClick={handleAbout}>
            About
          </li>
        </ul>

        <nav className={styles.nav}>
          <div>
            <button className={styles.loginBtn} onClick={handledropdown}>
              <p className={styles.login}>{Login}</p>
              {/* expand more icon */}
            </button>
            <div className={styles.logout}>
              {dropdown && (
                <div className={styles.logoutBtn}>
                  <Link href="/login">
                    <a className={styles.logoutBtn1}>Logout</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
