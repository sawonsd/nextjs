

export default async function contact() {
  const res = [{
    'title' : 'this is title',
    'body' : 'this is body',
  }]
    return (
      <div>
        {res.map((posts) => (
          <div>
            <h1 className="text-3xl">{posts.title}</h1>
            <p>{posts.body}</p>
          </div>
        ))}
      </div>
    );
  }
  