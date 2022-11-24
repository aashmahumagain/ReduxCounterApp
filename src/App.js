import "./App.css";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { incNumer, decrNumber } from "./action";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h2>Increment Decrement using react redux</h2>
        <MainDiv>
          <button onClick={() => dispatch(incNumer(5))} className="incr-dcr">
            +
          </button>
          <div>
            <span className="state-class">{myState}</span>
          </div>
          <button onClick={() => dispatch(decrNumber(10))} className="incr-dcr">
            -
          </button>
        </MainDiv>
      </div>
    </div>
  );
}

export default App;
const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  .incr-dcr {
    width: 100px;
    height: 50px;
    margin: 10px;
    font-size: 30px;
  }
  .state-class {
    font-size: 30px;
    width: 100px;
    height: 50px;
    text-align: center;
    margin: 10px;
  }
`;
