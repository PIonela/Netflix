import "./listItem.scss";
import { useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({ index }) => {
  const [isHovered, setIsHoverd] = useState(false);
  const trailer = "";
  return (
    <div className="listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHoverd(true)} onMouseLeave={() => setIsHoverd(false)}>
      <img src="https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="" />
      {isHovered && (<>
        <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrowIcon className="icon" />
            <AddIcon className="icon" />
            <ThumbUpOutlinedIcon className="icon" />
            <ThumbDownOutlinedIcon className="icon" />
          </div>
          <div className="itemInfoTop">
            <span>1h 14min</span>
            <span className="limit">+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ducimus ex temporibus.
        </div>
          <div className="genre"></div>
        </div>
      </>)
      }
    </div>
  )
}

export default ListItem
