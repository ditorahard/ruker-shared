//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const path = require("path");
const packageJson = require("../../package.json");
const modulesToTranspile = [
  ...Object.keys(packageJson.dependencies).filter((dep) =>
    dep.startsWith("react-native"),
  ),
];

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config, options) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]

    const getPackageRootDirectory = (m) =>
      path.resolve(path.join(__dirname, "node_modules", m));
    const modulesPaths = modulesToTranspile.map(getPackageRootDirectory);

    const hasInclude = (context, request) => {
      return modulesPaths.some((mod) => {
        // If we the code requires/import an absolute path
        if (!request.startsWith(".")) {
          try {
            const moduleDirectory = getPackageRootDirectory(request);
            if (!moduleDirectory) return false;
            return moduleDirectory.includes(mod);
          } catch (err) {
            return false;
          }
        }
        // Otherwise, for relative imports
        return path.resolve(context, request).includes(mod);
      });
    };
    config.externals = config.externals.map((external) => {
      if (typeof external !== "function") return external;
      // if (isWebpack5) {
      //   return async ({ context, request, getResolve }) => {
      //     if (hasInclude(context, request)) return;
      //     return external({ context, request, getResolve });
      //   };
      // }
      return (context, request, cb) => {
        return hasInclude(context, request)
          ? cb()
          : external(context, request, cb);
      };
    });

    config.module.rules.push({
      test: /\.js$/,
      use: options.defaultLoaders.babel,
      include: modulesPaths,
    });
    return config;
  },
};

module.exports = withNx(nextConfig);
