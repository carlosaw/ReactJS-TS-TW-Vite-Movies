import { Post } from '../types/Post';
type Props = {
  data: Post; 
}
export const PostItem = ({ data }: Props) => {
  return (
    <div className="p-4 border border-t-0 border-r-0 border-l-0">
      <h4 className="text-blue-300 font-semibold text-xl">Título: {data.title}</h4>
      <small># {data.id} - Usuário: {data.userId}</small>
      <p>{data.body}</p>
    </div>
  );
}