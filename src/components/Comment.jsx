import styles from './Comment.module.css'
import img from '../assets/kawaii2.gif'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://i.gifer.com/97jj.gif" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Claylton Roque</strong>
                        <time title="18 de junho ás 16:49" dataTime="2022-06-18 16:48">Cerca de uma 1h atrás</time>
                    </div>
                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>Kaguya lover</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}