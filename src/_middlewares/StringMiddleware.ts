export abstract class StringMiddleWare{
    static NameUpperFirst(text: string): string{
        const words = text.split(' ');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        return capitalizedWords.join(' ');
    }
}