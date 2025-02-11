import { Suspense } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

async function Posts() {
  const posts = await fetchPosts();
  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
function LoadingPosts() {
  return (
    <div>
      <p>Loading posts...</p>
    </div>
  );
}

export default function PostsPage() {
  return (
    <div>
      <Suspense fallback={<LoadingPosts />}>
        <Posts />
      </Suspense>
    </div>
  );
}
