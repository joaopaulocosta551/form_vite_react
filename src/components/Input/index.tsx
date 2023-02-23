import { InputCustom } from "./styles";

interface IProps {
    type: string;
    placeholder: string;
}


export  function Input({ type,  placeholder}: IProps){
    return (

        <InputCustom type={type} placeholder={placeholder}/>
    )
};

