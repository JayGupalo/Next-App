import React from "react";
import Link from "next/link";

const Posts = async () => {
  const resposne = await fetch("https://dummyjson.com/posts");
  const data = await resposne.json();

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">Posts</h1>

      <ul>
        {data.posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-2">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
