import React, { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import VideoItem from '../VideoItem'
import './index.css';

function Videos(props) {
    const videoItems = props.data.map((item) => {
        return <VideoItem key={item.id} data={item} />
    });

    return (
        <div className="video_list">
            {videoItems}
        </div>
    );
}

export default function VideoList() {

    const [data, setData] = useState([]);

    let dummyData = [{ title: "I suck", image: "../../public/test.jpg", body: "Lol lol lollolollolloolol  lolololololo", tags: [], id: "1" }, { title: "I suck", image: "../../public/test.jpg", body: "Lol lol lollolollolloolol  lolololololo", tags: [], id: "2" }, { title: "I suck", image: "../../public/test.jpg", body: "Lol lol lollolollolloolol  lolololololo", tags: [], id: "3" }, { title: "I suck", image: "../../public/test.jpg", body: "Lol lol lollolollolloolol  lolololololo", tags: [], id: "4" }, { title: "I suck", image: "../../public/test.jpg", body: "Lol lol lollolollolloolol  lolololololo", tags: [], id: "5" }, { title: "I suck", image: "../../public/test.jpg", body: "Lol lol lollolollolloolol  lolololololo", tags: [], id: "6" },{ title: "I suck", image: "../../public/test.jpg", body: "Lol lol lollolollolloolol  lolololololo", tags: [], id: "7" },{ title: "I suck", image: "../../public/test.jpg", body: "Lol lol lollolollolloolol  lolololololo", tags: [], id: "8" }];

    useEffect(() => {
        // API call to get data
        setTimeout(() => {
            setData(dummyData);
        }, 5000);
    }, []);

    return (
        <div>
            {!data.length && <div className="gif_loader">
                <Loader type="Circles" color="#00BFFF" height={100} width={100} />
            </div>}
            {data.length && <Videos data={data} />}
        </div>
    )
}