import styles from "../styles/login.module.css";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");

  const router = useRouter();

  const handleEmail = (e) => {
    setUserMsg("");
    console.log("event", e);
    const email = e.target.value;
    setEmail(email);
  };

  const handlelogin = (e) => {
    console.log("login");
    e.preventDefault();

    if (email) {
      if (email === "louis@tekswipe.com.au") {
        router.push("/");
      } else {
        setUserMsg("Invalid email");
      }
    } else {
      // show user message
      setUserMsg("Please enter a valid email");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tekswipe SignIn</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.login}>Sign In</h1>
          <input
            type="email"
            placeholder="Email address"
            className={styles.email}
            onChange={handleEmail}
          />

          <p className={styles.msg}>{userMsg}</p>
          <button onClick={handlelogin} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
      {/* <div className={styles.logo}>
        <div className={styles.logo1}>
          <Image src="/img/tekswipe.png" width={250} height={250} />
        </div>
      </div> */}
    </div>
  );
};

export default Login;
