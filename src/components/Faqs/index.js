// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <h1>FAQs</h1>
        <ul className="questions-container">
          {faqsList.map(eachFaq => (
            <FaqItem faq={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
