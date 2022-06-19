import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import './Global.css'
import styles from './App.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className={styles.wrapper}>
     <Sidebar />
      <main>
       <Post />
       <Post />
       <Post />
      </main>
      
    </div>
  </React.StrictMode>
)
