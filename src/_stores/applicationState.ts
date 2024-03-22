import { create } from 'zustand';

interface ApplicationStateStoreProps{
    isLoading: boolean,
    setLoading: (value: boolean)=>void
}


export const useAppStateStore = create<ApplicationStateStoreProps>( (set)=>({
    isLoading: false,
    setLoading: (value: boolean) =>{
        set(() => ({
            isLoading: value,
        }))
    },
}))