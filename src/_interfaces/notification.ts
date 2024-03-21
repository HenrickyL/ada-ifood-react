import { IconType } from "react-icons";

export type NotificationTypes = 'success' | 'warning'| 'error'| 'report';

export interface NotificationActions{
    close?: ()=>void
    check?: ()=>void
}

export interface INotification{
    id: string,
    type?: NotificationTypes,
    message: string,
    icon?: IconType,
    actions?: NotificationActions,
    isNotDismiss?: boolean
}