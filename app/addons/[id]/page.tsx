import DrawAddon from "@/app/addons/[id]/drawAddon";
import {getAddons} from "@/api/get-addons";

export async function generateStaticParams() {
  const addons = await getAddons();
  console.log(addons);
  return addons.map((addon) => ({
    id: addon.id
  }))
}

export default function Page({params: {id}}: { params: { id: string } }) {
  return (
    <DrawAddon id={id}/>
  )
}