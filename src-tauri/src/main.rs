// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use config::Config;
use std::collections::HashMap;

#[derive(Debug, Default, serde_derive::Deserialize, PartialEq, Eq)]
struct AppConfig {
  wow_directory: String,
}

#[tauri::command]
fn greet() -> String {
  let settings = Config::builder()
    .add_source(config::File::with_name("abam"))
    .build()
    .unwrap();
  let app: AppConfig = settings.try_deserialize().unwrap();
  format!("{}", app.wow_directory)
}


fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
