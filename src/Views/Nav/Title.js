import RaccoonLogo from "../../media/rac.svg";

export default function Title() {
  return (
    <div className="title">
      <div>
        <img className="logo" src={RaccoonLogo} alt="Your SVG" />
      </div>
      <h1>RACCOONEST</h1>
    </div>
  );
}
