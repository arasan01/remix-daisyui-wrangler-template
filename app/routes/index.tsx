export default function Index() {
  return (
    <div>
      <div className="font-sans leading-5 m-4">
        <h1 className="text-3xl font-bold text-teal-600">Welcome to Remix</h1>
        <ul>
          <li>
            <a
              className="btn"
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
