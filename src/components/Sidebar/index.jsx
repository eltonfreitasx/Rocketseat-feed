import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607969391576-48f9021ded30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/76684471?v=4"
        />

        <strong>Elton Freitas</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#">
            <PencilLine  size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
