// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use config::Config;
use std::collections::HashMap;
use std::fs;

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

#[tauri::command]
fn list_addons() -> Vec<String> {
  let settings = Config::builder()
    .add_source(config::File::with_name("abam"))
    .build()
    .unwrap();
  let app: AppConfig = settings.try_deserialize().unwrap();
  let baseWowDirectory = format!("{}/_retail_", app.wow_directory);
  let wtfAccountsDirectory = format!("{}/WTF/Account", baseWowDirectory);
  let paths = fs::read_dir(wtfAccountsDirectory).unwrap();
  let names = paths.filter_map(|entry| {
    entry.ok().and_then(|e|
      e.path().file_name()
        .and_then(|n| n.to_str().map(|s| String::from(s)))
    )
  }).collect::<Vec<String>>();
  names
}

#[tauri::command]
fn list_accounts() -> Vec<String> {
  let settings = Config::builder()
    .add_source(config::File::with_name("abam"))
    .build()
    .unwrap();
  let app: AppConfig = settings.try_deserialize().unwrap();
  let baseWowDirectory = format!("{}/_retail_", app.wow_directory);
  let wtfAccountsDirectory = format!("{}/WTF/Account", baseWowDirectory);
  let paths = fs::read_dir(wtfAccountsDirectory).unwrap();
  let names = paths.filter_map(|entry| {
    entry.ok().and_then(|e|
      e.path().file_name()
        .and_then(|n| n.to_str().map(|s| String::from(s)))
    )
  })
    .filter(|entry| entry.ne("SavedVariables"))
    .collect::<Vec<String>>();
  names
}


fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, list_addons, list_accounts])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
