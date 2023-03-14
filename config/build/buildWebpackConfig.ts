import { IBuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildDevServer } from "./buildDevServer";
import webpack from 'webpack'

export function buildWebpackConfig (options: IBuildOptions): webpack.Configuration {
    const {mode, paths, isDev} = options
    const {build, entry, html} = paths
    return {
    mode,
      entry,
    
      module: {
        rules: buildLoaders(options),
      },
    
      resolve: buildResolve(),
    
      output: {
        filename: '[name].[contenthash].js',
        path: build,
        clean: true
      },
    
      plugins: buildPlugins(html),
      devtool: isDev ? "inline-source-map" : undefined,
      devServer: isDev ? buildDevServer(options) : undefined
    }
}