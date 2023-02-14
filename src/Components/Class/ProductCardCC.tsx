import React, { Component } from 'react'
import "../Style/Style.css"
export default class ProductCardCC extends Component {
  render() {
    return (
      <>
                <div className="cards_container col-lg-3 col-sm-6 ">
                  <div className="card mb-4 img-field">
                    <img src="https://cdn.dribbble.com/userupload/4590146/file/original-68c343aa7c2fbd3abc2597e6657043ce.png?compress=1&resize=450x338&vertical=top" className="card-img" alt="..." />
                    <div className="card-body card-footer">
                      <div className="card-left-content">
                        <a
                          className="user_profile_link"
                          rel="contact"
                          href="/kretyastudio"
                        >
                          <img
                            className="user_profile_photo"
                            src="https://cdn.dribbble.com/userupload/4590146/file/original-68c343aa7c2fbd3abc2597e6657043ce.png?compress=1&resize=450x338&vertical=top"
                            alt="profile-pic"
                          />
                          <span className="display-name">Peter Parker</span>
                        </a>

                        <a className="badge-link" href="/pro">
                          <span className="badge badge-team">Pro</span>
                        </a>
                      </div>
                      <div className="card-right-content">
                        <a className="like_shots" href=".">
                          <i color="#918888" className="fa-solid fa-heart"></i>
                          <span>660</span>
                        </a>
                        <div className="view_shots">
                          <i className="fa-solid fa-eye"></i>
                          <span>3k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards_container col-lg-3 col-sm-6 ">
                  <div className="card mb-4 img-field">
                    <img src="https://cdn.dribbble.com/userupload/4454740/file/original-17ab8a9b382d6c672681226bb2aa8804.png?compress=1&resize=700x525&vertical=top" className="card-img" alt="..." />
                    <div className="card-body card-footer">
                      <div className="card-left-content">
                        <a
                          className="user_profile_link"
                          rel="contact"
                          href="/kretyastudio"
                        >
                          <img
                            className="user_profile_photo"
                            src="https://cdn.dribbble.com/userupload/4454740/file/original-17ab8a9b382d6c672681226bb2aa8804.png?compress=1&resize=700x525&vertical=top"
                            alt="profile-pic"
                          />
                          <span className="display-name">Norch Studio</span>
                        </a>

                        <a className="badge-link" href="/pro">
                          <span className="badge badge-team">Team</span>
                        </a>
                      </div>
                      <div className="card-right-content">
                        <a className="like_shots" href=".">
                          <i color="#918888" className="fa-solid fa-heart"></i>
                          <span>165</span>
                        </a>
                        <div className="view_shots">
                          <i className="fa-solid fa-eye"></i>
                          <span>10.5k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
        </>
    )
  }
}
