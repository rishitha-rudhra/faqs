// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isShow: false,
  }

  showOrHide = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }))
  }

  render() {
    const {faq} = this.props
    const {id, questionText, answerText} = faq

    const {isShow} = this.state
    let imgUrl
    let altText

    if (!isShow) {
      imgUrl = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      altText = 'plus'
    } else {
      imgUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      altText = 'minus'
    }

    return (
      <li className="list-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <img src={imgUrl} alt={altText} onClick={this.showOrHide} />
        </div>
        {isShow && <p className="top-border">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
