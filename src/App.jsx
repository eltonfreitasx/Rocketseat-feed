import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipiscin elit."
          />

          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipiscin elit."
          />
        </main>
      </div>
    </>
  );
}
export default App;