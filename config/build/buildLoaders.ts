import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config';

export function buildLoaders({isDev}: IBuildOptions): webpack.RuleSetRule[] {
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
        typeScriptLoader, cssLoader
      ]
}