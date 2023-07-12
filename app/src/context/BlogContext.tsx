import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface iBlogProviderProps {
  children: ReactNode
}

interface iUser {
  company: string
  followers: number
  avatar_url: string
  login: string
  html_url: string
}

interface iPost {
  title: string
  body: string
  id: number
  created_at: string
}

interface responseIssues {
  incomplete_results: boolean
  items: iPost[]
  totalCount: number
}

interface iBlogContextType {
  user: iUser
  posts: iPost[]
}

export const BlogContext = createContext({} as iBlogContextType)

export function BlogProvider({children}: iBlogProviderProps) {
  const [user, setUser] = useState({
    company: '',
    followers: 0,
    avatar_url: '',
    login: '',
    html_url: ''
  })

  const [posts, setPosts] = useState<iPost[]>([])

  async function fetchPosts() {
    const { data } = await api.get<responseIssues>('/search/issues?q=e%20repo:sspinelli/github_blog')
    
    const formattedPosts = data.items.map(({ title, body, id, created_at }) => {
      return {
        title,
        body,
        id,
        created_at
      }
    })

    setPosts(formattedPosts)
  }

  async function fetchUser() {
    const { data } = await api.get<iUser>('/users/SSpinelli')
    
    setUser({
      company: data.company,
      followers: data.followers,
      avatar_url: data.avatar_url,
      login: data.login,
      html_url: data.html_url
    })
  }

  useEffect(() => {
    fetchUser()
      .catch((err) => console.log(err))

    fetchPosts()
      .catch((err) => console.log(err))
  }, [])
  
  return (
    <BlogContext.Provider value={{ user, posts }}>
      { children }
    </BlogContext.Provider>
  )
}