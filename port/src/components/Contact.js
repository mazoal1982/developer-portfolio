export default function Contact() {
  

  return (
<section id="Contact" className="w3-center">
<div>
  <h3 className="w3-center">Contact</h3>
  <div className="w3-row w3-padding-32 w3-section w3-center">
    <div className="w3-center">
      <div className="w3-center w3-large w3-margin-bottom">
        <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge" /> Colorado, US<br />
        <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge" /> Phone: +00 151515<br />
        <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge" /> Email: mail@mail.com<br />
      </div>
      <p>Swing by for a cup of <i className="fa fa-coffee" />, or leave me a note:</p>
      <form style={{width: '80%', margin: 'auto'}} action="/action_page.php" target="_blank">
        <div className="w3-row-padding" style={{margin: '0 -16px 8px -16px'}}>
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
          </div>
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
          </div>
        </div>
        <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
        <button className="w3-button w3-black w3-right w3-section" type="submit">
          <i className="fa fa-paper-plane" /> SEND MESSAGE
        </button>
      </form>
    </div>
  </div>
</div>

</section>

  );
}
