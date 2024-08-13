export default async function Home() {
  const response = await fetch("http://localhost:3002/api/home", { cache: "no-cache" })
  let data = {}
  if (response.status !== 200) { console.log("res>>>>>>>>>>", response) } else { data = await response.json() }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
    </main>
  );
}
