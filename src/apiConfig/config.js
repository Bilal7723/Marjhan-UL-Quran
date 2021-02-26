import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function Config() {
  const { data, error } = useSWR('https://api.github.com/repos/vercel/swr', fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}


export default Config;