import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ()=>{
    const [fileData,setfileData] = useState("")
    const [currentTimestamp, setcurrentTimestamp] = useState(0)

    const handleFileupload = (e)=>{
        if(!e.target.files){
            return `No file is uploaded`;
        }
        const file = e.target.files[0];
        setfileData(file);
    }
    
    
    const handletimestamp = (e)=>{
        const currenttime = e.playedSeconds;
        setcurrentTimestamp(currenttime);
    }

    return (
        <div>
            <input
                type='file'
                onChange={handleFileupload}
            />
            {
                fileData && <div>
                    <ReactPlayer
                        url={URL.createObjectURL(fileData)}
                        controls
                        onProgress={handletimestamp}
                    />
                </div>
            }
            <div>
                <h1>currentTimeStamp : </h1>
                <h2>{currentTimestamp.toFixed(2)}</h2>
            </div>
        </div>
    )
}

export default VideoPlayer;