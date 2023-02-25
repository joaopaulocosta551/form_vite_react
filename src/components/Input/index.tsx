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
    <DivInputCUstom>
      <InputCustom
        type={eyeOpen ? "text" : type}
        placeholder={placeholder}
        onKeyDown={(event: any) => {
          setCapsOn(event.getModifierState("CapsLock"));
        }}
        required
      />

      <div style={{ position: "relative" }}>
        {hasEye &&
          (eyeOpen ? (
            <FaEye
              style={{
                cursor: "pointer",
                position: "absolute",
                marginRight: "10px",
                top: "50%",
                right: "10%",
                transform: "translateY(-50%)",
              }}
              onClick={toggleEye}
            />
          ) : (
            <FaEyeSlash
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "50%",
                marginRight: "10px",
                right: "10%",
                transform: "translateY(-50%)",
              }}
              onClick={toggleEye}
            />
          ))}
      </div>

      {capslockDetect && capsOn && (
        <div>
          <TitleCaps>Capslock ativo!</TitleCaps>
        </div>
      )}
    </DivInputCUstom>
  );
}
