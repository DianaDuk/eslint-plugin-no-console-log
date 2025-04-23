import { TSESLint } from '@typescript-eslint/utils';
import { noConsoleLogRule } from './no-console-log';

const ruleTester = new TSESLint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run('no-console-log', noConsoleLogRule, {
  valid: [
    'console.error("Error")',
    'console.warn("Warning")',
    'myLogger.log("Message")',
    'window.console.info("Info")',
  ],
  invalid: [
    {
      code: 'console.log("Debug")',
      errors: [{ messageId: 'disallowed' }],
    },
    {
      code: 'console.log(variable)',
      errors: [{ messageId: 'disallowed' }],
    },
  ],
});
