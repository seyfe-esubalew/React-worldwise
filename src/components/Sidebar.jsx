import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className="">
          Copy Right reserved &copy; By Seyfe Esubalew{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
