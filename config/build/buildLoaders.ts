import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config';

export function buildLoaders({isDev}: IBuildOptions): webpack.RuleSetRule[] {

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

    const typeScriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

      const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                localIdentName: isDev ? '[name]__[local]_[hash:base64:8]' : '[hash:base64:8]'
              }
            }
          },
          "sass-loader",
        ],
      }

    return  [
        typeScriptLoader, cssLoader, svgLoader, fileLoader
      ]
}