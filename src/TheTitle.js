import './TheTitle.css';
import Wrapper from './componnents/Wrapper.js';
import Screen from './componnents/BeautifulScreen.js';
import ButtonBox from './componnents/ButtonBox.js';
import Button from './componnents/Calculator.js';
import CalcProvider from './context/CalcContext';
import btnValues from './componnents/AmazingNumberButton.js';
import Results from './componnents/Save';
// import MyComponent from './componnents/Save';


function App() {
  return (
    <><div>
      <h1>Calculator9000</h1>
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button
                value={btn}
                key={i} />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </div>
      {/* <MyComponent /> */}
      <Results />
      {/* <doGetRequest /> */}
      {/* <makeRequest /> */}
    </>
  );
}

export default App;
