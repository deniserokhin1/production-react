import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

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

    const babelLoader = buildBabelLoader(isDev)

    return [babelLoader, typeScriptLoader, cssLoader, svgLoader, fileLoader]
}
