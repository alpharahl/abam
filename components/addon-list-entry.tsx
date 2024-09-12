type AddonListEntryProps = {
  name: string;
}

export default function AddonListEntry({name}: AddonListEntryProps) {
  return (<div key={name}>
    {name}
  </div>)

}