'use client'
import {useState} from "react";
import Link from "next/link";


export default function Home() {
  const testFile = "C:/Program Files (x86)/World of Warcraft/_retail_/Interface/AddOns";
  const [addonNames, setAddonNames] = useState<string[]>([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/*{addonNames.map(name => <AddonListEntry name={name}/>)}*/}
      {/*<DpsMeter/>*/}
      <Link href={"/addons/available"}>View Available Addons</Link>
    </main>
  );
}
