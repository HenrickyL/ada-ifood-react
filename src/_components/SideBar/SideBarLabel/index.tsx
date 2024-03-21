import { SideBarLabelSty } from "./style"

interface SideBarLabelProps{
    text:string
}

export const SideBarLabel = (props: SideBarLabelProps)=>{
    return (
        <SideBarLabelSty >
            {props.text}
        </SideBarLabelSty>
    )
}