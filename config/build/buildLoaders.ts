import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoader'

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = buildCssLoaders(isDev)

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                        'react-refresh/babel',
                    ],
                ],
            },
        },
    }

    return [babelLoader, typeScriptLoader, cssLoader, svgLoader, fileLoader]
}
