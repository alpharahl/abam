import {useEffect, useState} from "react";
import {readDir, readTextFile} from "@tauri-apps/api/fs";

export default function DpsMeter() {
  const logsLocation = "C:/Program Files (x86)/World of Warcraft/_retail_/Logs";
  const [logNames, setLogNames] = useState<string[]>([])
  const [log, setLog] = useState<string[]>([]);
  useEffect(() => {
    readDir(logsLocation).then(dir => {
      if (dir) {
        setLogNames(dir!.map(entry => entry.name).filter(n => n?.startsWith("WoWCombatLog-")))
      }
    });
  })
  useEffect(() => {
    if (logNames.length > 0) {
      let lines: string[] = [];
      readTextFile(logsLocation + "/" + logNames[logNames.length - 1]).then(data => {
        lines = data.split("\n");
      });
      let sikran = false;
      let sikranlines: string[] = [];
      console.log(lines.length)
      lines.forEach(line => {
        if (!sikran && line.includes("Sikran")) {
          sikran = true;
          console.log("Found Sikran", line)
        }
        if (sikran) {
          sikranlines.push(line);
          if (line.includes("Sikran") && line.includes("UNIT_DIED")) {
            console.log(`Death Line: ${line}`);
            sikran = false;
            setLog(sikranlines);
            return;
          }
        }
      })
    }
  }, [logNames])
  return (
    <div>
      {log.length}
    </div>
  )
}