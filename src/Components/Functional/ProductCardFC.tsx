import React from 'react'
import "../Style/Style.css"
export const ProductCardFC = () => {
    return (
    <>
                <div className="cards_container col-lg-3 col-sm-6 ">
                  <div className="card mb-4 img-field">
                    <img src="https://cdn.dribbble.com/userupload/4653848/file/original-82de05ffb5dd80d182dbdffc61a6d9e6.png?compress=1&resize=400x300&vertical=top" className="card-img" alt="..." />
                    <div className="card-body card-footer">
                      <div className="card-left-content">
                        <a
                          className="user_profile_link"
                          rel="contact"
                          href="/kretyastudio"
                        >
                          <img
                            className="user_profile_photo"
                            src="https://cdn.dribbble.com/userupload/4653848/file/original-82de05ffb5dd80d182dbdffc61a6d9e6.png?compress=1&resize=400x300&vertical=top"
                            alt="profile-pic"
                          />
                          <span className="display-name">Mako Tsereteli</span>
                        </a>

                        <a className="badge-link" href="/pro">
                          <span className="badge badge-team">Pro</span>
                        </a>
                      </div>
                      <div className="card-right-content">
                        <a className="like_shots" href=".">
                          <i color="#918888" className="fa-solid fa-heart"></i>
                          <span>197</span>
                        </a>
                        <div className="view_shots">
                          <i className="fa-solid fa-eye"></i>
                          <span>11.1k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cards_container col-lg-3 col-sm-6 ">
                  <div className="card mb-4 img-field">
                    <img src="https://cdn.dribbble.com/userupload/4653898/file/original-b96590633326f8b498dc659df8ebe8f5.png?compress=1&resize=400x300&vertical=top" className="card-img" alt="..." />
                    <div className="card-body card-footer">
                      <div className="card-left-content">
                        <a
                          className="user_profile_link"
                          rel="contact"
                          href="/kretyastudio"
                        >
                          <img
                            className="user_profile_photo"
                            src="https://cdn.dribbble.com/userupload/4653898/file/original-b96590633326f8b498dc659df8ebe8f5.png?compress=1&resize=400x300&vertical=top"
                            alt="profile-pic"
                          />
                          <span className="display-name">Geeks Arts</span>
                        </a>

                        <a className="badge-link" href="/pro">
                          <span className="badge badge-team">Team</span>
                        </a>
                      </div>
                      <div className="card-right-content">
                        <a className="like_shots" href=".">
                          <i color="#918888" className="fa-solid fa-heart"></i>
                          <span>118</span>
                        </a>
                        <div className="view_shots">
                          <i className="fa-solid fa-eye"></i>
                          <span>11.1k</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
    )
}
