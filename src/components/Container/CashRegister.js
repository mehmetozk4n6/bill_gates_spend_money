import { useSelector } from "react-redux";
import { selectValue } from "../../redux/moneySlice";

import CountUp from "react-countup";

function CashRegister() {
  const diffMoney = useSelector((state) => state.money.diffMoney);
  const value = useSelector(selectValue);

  let nonsense = value + diffMoney;

  if (value < 0) {
    alert("Bill's in debt.");
  }
  return (
    <div className="money-bar">
      <h1>$ </h1>
      <h1>
        <CountUp
          start={nonsense}
          end={value}
          delay={0}
          decimal="."
          separator=","
        >
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </h1>
    </div>
  );
}

export default CashRegister;
