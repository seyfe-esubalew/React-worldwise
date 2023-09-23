import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
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
