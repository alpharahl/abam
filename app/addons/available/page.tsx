'use client'
import {useQuery} from "react-query";
import {getAddons} from "@/api/get-addons";
import AddonListEntry from "@/components/addon-list-entry";
import {useState} from "react";

export default function Page() {
  const {data: addons} = useQuery('addons', getAddons)
  const [searchString, setSearchString] = useState<string>("");

  return (
    <div>
      <input type={"text"} className={"text-black px-5 py-2 rounded-md m-3"} onChange={({target}) => {
        setSearchString(target.value)
      }}/>
      <div className="m-3 flex flex-col gap-3">

        {addons
          ?.filter(addon => {
            return searchString === "" ? true : addon.name.toLowerCase().includes(searchString.toLowerCase())
          })
          .map(addon => <AddonListEntry name={addon.name} key={addon.name}/>)}
      </div>
    </div>
  )
}