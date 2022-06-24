import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
import './Global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://i.pinimg.com/originals/1a/cf/2c/1acf2cf477f133344418dc46e3fa8ae8.gif",
      name: "Claylton Roque",
      role: "mito" 
    },
    content: [
      {type: "paraghaph", content: "komi-san is beautiful"},
      {type: "paraghaph", content: "aharen-san is great"},
      {type: "link", content: "kaguya-sama is lindinho"}, 
    ],
    publishedAt: new Date('2022-06-20 18:10:00') 
  },
  {
    id: 2,
    author: {
      avatarUrl:"http://pa1.narvii.com/6449/e931e9b09b80f82037375b1e6e59e2685ea55bdd_00.gif",
      name: "Roque",
      role: "trabaiador" 
    },
    content: [
      {type: "paraghaph", content: "komi-san is beautiful ++"},
      {type: "paraghaph", content: "aharen-san is great ++"},
      {type: "link", content: "kaguya-sama is lindinho ++"}, 
    ],
    publishedAt: new Date('2022-06-20 18:10:00') 
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post 
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}