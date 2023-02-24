import { DivInputCUstom, InputCustom } from "./styles";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";

interface IProps {
    type: string;
    placeholder: string;
    hasEye?: boolean;
}

export function Input({ type,  placeholder, hasEye = false }: IProps) {
    const [eyeOpen, setEyeOpen] = useState<boolean>(false);

    const toggleEye = () => {
        setEyeOpen(prevEyeOpen => !prevEyeOpen);
    }

    return (
        <DivInputCUstom>
            <InputCustom type={eyeOpen ? 'text' : type} placeholder={placeholder} required />

            <div style={{ position: "relative" }}>
                {hasEye && (eyeOpen ? (<FaEye style={{cursor: "pointer", position: "absolute", marginRight: "10px", top: "50%", right: "10%", transform: "translateY(-50%)"}} onClick={toggleEye}/>) : (<FaEyeSlash style={{cursor: "pointer", position: "absolute", top: "50%", marginRight: "10px", right: "10%", transform: "translateY(-50%)"}} onClick={toggleEye} />))}
            </div>
        </DivInputCUstom>
    )
};


// import { DivInputCUstom, InputCustom } from "./styles";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useState } from "react";

// interface IProps {
//     type: string;
//     placeholder: string;
//     hasEye?: boolean;
// }

// export function Input({ type,  placeholder, hasEye = false }: IProps) {
//     const [eyeOpen, setEyeOpen] = useState<boolean>(false);

//     const toggleEye = () => {
//         setEyeOpen(prevEyeOpen => !prevEyeOpen);
//     }

//     return (
//         <DivInputCUstom>
//             <InputCustom type={eyeOpen ? 'text' : type} placeholder={placeholder} required />

//             {
//                 hasEye && (eyeOpen ? (<FaEye style={{cursor: "pointer"}}onClick={toggleEye}/> ) 

//                 : ( <FaEyeSlash style={{cursor: "pointer"}} onClick={toggleEye}/>))
//             }


//         </DivInputCUstom>
//     )
// };



// import { DivInputCUstom, InputCustom } from "./styles";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useState, useEffect } from "react";


// interface IProps {
//     type: string;
//     placeholder: string;
//     hasEye?: boolean;

// }


// export function Input({ type,  placeholder, hasEye = false}: IProps){

//     const [eyeOpen, setEyeOpen] = useState<boolean>(false);

//     const toggleEye = () => {
//         setEyeOpen(prevEyeOpen => !prevEyeOpen);
//     }
    

//     return (
//         <DivInputCUstom>
//             <InputCustom type={eyeOpen ? 'text' : type} placeholder={placeholder} required/>
//             {
//                 (hasEye && eyeOpen) && <FaEye style={{cursor: "pointer" }} onClick={() => setEyeOpen(false)} />
//             }

//             {
//                 (hasEye && !eyeOpen) && <FaEyeSlash style={{cursor: "pointer" }} onClick={() => setEyeOpen(true)} />
//             }
            
            
//         </DivInputCUstom>
//     )
// };

