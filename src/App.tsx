import { css } from "../styled-system/css";
import { float } from "../styled-system/patterns";

function App() {
  return (
    <div className={css({ position: "relative" })}>
      <div className={float({ placement: "top-end" })}>3</div>
    </div>
  );
}

export default App;
