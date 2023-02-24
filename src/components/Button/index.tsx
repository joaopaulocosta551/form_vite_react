import { ButttonLogin } from "./styles";

interface Iprops{
    value: string;
}

export function Button({value}: Iprops) {
    return <ButttonLogin>{value}</ButttonLogin>
}