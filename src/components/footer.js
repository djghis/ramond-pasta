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
          <span>@yourSocialName</span>
        </div>
      </section>
      <p>Built by
        <a href="https://github.com/djghis" target="_blank" rel="noopener noreferrer">Gg</a>
      </p>
    </footer>
  )
}

export default Footer;