export default class AppBarMenuItem {
    constructor(
        public view: any,
        public label: string,
        public onClick: () => void,
        public position: 'left' | 'right' | 'hidden',
    ) {}
};