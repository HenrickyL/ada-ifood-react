import { INotification } from "../../_interfaces/notification";
import { useNotificationStore } from "../../_stores/notification";
import { Notification } from "../Notification";
import { NotificationContainerSty } from "./style"
import { 
    IoIosCheckmark as CheckIcon,
    IoIosClose  as CloseIcon
} from "react-icons/io";

export const NotificationContainer = ()=>{
    const { queue, removeNotification } = useNotificationStore();
    function handleCheck(notification: INotification):void{
        if(notification.actions?.check){
            notification.actions.check()
        }
        handleClose(notification)
    }
    function handleClose(notification: INotification):void{
        removeNotification(notification.id)
    }
    return(
        <NotificationContainerSty>
            {
                queue.map(notification=>
                    <Notification.Root key={notification.id} type={notification.type || 'report'}>
                        {notification.icon ? 
                            <Notification.Icon icon={notification.icon}/>
                        : <></>}
                        <Notification.Content text={notification.message} />
                        {notification.actions ?
                            <Notification.Actions>
                                {notification.actions.check &&
                                    <Notification.Action icon={CheckIcon} type="primary" onClick={()=>handleCheck(notification)}/>}
                                {notification.actions.close &&
                                    <Notification.Action icon={CloseIcon} type="secondary" onClick={()=>handleClose(notification)}/>}
                            </Notification.Actions>
                        : <></>}
                        
                    </Notification.Root>
                )
            }
        </NotificationContainerSty>
    )
}