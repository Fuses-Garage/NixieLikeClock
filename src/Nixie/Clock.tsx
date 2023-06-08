import "./Nixie.css";
import { useState, useEffect, useCallback } from "react";
import Nixie from "./Nixie";

export default function Clock() {
  const [date, setDate] = useState<Date>(new Date());
  const [, updateState] = useState<{}>();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      console.log(date.toTimeString());
      forceUpdate();
    }, 100);

    return () => clearInterval(interval);
  }, [date]);
  return (
    <div>
      <Nixie text={Math.floor(date.getHours() / 10).toString()} />
      <Nixie text={(date.getHours() % 10).toString()} />
      <Nixie text={":"} />
      <Nixie text={Math.floor(date.getMinutes() / 10).toString()} />
      <Nixie text={(date.getMinutes() % 10).toString()} />
      <Nixie text={":"} />
      <Nixie text={Math.floor(date.getSeconds() / 10).toString()} />
      <Nixie text={(date.getSeconds() % 10).toString()} />
      <Nixie text={"."} />
      <Nixie text={Math.floor(date.getMilliseconds() / 100).toString()} />
    </div>
  );
}
