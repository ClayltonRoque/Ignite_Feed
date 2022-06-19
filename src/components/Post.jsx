import styles from './Post.module.css'
import img from '../assets/kawaii1.gif'
import { Comment } from './Comment'

export function Post() {
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://i.pinimg.com/originals/e3/af/eb/e3afebed322f0d25ae83f0cb0ca7a66c.gif" />
                    <div className={styles.authorInfo}>
                        <strong>Claylton Roque</strong>
                        <span>Mito</span>
                    </div>
                </div>

                <time title="18 de junho ás 16:49" dataTime="2022-06-18 16:48">Publicado há uma 1h atrás</time>
            </header>

            <div className={styles.content}>
                <p>Komi-san is perfect anime aharen-san is awesome and kaguya-sama is anime of peace  </p>
                <p>Komi-san is perfect anime aharen-san is awesome and kaguya-sama is anime of peace  </p>
                <p><a href=''>Komi-san is perfect anime</a></p>
                <p><a href=''>Komi-san is perfect anime</a></p>            
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"></textarea>
                <footer>
                <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}