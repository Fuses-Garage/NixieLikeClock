import { useEffect, useState } from "react";
import "./Nixie.css";
interface Props {
  text: string;
}
export default function Nixie(props: Props) {
  const [char, SetChar] = useState<string>(props.text);
  useEffect(() => {
    SetChar(props.text);
  }, [props.text]);
  return (
    <div className="Nixie">
      <div className="Cap Up" />
      <div className="Glass">
        <span className="Text">{char}</span>
      </div>
      <div className="Cap Down" />
    </div>
  );
}
