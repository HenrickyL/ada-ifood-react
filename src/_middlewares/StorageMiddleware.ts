export const StorageKeys = {
    USER: `${import.meta.env.REACT_APP_NAME}:user`
}

export abstract class StorageMiddleware{
    
    public static getContent<T = object>(key: string): T | null{
        const content = localStorage.getItem(key);

        if (!content) {
            return null;
        }

        const contetJson = JSON.parse(content);
        return contetJson as T;
    }

    public static setContent<T=object>(key: string, content: T):void{
        localStorage.setItem(key, JSON.stringify(content));
    }
    public static removeContent(key: string):void{
        localStorage.removeItem(key);
    }
}