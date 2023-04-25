import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
          <ArrowBackOutlinedIcon />
          Home
      </div>
      <video className="video" autoPlay progress controls src="https://media.istockphoto.com/id/1258112815/ro/video/happy-people-care-utilizeaz%C4%83-dispozitive-smartphone-%C3%AEn-world-wide-connected-social-network.mp4?s=mp4-640x640-is&k=20&c=wIoGMpLJ61FbhJ49zo18TS1DTmKvc8UEnb2AXdfjy48=" />
    </div>
  )
}

export default Watch
