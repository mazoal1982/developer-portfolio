
export default function Nav() {
  function showAbout(){
    document.querySelector("#AboutMe").style="display: block"
    document.querySelector("#MyWork").style="display: none"
    document.querySelector("#Contact").style="display: none"
  }
  function showMyWork(){
    document.querySelector("#AboutMe").style="display: none"
    document.querySelector("#MyWork").style="display: block"
    document.querySelector("#Contact").style="display: none"
  }
  function showContact(){
    document.querySelector("#AboutMe").style="display: none"
    document.querySelector("#MyWork").style="display: none"
    document.querySelector("#Contact").style="display: block"
  }
  return (
    <nav>

    <ul class="navigation">
      <li><p onClick={showAbout} href="#AboutMe">About</p></li>
      <li><p  onClick={showMyWork}href="#MyWork">Projects</p></li>
      <li><p href="#Resume">Resume</p></li>
      <li><p  onClick={showContact}href="#Contact">Contact Me</p></li>
    </ul>

  </nav>
  );
}
