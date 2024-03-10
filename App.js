import { SafeAreaView, StyleSheet,StatusBar} from 'react-native';
import React from "./node_modules/react";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import AlbumData from "./src/json/Album.json"

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:"#D2E9FF"}}>{/*iphone使用 */}
      <StatusBar />{/*android使用 */}
      <Header title={AlbumData.albumTitle}/>
      <AlbumList list={AlbumData.albumList}/>
    </SafeAreaView>
  );
}