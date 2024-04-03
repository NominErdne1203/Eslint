import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: ['http://localhost:3000/api/graphql'],
  documents: ['./graphql/documents/**/*.graphql'],
  generates: {
    './graphql/generated/index.ts': {
      overwrite: true,
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;

// , 'http://localhost:3001/api/graphql'