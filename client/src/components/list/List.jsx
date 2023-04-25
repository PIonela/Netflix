import "./list.scss";
import { useRef, useState } from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

const List = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [sliderNumber, setSliderNumber] = useState(0);
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1)
            listRef.current.style.transform = `translateX(${distance + 230}px)`;
        }
        if (direction === "right" && sliderNumber < 2) {
            setSliderNumber(sliderNumber + 1)
            listRef.current.style.transform = `translateX(${distance - 230}px)`;
        }
        console.log(distance);
    }

    return (
        <div className="list">
            <span className="listTitle">Title</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlinedIcon className="sliderArrow left" onClick={() => handleClick("left")} 
                    style={{display: !isMoved && "none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                </div>
                <ArrowForwardIosOutlinedIcon className="sliderArrow right" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
