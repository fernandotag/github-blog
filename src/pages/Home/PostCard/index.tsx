import { formatDistanceToNowStrict } from 'date-fns'
import { IPost } from '..'
import { enUS } from 'date-fns/locale'
import { PostCardBody, PostCardContainer, PostCardHeader } from './styles'

interface IPostCardProps {
  post: IPost
}

export function PostCard({ post }: IPostCardProps) {
  const { id, title, text, createdAt } = post
  const formattedDate = formatDistanceToNowStrict(new Date(createdAt), {
    locale: enUS,
    addSuffix: true,
  })

  function removeExcessCharactersFromText(text: string): string {
    if (text.length <= 180) {
      return text
    }

    return text
      .substring(0, 200)
      .split(' ')
      .slice(0, -1)
      .join(' ')
      .concat('...')
  }

  return (
    <PostCardContainer to={`/${id}`}>
      <PostCardHeader>
        <h1>{title}</h1>
        <span id="time">{formattedDate}</span>
      </PostCardHeader>
      <PostCardBody>
        <p>{removeExcessCharactersFromText(text)}</p>
      </PostCardBody>
    </PostCardContainer>
  )
}