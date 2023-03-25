import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { buildCssLoaders } from '../build/loaders/buildCssLoader'
import { IBuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    config.module?.rules?.push(buildCssLoaders(true))

    if (config.module?.rules) {
        //@ts-ignore
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i }
            }

            return rule
        })

        config.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    }
}
