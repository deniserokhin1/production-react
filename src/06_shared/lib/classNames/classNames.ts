/* eslint-disable @typescript-eslint/no-unused-vars */
type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key, _]) => key),
    ].join(' ')
}
