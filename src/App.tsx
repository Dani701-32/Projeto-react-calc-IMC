import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import leftArrowIMG from "./assets/leftarrow.png";
import { levels, calculateIMC, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>();

  const handleCalculation = () => {
    if (height !== 0 && weight !== 0 && height && weight) {
      setToShow(calculateIMC(height, weight));
    } else {
      alert("Preencha todos os campos");
    }
  };

  const setHandleBackButton = () => {
    setToShow(null);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea,parâmero adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex 1.5(em metros)"
            value={height > 0 ? height : ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex 60.3 (em quilos)"
            value={weight > 0 ? weight : ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculation} disabled={toShow ? true : false}>
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div onClick={setHandleBackButton} className={styles.rightArrow}>
                <img src={leftArrowIMG} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
