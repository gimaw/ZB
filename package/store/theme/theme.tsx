export class ThemeController {
    static getTheme(){
        const theme = localStorage.getItem('COLOR');
        return theme
    }

    static change(color){
        localStorage.setItem('COLOR',color)
    }
}