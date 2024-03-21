import { IconType } from 'react-icons';
import { Icon } from '../../Icon';
import { useTheme } from '../../../_hooks/theme';

interface InputIconProps{
    icon?: IconType
    size?: number
}

export const InputIcon = ({icon, size }: InputIconProps)=>{
    const {theme} = useTheme()
    return (
        <Icon icon={icon} size={size || theme.settings.iconSize}/>
    )
}