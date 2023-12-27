export enum ButtonSize {
  small = 'py-1 px-3 text-sm',
  medium = 'py-2 px-4 text-lg',
  large = 'py-3 px-5 text-xl',
}

export enum ButtonColor {
  white = 'bg-white text-black border border-black hover:bg-zinc-800 hover:text-white',
  blue = 'bg-white text-black border border-black hover:border-steel-blue hover:bg-steel-blue hover:text-white',
  transparent = 'border border-white bg-transparent text-white hover:bg-white hover:text-black hover:border-white',
}

export enum ButtonShape {
  square = 'rounded-none',
  ellipse = 'rounded-[30px]',
}
