import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {fName: 1, lName: 1}

  showFName = () => {
    this.setState(prevState => ({
      fName: prevState.fName === 1 ? 0 : 1,
    }))
  }

  showLName = () => {
    this.setState(prevState => ({
      lName: prevState.lName === 1 ? 0 : 1,
    }))
  }

  render() {
    const {fName, lName} = this.state
    const fNameEl = !fName ? <p className="f">Joe</p> : null
    const lNameEl = !lName ? <p className="f">Jonas</p> : null

    return (
      <div className="mainBg">
        <div className="cont">
          <h1 className="mainHead">Show/Hide</h1>
          <div className="btnCont">
            <div>
              <button className="button" type="submit" onClick={this.showFName}>
                Show/Hide Firstname
              </button>
            </div>
            <div>
              <button className="button" type="submit" onClick={this.showLName}>
                Show/Hide Lastname
              </button>
            </div>
          </div>
          <div className="nameEl">
            <div className="fhead">{fNameEl}</div>
            <div className="fhead">{lNameEl}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
