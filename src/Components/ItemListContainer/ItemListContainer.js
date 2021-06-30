import {React,useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import "./ItemListContainer.css";

function ItemListContainer({category}) {

  const [state,setState] = useState(false)
  const [state2,setState2] = useState(false)

  const products = [
    {
        name: "BEEPLE-STRATO.9",
        pictureUrl: 'https://pbs.twimg.com/media/E3-a32yXIAQKyjb.jpg',
        description: 'Piece rendered in Octane 4',
        price:"U$D 550.000",
        stock:5,
        category:'trend'
    },
    {
        name:"MotionArtJournal",
        pictureUrl: 'https://64.media.tumblr.com/a0e5e779b1d9af68431f2c4fe09fd0b0/88715e85981a4062-2e/s540x810/d3398cb2aa9aeb3857d3a09978984decf0b40175.gifv',
        description: 'The aclaimed Tumblr artist tries NFT',
        price:"U$D 57.000",
        stock:15,
        category:'offers'
    },
    {
        name:"KIDMOGRAPH",
        pictureUrl: 'https://64.media.tumblr.com/0dac9c4a0d340e5de41a37f351d6773d/094e648c7e3710ba-5a/s500x750/26ad1bda56c4afca0492e07f38ea2e470a084d9d.gifv',
        description: 'The argentinian breaks the internet',
        price:"U$D 150.000",
        stock:25,
        category:'offers'
    },
    {
        name:"PWNISHER",
        pictureUrl: 'https://resizer.glanacion.com/resizer/hVrmjruYjzlqeVOp_mXfF56at7E=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/T3CUQ6OJE5GIBMJIE6THNQRZAY.jpg',
        description: 'Great 3d youtuber artist',
        price:"U$D 00.00",
        stock:100,
        category:'freebies'
    },
    {
        name:"Not Forgotten,but Gone - Whisbe",
        pictureUrl: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/03/23/thumbs/871x871/102274.jpg',
        description: 'Perhaps the artist on the list ...',
        price:"U$D 1.000.000",
        stock:100,
        category:'rares'
    },
    {
        name:"Forever Rose -Kevin Abosch",
        pictureUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F02%2Fforever-rose-worlds-most-valuable-crypto-artwork-0.jpg?w=960&cbr=1&q=90&fit=max',
        description: 'Astonishing art from the famous artist',
        price:"U$D 300.000",
        stock:100,
        category:'rares'
    }
]

  useEffect(() => {
    if(category!==undefined){
      setState(true)
    } else {
      setState2(true)
    }
  }, [category])

  return (
    <div className="listContainer">
      {state2 &&(
          products.map(e=>
            <ul>
              <li><Link to={`/item/${e.name}`}><p>{e.name}</p></Link></li>
              <li>${e.price} </li>
              <li><img src={e.pictureUrl} alt="" /></li>
            </ul>)
        )
      }
      { state && (
        products
        .filter(e=>
          e.category===category
        )
        .map(e=>
          <div>
            <Link to={`/item/${e.name}`}><p>{e.name}</p></Link>
            <p>{e.description} </p>
            <p>{e.price} </p>
          </div>
        )
      )
      } 
    </div>
  );
}

export default ItemListContainer;
