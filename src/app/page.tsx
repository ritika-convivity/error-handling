'use client'
// import { toast } from "@/components/ui/use-toast";
import { getError } from "@/lib/Error";
import { title } from "process";
import useSWR from "swr";

export default function Home() {
  // const response = await fetch("http://localhost:3002/api/home", { cache: "no-cache" })
  // let data = {}
  // if (response.status !== 200) { console.log("res>>>>>>>>>>", response) } else { data = await response.json() }
  const { data, error } = useSWR("/api/home",
    () => getError(),
    {
      onError: (error) => {
        console.log(error, 'new error');
        return alert(error);
        // toast({
        //   title: error,
        //   variant: 'destructive',
        // });
      }
    }
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
    </main>
  );
}
