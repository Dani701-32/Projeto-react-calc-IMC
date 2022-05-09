import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import { levels, calculateIMC } from "./helpers/imc";
import { GridItem } from "./components/GridItem";

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleCalculation = () => {
    if (height !== 0 && weight !== 0 && height && weight) {
    } else {
      alert("Preencha todos os campos");
    }
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
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex 60.3 (em quilos)"
            value={weight > 0 ? weight : ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculation}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
