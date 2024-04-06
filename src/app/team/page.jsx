import React from 'react';
import getAllPosts from "../../../lib/getAllPosts";


export default async function team() {
    
    const posts = await getAllPosts();

    console.log(posts)

    return (
        <div>
            <h1 className="text-3xl">Team page </h1>

            {posts.map((post) => (
                (<li key={post.id}>{post.title}</li>)
            ))}
        </div>
    )
}


