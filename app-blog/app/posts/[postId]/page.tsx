import React from "react";

const PostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const productId = (await params).postId;

  return <div>{productId}</div>;
};

export default PostPage;
