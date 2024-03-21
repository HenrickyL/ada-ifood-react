import { create } from 'zustand';
import { INotification } from '../_interfaces/notification';

interface NotificationStoreProps{
    queue: INotification[]
    addNotification: (notification: INotification)=>void,
    removeNotification: (id: string)=>void
}

const timer: number = 5000 

export const useNotificationStore = create<NotificationStoreProps>( (set)=>({
    queue: [],
    addNotification: (notification: INotification) =>{
        
        set((state) => ({
            queue: [...state.queue, notification],
        }))
        if(!notification.isNotDismiss){
            setTimeout(() => {
                set((state) => ({
                    queue: state.queue.filter((n) => n.id !== notification.id),
                }));
            }, timer);
        }
    },
    removeNotification: (id: string) =>{
        set((state) => ({
            queue: state.queue.filter(notification => notification.id !== id ),
            }))
    },
}))