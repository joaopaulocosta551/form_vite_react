import { DivInputCUstom, InputCustom, TitleCaps } from "./styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

interface IProps {
  type: string;
  placeholder: string;
  hasEye?: boolean;
  capslockDetect?: boolean;
}

export function Input({
  type,
  placeholder,
  hasEye = false,
  capslockDetect = false,
}: IProps) {
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const [capsOn, setCapsOn] = useState<boolean>(false);

  const toggleEye = () => {
    setEyeOpen((prevEyeOpen) => !prevEyeOpen);
  };

  return (
    <>
      <DivInputCUstom>
        <InputCustom
          type={eyeOpen ? "text" : type}
          placeholder={placeholder}
          onKeyDown={(event: any) => {
            setCapsOn(event.getModifierState("CapsLock"));
          }}
          required
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          {hasEye &&
            (eyeOpen ? (
              <FaEye onClick={toggleEye} />
            ) : (
              <FaEyeSlash onClick={toggleEye} />
            ))}
        </div>
      </DivInputCUstom>

      {capslockDetect && (
        <div style={{height: 10}}>
          {capsOn && <TitleCaps>Capslock ativo!</TitleCaps>}
        </div>
      )}
    </>
  );
}
