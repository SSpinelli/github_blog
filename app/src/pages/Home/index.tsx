import { useContext } from "react"
import { Card } from "../../components/Card"
import { PostsContainer, HomeContainer } from "./styles"
import { BlogContext } from "../../context/BlogContext"

export function Home() {
  const { posts } = useContext(BlogContext)
  return (
    <HomeContainer>
      <PostsContainer>
        {posts.map((el) => (
          <Card data={el} key={el.id} />
        ))}
      </PostsContainer>
    </HomeContainer>
  )
}