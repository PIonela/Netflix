import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>
                        {type === "movie" ? "Movies" : "Series"}
                    </span>
                    <select name="genre" id="genre">
                        <option>Genre</option> 
                        <option value="adventure">adventure</option>
                        <option value="animation">animation</option>
                        <option value="comedy">comedy</option>
                        <option value="crime">crime</option>
                        <option value="drama">drama</option>
                        <option value="documentary">documentary</option>
                        <option value="fantasy">fantasy</option>
                        <option value="historical">historical</option>
                        <option value="horror">horror</option>
                        <option value="romance">romance</option>
                        <option value="sci-fi">sci-fi</option>
                        <option value="thriller">thriller</option>
                        <option value="western">western</option>
                    </select>
                </div>
            )}
            <img src="https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60" alt="" />
            <div className="info">
                <img src="https://www.freeiconspng.com/uploads/harry-potter-logo-transparent-1.png" width="350" alt="harry potter logo transparent" />
                <span className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dolor at, recusandae aspernatur a exercitationem vitae placeat repellendus provident. Ad numquam impedit alias provident. Fugit tempore voluptatibus quisquam ipsum suscipit.</span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon/>
                    <span>More Info</span>
                </button>
            </div>
            </div>
        </div>
    )
}

export default Featured
