// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use git2::Repository;

#[tauri::command]
fn load_auto_flood(){
  println!("In auto flood");
  let url = "https://github.com/LenweSaralonde/AutoFlood";
  let repo = match Repository::clone(url, "C:/Program Files (x86)/World of Warcraft/_retail_/Interface/AddOns/AutofloodCloned") {
    Ok(repo) => repo,
    Err(e) => panic!("failed to clone autoflood"),
  };
  println!("Loaded");
}


#[tauri::command]
fn fetch_addon_repo(addon_name: &str){
  println!("{}", addon_name)

}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![load_auto_flood, fetch_addon_repo])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
