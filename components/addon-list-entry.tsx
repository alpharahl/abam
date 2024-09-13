import Link from "next/link";

type AddonListEntryProps = {
  name: string;
  id: string;
}

export default function AddonListEntry({name, id}: AddonListEntryProps) {
  return (<div key={name}>
    <Link href={`/addons/${id}`}>
      {name}
    </Link>
  </div>)

}