// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useRef } from "react";
// import React from "react";
// import { addSong, playAudio, stopAudio } from "../redux/action";
// import { songList } from "../redux/songAction";
// import "./Main.css";

// const Main = () => {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.productData);
//   const isPlaying = useSelector((state) => state.audio?.playAudio || false);

//   console.warn("Data in main component", data);

//   const handlePlay = () => dispatch(playAudio());
//   const handleStop = () => dispatch(stopAudio());

//   const AudioPlayer = ({ audioSrc, playAudio }) => {
//     const audioRef = useRef(null);

//     useEffect(() => {
//       if (!audioRef.current) {
//         audioRef.current = new Audio(audioSrc);  // Initialize audio source only once
//       }

//       if (playAudio) {
//         audioRef.current.play();
//       } else {
//         audioRef.current.pause();
//       }

//       return () => {
//         // Pause the audio and reset to beginning if component unmounts
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       };
//     }, [playAudio, audioSrc]);

//     return null; // No visible render for the audio player
//   };

//   // Fetch song list on component mount
//   useEffect(() => {
//     dispatch(songList());
//   }, [dispatch]);

//   return (
//     <div>
//       <div className="App">
//         <h1>List of Songs</h1>
//       </div>

//       <div className="product-container">
//         {(data || []).map((item) => (
//           <div className="product-item" key={item.id}>
//             <img src={item.image} alt="" className="pic" />
//             <div>
//               <div>Name: {item.name}</div>
//               <div>Price: {item.price}</div>
//               <div>Color: {item.color}</div>
//               <div>Category: {item.category}</div>
//               <div>Brand: {item.brand}</div>
              
//               {/* Individual Audio Controls */}
//               <div>
//                 <button onClick={handlePlay}>Play Audio</button>
//                 <button onClick={handleStop}>Stop Audio</button>
//                 <AudioPlayer audioSrc={item.audio} playAudio={isPlaying} />
//               </div>

//               <div>
//                 <button onClick={() => dispatch(addSong(item))}>Add Song</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main;
















// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useEffect,useRef } from "react";
// import React,{useState} from "react";
// import { addSong, playAudio, stopAudio } from "../redux/action";
// import { songList } from "../redux/songAction";
// import "./Main.css"
// const Main = () => {
//   const dispatch = useDispatch();
//   let data = useSelector((state) => state.productData);
//   console.warn("data in main component", data);

//   const isPlaying = useSelector((state) => state.audio?.playAudio || false);
//   const handlePLay=()=> dispatch(playAudio());
//   const handleStop=()=> dispatch(stopAudio());
//   const product = {
//     name: "i Phone",
//     price: "999",
//     color: "red",
//     catogory: "mobile",
//     audio:"audio"
//   };
//   const AudioPlayer=({playAudio})=>{
//   const audioRef=useRef(new Audio(product.audio));
//   useEffect(()=>{
//     if(playAudio){
//       audioRef.current.play();
//     }else{
//       audioRef.current.pause();
//     }
//   },[playAudio]);
//   return null;
//   }
//   useEffect(() => {
//     dispatch(songList());
//   }, [dispatch]);
//   return (
//     <div>
//       <div className="App">
       
//         {/* <button onClick={() => dispatch(songList(product.name))}>Song List</button> */}
//       </div>
//               <h1>List of Songs</h1>
          

//       <div className="product-container">
//         {(data || []).map((item) => (
//           <div className="product-item" key={item.id}>
//             <img src={item.image} alt="" className="pic" />
//             <div>
//               <div>Name: {item.name}</div>
//               <div>Price: {item.price}</div>
//               <div>Color: {item.color}</div>
//               <div>Category: {item.category}</div>
//               <div>Brand: {item.brand}</div>
          
//  {/* {audio=item.audio} */}
//      {/* <audio controls>
//             <source src={item.audio} type="audio/mp3" />
//             Your browser does not support the audio tag.
//         </audio> */}
//         <div>
//           <button onClick={handlePLay}>Play Audio</button>
//           <button onClick={handleStop}>Stop Audio</button>
//           {/* {playAudio(isPlaying)} */}
//           <AudioPlayer playAudio={isPlaying}/>
//         </div>
//         {/* {console.warn("audio file",item.audio)} */}
//               <div>
//                 <button onClick={() => dispatch(addSong(item))}>
//                   Add Song
//                 </button>
            
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main;





















import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect,useRef } from "react";
import React,{useState} from "react";
import { addSong, playAudio, stopAudio } from "../redux/action";
import { songList } from "../redux/songAction";
import "./Main.css"
const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  const isPlaying = useSelector((state) => state.audio?.playAudio || false);
  // const handlePLay=()=> dispatch(playAudio());
  // const handleStop=()=> dispatch(stopAudio());
  const [currentAudioSrc,setCurrentAudioSrc]=useState(null);
  const product = {
    name: "i Phone",
    artist: "aster",
    audio:"audio"
  };

  const handlePLay=(audioSrc)=>{
    setCurrentAudioSrc(audioSrc);
    dispatch(playAudio);
  }
  
  const handleStop=()=>{
    setCurrentAudioSrc(null);
    dispatch(stopAudio());
  }
  const AudioPlayer=({audioSrc,playAudio})=>{
  // const audioRef=useRef(new Audio(product.audio));
  const audioRef=useRef(null);
  // useEffect(()=>{
  //   if(playAudio){
  //     audioRef.current.play();
  //   }else{
  //     audioRef.current.pause();
  //   }
  // },[playAudio]);
  // return null;
  // }
     useEffect(()=>{
    if (audioSrc &&(!audioRef.current||audioRef.current.src !==audioSrc)){
audioRef.current=new Audio(audioSrc);
  }
  if(playAudio&&audioRef.current){
    audioRef.current.play();
  }else if(audioRef.current){
    audioRef.current.pause();
  }
  return()=>{
    if(audioRef.current){
      audioRef.current.pause();
      audioRef.current.currentTime=0;
    }
  };
},[playAudio,audioSrc]);
return null;
};
  useEffect(() => {
    dispatch(songList());
  }, [dispatch]);
  const audioSrc = (product) => {
    const audio = new Audio(product.audio);
    audio.load();
    console.log(`Loaded ${product.audio}`);
  };

  audioSrc(product);
  return (
    <div>
      <div className="App">
       
        {/* <button onClick={() => dispatch(songList(product.name))}>Song List</button> */}
      </div>
              <h1>List of Songs</h1>
          

      <div className="product-container">
        {(data || []).map((item) => (
          
          <div className="product-item" key={item.id}>
            <img src={item.image} alt="" className="pic" />
            <div>
              <div>Name: {item.name}</div>
              <div>Artist: {item.artist}</div>
          
 {/* {audio=item.audio} */}
     {/* <audio controls>
            <source src={item.audio} type="audio/mp3" />
            Your browser does not support the audio tag.
        </audio> */}
        <div>
          <button onClick={handlePLay}>Play Audio</button>
          <button onClick={handleStop}>Stop Audio</button>
          {/* {playAudio(isPlaying)} */}
          
          <AudioPlayer playAudio={isPlaying}/>
        </div>
        {/* {console.warn("audio file",item.audio)} */}
              <div>
                <button onClick={() => dispatch(addSong(item))}>
                  Add Song
                </button>
            
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
