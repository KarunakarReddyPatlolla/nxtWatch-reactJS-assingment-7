import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItemBody from '../VideoItemBody'
import {VideoItemMainDiv} from './styledComponents'
import YoutubeContext from '../../Context/YoutubeContext'
import './index.css'

class Trending extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <YoutubeContext.Consumer>
        {value => {
          const {isTheme} = value
          const bgColor = isTheme ? '#0f0f0f' : '#ffffff'
          const color = isTheme ? '#ffffff' : null
          return (
            <VideoItemMainDiv
              bgColor={bgColor}
              color={color}
              data-testid="videoItemDetails"
            >
              <ul>
                <Header />
              </ul>
              <div className="homeMainDiv">
                <SideBar />
                <div className="videoItem">
                  <VideoItemBody id={id} />
                </div>
              </div>
            </VideoItemMainDiv>
          )
        }}
      </YoutubeContext.Consumer>
    )
  }
}
export default Trending
