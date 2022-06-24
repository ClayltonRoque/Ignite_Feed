import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
    
    const [comments, setComments] = useState( [
      'Post muito bacana, hein?'
    ] )

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    } )

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment () {
        event.preventDefault()

        
        setComments([...comments, newCommentText])  
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        // event.target.setCustomValadity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment == commentToDelete; 
        })
        setComments(commentsWithoutDeletedOne); 
    }

    function handleNewCommentInvalid() {
            event.target.setCustomValadity('esse campo é obrigatório!')
    }

    const isNewCommentEmpty = newCommentText.length == 0;
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} datatime={publishedAt.toISOString()}> {publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
               {content.map(line => {
                if (line.type == 'paragraph') {
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type == 'link') {
                    return <p key={line.content}><a href='#'>{line.content}</a></p>
                }
               })}         
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                placeholder="Deixe um comentário" 
                name="comment"
                onChange={handleNewCommentChange}
                value={newCommentText}
                onInvalid={handleNewCommentInvalid} 
                required>
                </textarea>
                <footer>
                <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
               })} </div>
        </article>
    )
}