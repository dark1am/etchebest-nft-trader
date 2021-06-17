import {React} from "react";
import "./ItemListContainer.css";
import ItemCount from '../ItemCount/ItemCount.js'

function ItemListContainer() {

  const item = {
    name: "BEEPLE-STRATO.9",
    url: 'https://pbs.twimg.com/media/E3-a32yXIAQKyjb.jpg',
    stock:5
  }
  const item2 = {
    name:"MotionArtJournal",
    url: 'https://64.media.tumblr.com/a0e5e779b1d9af68431f2c4fe09fd0b0/88715e85981a4062-2e/s540x810/d3398cb2aa9aeb3857d3a09978984decf0b40175.gifv',
    stock:15
  }
  const item3 = {
    name:"KIDMOGRAPH",
    url: 'https://64.media.tumblr.com/0dac9c4a0d340e5de41a37f351d6773d/094e648c7e3710ba-5a/s500x750/26ad1bda56c4afca0492e07f38ea2e470a084d9d.gifv',
    stock:25
  }

  return (
    <div className="listContainer">
      <div className="listContainer_card">
        <ItemCount img={item.url} item={item.name} stock={item.stock} initial="0" />
        <ItemCount img={item2.url} item={item2.name} stock={item2.stock} initial="0" />
        <ItemCount img={item3.url} item={item3.name} stock={item3.stock} initial="0" />
      </div>
    </div>
  );
}

export default ItemListContainer;
