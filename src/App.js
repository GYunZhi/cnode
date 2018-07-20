import React, { Component } from 'react'
import RouterIndex from "./router/index"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './view/index.css'
class App extends Component {
  render() {
    return (
      <div className="page-warp">
        <Header></Header>
        <main className="main-page">
          <RouterIndex />
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
