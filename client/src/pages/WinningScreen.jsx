import { Link } from "react-router-dom";
import "./LosingScreen";
import "./WinningScreen.scss";
import { useName } from "../contexts/NameContext";

function WinningScreen() {
  const { name } = useName();
  return (
    <div className="victory-container">
      <div className="victory-content">
        <h1>Congratulations {name} you finished your quest!</h1>
        <p>Here is your reward:</p>
        <p>The password below will unlock a new game mod.</p>
        <p>Enter the code below in the main screen :</p>
        <h2>Maxicommit</h2>
      </div>
      <Link to="/" className="menu-button">
        Menu
      </Link>
    </div>
  );
}

export default WinningScreen;
