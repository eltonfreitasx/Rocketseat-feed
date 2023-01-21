import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./Post.module.css";

// author: { avatar_url: "", name: "", role: ""}
// publisheAt: Date
// content: 

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/maykbrito.png" />
          <div className={styles.authorInfo}>
            <strong>Elton Freitas</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="21 de Janeiro 12:59" dateTime="2023-01-21 12:59:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉{""} jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a>#nlw</a> {""}
          <a>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
