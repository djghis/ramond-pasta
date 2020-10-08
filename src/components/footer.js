import React from 'react'

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>WHERE ARE WE?</h3>
          <span>At this adress and on Just Eat!</span>
          <span>Edinburgh, EH?  ???</span>
        </div>
        <div className="hours">
          <h3>HOURS</h3>
          <span>Weekdays / 5pm-11pm</span>
          <span>Weekends / 5pm-12am</span>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <span>Alex</span>
          <span>@facebook</span>
          <span>@Insta</span>
          <span><a href="mailto:alex@strada.com">alex@strada.com</a></span>
          <span>To order, call <a href="tel:07899347855">07 899 347 855</a></span>
        </div>
      </section>
      <p>
        <a href="https://github.com/djghis" target="_blank" rel="noopener noreferrer">Built by Gg</a>
      </p>
    </footer>
  )
}

export default Footer;