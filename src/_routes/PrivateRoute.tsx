import { Navigate } from "react-router-dom";
import { useAuth } from "../_hooks/auth";
import { useEffect } from "react";
import { useNotificationStore } from "../_stores/notification";
import { FaUserSlash as NoCredentialIcon } from "react-icons/fa";

export const PrivateRoute = ({children}:{children: React.ReactNode})=>{
    const { user } = useAuth();
    const {addNotification } = useNotificationStore()
    useEffect(()=>{
        if(!user)
            addNotification({
                type:"warning",
                icon: NoCredentialIcon,
                message:"You need credentials"
            })
    }, [])
    return user? children : <Navigate to="/login" />
}