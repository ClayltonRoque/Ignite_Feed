import styles from './Comment.module.css'
import img from '../assets/kawaii2.gif'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {
    const [likeComment, setLikeComment] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }
    function handleLikeComment() {
        setLikeComment((state) => {
            return state + 1
        })
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://i.gifer.com/97jj.gif" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Claylton Roque</strong>
                        <time title="18 de junho ás 16:49" datatime="2022-06-18 16:48">Cerca de uma 1h atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeComment}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}