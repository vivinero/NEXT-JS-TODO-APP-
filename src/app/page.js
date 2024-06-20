import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
          <div className={styles.left}>
              <div className={styles.welcome}>
               <h2>WELCOME TO DEV VEE</h2>
              </div>
          </div>
          <div className={styles.right}>
              <form className={styles.form}>
                <div className={styles.contentTop}>
                  <h2>Sign Up</h2>
                  <h5>Don't have an accout with DevVee? No worries.</h5>
                </div>
                  <div className={styles.myInput}>
                    <input type="text" placeHolder="first name"/>
                    <input type="text" placeHolder="last name"/>
                  </div>
                  <div className={styles.myInput}>
                    <input type="text" placeHolder="email name"/>
                    <input type="text" placeHolder="gender"/>
                  </div>
                  <div className={styles.myInput}>
                    <input type="text" placeHolder="phone number"/>
                    <input type="text" placeHolder="DOB"/>
                  </div>
                  <div className={styles.myInput}>
                    <input type="text" placeHolder="Password"/>
                    <input type="text" placeHolder="Confirm password"/>
                  </div>
                  <div className={styles.happyText}>
                    <p>Happy to Join the team? Click on the Sign Up button</p>
                  </div>
                  <div className={styles.buttonHolder}>
                    <button>Sign Up</button>
                  </div>
              </form>
          </div>
      </div>
    </main>
  );
}
