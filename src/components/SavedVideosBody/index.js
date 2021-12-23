import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import TrendingItem from '../TrendingItem'
import {SavedMainDiv} from './styledComponents'
import YoutubeContext from '../../Context/YoutubeContext'
import './index.css'

class SavedVideosBody extends Component {
  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderVideos = () => (
    <YoutubeContext.Consumer>
      {value => {
        const {savedItems, isTheme} = value
        const bgColor = isTheme ? '#181818' : '#ffffff'
        const color = isTheme ? '#ffffff' : null
        if (savedItems.length !== 0) {
          return (
            <ul className="videosDiv">
              {savedItems.map(each => (
                <TrendingItem each={each} key={each.id} />
              ))}
            </ul>
          )
        }
        return (
          <SavedMainDiv
            bgColor={bgColor}
            color={color}
            data-testid="savedVideos"
          >
            <div className="videosDiv1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
                className="img10"
              />
              <h1>No saved videos found</h1>
              <p>You can save your videos while watching them</p>
              <button
                type="button"
                className="button6"
                onClick={this.clickingRetry}
              >
                Retry
              </button>
            </div>
          </SavedMainDiv>
        )
      }}
    </YoutubeContext.Consumer>
  )

  render() {
    return (
      <li className="homeDiv1">
        <div className="searchDiv1">
          <AiFillFire className="icons1" />
          <h1>Saved Videos</h1>
        </div>
        {this.renderVideos()}
      </li>
    )
  }
}
export default SavedVideosBody
