import { Configuration } from '@rspack/cli'

const config: Configuration = {
  entry: {
    main: './src/main.tsx',
  },
  builtins: {
    html: [
      {
        template: './index.html',
      },
    ],
  },
}

export default config
