export const TEXT_COLOR_VARIANTS = {
    success: 'text-success',
    danger: 'text-danger',
} as const;

export const FILL_COLOR_VARIANTS = {
    success: 'fill-success',
    danger: 'fill-danger',
} as const;

export const COLORS = {
    fill: FILL_COLOR_VARIANTS,
    text: TEXT_COLOR_VARIANTS
}
