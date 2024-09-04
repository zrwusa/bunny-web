declare module "*module.css" {
    const styles: {
        [className: string]: string;
    };
    export default styles;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}