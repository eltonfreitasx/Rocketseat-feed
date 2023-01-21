import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/76684471?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elzinho Gostosinho</strong>
              <time title="21 de Janeiro 12:59" dateTime="2023-01-21 12:59:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              {" "}
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Dev, parabéns!! </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
