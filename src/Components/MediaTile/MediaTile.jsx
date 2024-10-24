
import './MediaTile.css'

const MediaTile = ({source, mediaType='image'}) => {


  return (
    <div className="MediaTile">

      <img className="media-prop" src={source} alt="prop"/>


    </div>
  )

}

export default MediaTile