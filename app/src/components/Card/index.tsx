import { useNavigate } from "react-router-dom";
import { CardContainer, CardHeader } from "./styles";
import { useEffect } from "react";

interface CardProps {
  data: {
    title: string
    created_at: string
    body: string
    id: number
  }
}

export function Card({ data: { title, created_at, body, id } }: CardProps) {

  const navigate = useNavigate()

  function handleClick() {
    navigate(`/${id}`)
  }

  function formatDate() {
    const today = new Date()
    const dateOfThePost = new Date(created_at)

    const differenceInMilliseconds = Math.abs(today.getTime() - dateOfThePost.getTime())
    const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 3600 * 24))

    return differenceInDays === 1 ? 'Há 1 dia' : `Há ${differenceInDays} dias`
  }
  
  return (
    <CardContainer id={String(id)} onClick={handleClick}>
      <CardHeader>
        <h2>{title}</h2>
        <span>{formatDate()}</span>
      </CardHeader>
      <p>{body}</p>
    </CardContainer>
  )
}