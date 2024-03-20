import Aloys from "../assets/Aloys.jpg"

export default function About() {
  return (
    <section id="AboutMe">
  <div className="w3-center">
    <h2>About Me</h2>
    <a href="https://www.linkedin.com/in/aloys-manga-3bb33747/">
      <img src={Aloys} width="100px" height="100px" />
    </a>
  </div>
  <div className="w3-center">
  </div>
  <div className="w3-center">
    <p id="aboutme-p">Hardware and software device engineer with extensive hands-on experience in supporting clients and enterprise-level networking environments of computers. Multitasker, innovative, self-motivated, and highly skilled to create and deliver solutions that meet business and technological corporate objectives. Excellent communication skills and works well both independently and within a team environment. Seeking to use prior hands-on experience to grow into an architect role within an organization’s enterprise architecture group.</p>
  </div>
</section>
  );
}
