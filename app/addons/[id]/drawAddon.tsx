'use client'
import {useQuery} from "react-query";
import {useGetAddon} from "@/api/get-addon";
import {useEffect, useState} from "react";

export default function DrawAddon({id}: { id: string }) {
  const {data, isLoading} = useQuery(id, useGetAddon(id))
  const [readme, setReadme] = useState("")
  useEffect(() => {
    if (!data || isLoading) {
      return
    }
    const readme = `https://github.com/Twintop/TwintopInsanityBar/blob/tww/README.md`;
    console.log(readme)
    setReadme(readme)
  }, [data])
  return (
    <div>
      Addon:
      {JSON.stringify(data)}
    </div>
  )
}