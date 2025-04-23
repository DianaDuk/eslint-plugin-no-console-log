import { TSESTree } from '@typescript-eslint/utils';
import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(name => `https://example.com/rule/${name}`);

export const noConsoleLogRule = createRule({
  name: 'no-console-log',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow usage of console.log',
    },
    messages: {
      disallowed: 'Usage of console.log is disallowed.',
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      CallExpression(node: TSESTree.CallExpression) {
        const callee = node.callee;

        if (
          callee.type === 'MemberExpression' &&
          callee.object.type === 'Identifier' &&
          callee.object.name === 'console' &&
          callee.property.type === 'Identifier' &&
          callee.property.name === 'log'
        ) {
          context.report({
            node,
            messageId: 'disallowed',
          });
        }
      },
    };
  },
});
