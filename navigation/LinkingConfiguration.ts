import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Database: {
            screens: {
              DatabaseScreen: 'database'
            }
          },
          FileSystem: {
            screens: {
              FileSystemScreen: 'filesystem'
            }
          },
          NewChargerFormScreen: {
            screens: {
              NewChargerFormScreen: 'newchargerform'
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
