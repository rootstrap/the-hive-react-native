module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.android.ts',
          '.android.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.js',
          '.json',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        alias: {
          common: './src/common',
          constants: './src/constants',
          'design-system': './src/design-system',
          features: './src/features',
          hooks: './src/hooks',
          localization: './src/localization',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};
