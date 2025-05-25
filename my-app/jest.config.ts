// jest.config.ts – Angular 19 + Jest 30+
import type { Config } from 'jest';

const config: Config = {
  // 1) Preset específico para Angular
  preset: 'jest-preset-angular',

  // 2) Ambiente de testes (JSDOM) já configurado pelo preset
  testEnvironment: 'jest-environment-jsdom',

  // 3) Arquivo que inicializa Zone.js e configuração extra
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  // 4) Transpila apenas arquivos TypeScript
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    ],
  },

  // 5) Ignora transformações pesadas em node_modules
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!(@angular|rxjs|tslib)/)'
  ],

  // 6) Define caminhos de alias iguais aos do tsconfig
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.ts',
  },

  // 7) Geração de cobertura
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html', 'text-summary'],

  // 8) Melhora a DX com watch mode
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],

  // 9) Mantém a ordem de execução previsível
  resetMocks: true,
  clearMocks: true,
};

export default config;
