// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{AppHandle, Manager, WindowBuilder};

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![create_window, close_window, set_fullscreen_window])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
async fn create_window(app_handle: AppHandle){
  let _ = WindowBuilder::new(
      &app_handle, 
      "test", 
      tauri::WindowUrl::App(("window").into())
  )
  .transparent(true)
  .decorations(false)
  .skip_taskbar(false)
  .build().unwrap();
}

#[tauri::command]
fn set_fullscreen_window(app_handle: AppHandle){
  let window = app_handle.get_window("test").unwrap();
  window.set_fullscreen(true).unwrap();
}

#[tauri::command]
fn close_window(app_handle: AppHandle){
  let window = app_handle.get_window("test").unwrap();
  window.close().unwrap();
}