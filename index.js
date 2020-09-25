module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {sourceType: 'module'},
  rules: {
    //--- Possible Errors
    'for-direction': 1,
    'getter-return': [2, {allowImplicit: true}],
    'no-async-promise-executor': 2,
    'no-await-in-loop': 0,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-constant-condition': [1, {checkLoops: false}],
    'no-control-regex': 1,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': [1, {allowEmptyCatch: true}],
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    '@typescript-eslint/no-extra-parens': [1, 'all', {
      conditionalAssign: false,
      returnAssign: false,
      enforceForArrowConditionals: false,
      enforceForNewInMemberExpressions: false,
      enforceForFunctionPrototypeMethods: false
    }],
    '@typescript-eslint/no-extra-semi': 2,
    'no-func-assign': 2,
    'no-import-assign': 2,
    'no-inner-declarations': [2, 'both'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    '@typescript-eslint/no-loss-of-precision': 1,
    'no-misleading-character-class': 2,
    'no-obj-calls': 2,
    'no-promise-executor-return': 0,
    'no-prototype-builtins': 0,
    'no-regex-spaces': 1,
    'no-setter-return': 2,
    'no-sparse-arrays': 1,
    'no-template-curly-in-string': 0,
    'no-unexpected-multiline': 2,
    'no-unreachable': 1,
    'no-unreachable-loop': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': [2, {enforceForOrderingRelations: true}],
    'no-useless-backreference': 1,
    'require-atomic-updates': 0,
    'use-isnan': 2,
    'valid-typeof': 2,

    //--- Best Practices
    'accessor-pairs': 0,
    'array-callback-return': 2,
    'block-scoped-var': 0, // doesn't matter
    'class-methods-use-this': 2,
    'complexity': 2,
    'consistent-return': 0,
    'curly': [2, 'multi'],
    'default-case': 0,
    'default-case-last': 2,
    '@typescript-eslint/default-param-last': 2,
    'dot-location': [2, 'property'],
    '@typescript-eslint/dot-notation': 2,
    'eqeqeq': [2, 'smart'],
    'grouped-accessor-pairs': 2,
    'guard-for-in': 0,
    'max-classes-per-file': 0,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-constructor-return': 2,
    'no-div-regex': 1,
    'no-else-return': 1,
    '@typescript-eslint/no-empty-function': 1,
    'no-empty-pattern': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 0,
    'no-global-assign': 2,
    'no-implicit-coercion': 0,
    'no-implicit-globals': 0,
    'no-implied-eval': 2,
    '@typescript-eslint/no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 0,
    'no-lone-blocks': 0,
    '@typescript-eslint/no-loop-func': 0,
    '@typescript-eslint/no-magic-numbers': 0,
    'no-multi-spaces': 1,
    'no-multi-str': 2,
    'no-new': 0,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    '@typescript-eslint/no-redeclare': 2,
    'no-restricted-properties': 0,
    'no-return-assign': 2,
    '@typescript-eslint/return-await': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 0,
    '@typescript-eslint/no-unused-expressions': 1,
    'no-unused-labels': 1,
    'no-useless-call': 2,
    'no-useless-catch': 1,
    'no-useless-concat': 1,
    'no-useless-escape': 1,
    'no-useless-return': 1,
    'no-void': 1,
    'no-warning-comments': 0,
    'no-with': 2,
    'prefer-named-capture-group': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-regex-literals': 1,
    'radix': 0,
    '@typescript-eslint/require-await': 2,
    'require-unicode-regexp': 1,
    'vars-on-top': 0, // doesn't matter
    'wrap-iife': [2, 'inside'],
    'yoda': 2,
    'strict': 0,

    //--- Variables
    '@typescript-eslint/init-declarations': 0,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    '@typescript-eslint/no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 0,
    'no-undefined': 0,
    '@typescript-eslint/no-unused-vars': [1, {ignoreRestSiblings: true, varsIgnorePattern: '^_'}],
    '@typescript-eslint/no-use-before-define': 2,

    //--- Stylistic Issues
    'array-bracket-newline': [1, {multiline: true}],
    'array-bracket-spacing': [1, 'never'],
    'array-element-newline': 0,
    'block-spacing': 1,
    '@typescript-eslint/brace-style': 1,
    'camelcase': 1,
    'capitalized-comments': 0,
    '@typescript-eslint/comma-dangle': [1, 'always-multiline'],
    '@typescript-eslint/comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 1,
    'consistent-this': 0,
    'eol-last': 1,
    '@typescript-eslint/func-call-spacing': 1,
    'func-name-matching': 0,
    'func-names': 0,
    'func-style': 0,
    'function-call-argument-newline': 0,
    'function-paren-newline': 0,
    'id-denylist': 0,
    'id-length': 0,
    'id-match': 0,
    'implicit-arrow-linebreak': 0,
    '@typescript-eslint/indent': [1, 2],
    'jsx-quotes': 0,
    'key-spacing': 1,
    '@typescript-eslint/keyword-spacing': 1,
    'line-comment-position': 0,
    'linebreak-style': 2,
    'lines-around-comment': 0,
    '@typescript-eslint/lines-between-class-members': 1,
    'max-depth': 0,
    'max-len': [1, {
      code: 110,
      ignoreTemplateLiterals: true,
      ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      'ignoreUrls': true
    }],
    'max-lines': 0,
    'max-lines-per-function': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'max-statements-per-line': [1, {max: 2}],
    'multiline-comment-style': 0,
    'multiline-ternary': 0,
    'new-cap': 0,
    'new-parens': 2,
    'newline-per-chained-call': 1,
    '@typescript-eslint/no-array-constructor': 2,
    'no-bitwise': [0, {allow: ['~', '^']}],
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 1,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 0,
    'no-multiple-empty-lines': 1,
    'no-negated-condition': 0,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-tabs': 2,
    'no-ternary': 0,
    'no-trailing-spaces': [1, {ignoreComments: true, skipBlankLines: true}],
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'no-whitespace-before-property': 1,
    'nonblock-statement-body-position': 0,
    'object-curly-newline': [1, {multiline: true}],
    'object-curly-spacing': 1,
    'object-property-newline': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'operator-assignment': 1,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'padding-line-between-statements': 0,
    'prefer-exponentiation-operator': 2,
    'prefer-object-spread': 1,
    'quote-props': [1, 'as-needed', {keywords: true, unnecessary: false }],
    '@typescript-eslint/quotes': [1, 'single'],
    '@typescript-eslint/semi': 1,
    'semi-spacing': 1,
    'semi-style': 1,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': 1,
    '@typescript-eslint/space-before-function-paren': [1, {
      asyncArrow: 'always'
    }],
    'space-in-parens': 1,
    'space-infix-ops': 1,
    'space-unary-ops': 1,
    'spaced-comment': [1, 'always', {
      markers: ['#region', '#endregion']
    }],
    'switch-colon-spacing': 1,
    'template-tag-spacing': 1,
    'unicode-bom': 0,
    'wrap-regex': 0,

    //--- ES6
    'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'constructor-super': 1,
    'generator-star-spacing': 1,
    'no-class-assign': 2,
    'no-confusing-arrow': 0,
    'no-const-assign': 2,
    '@typescript-eslint/no-dupe-class-members': 2,
    'no-duplicate-imports': 1,
    'no-new-symbol': 2,
    'no-restricted-exports': 0,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 1,
    '@typescript-eslint/no-useless-constructor': 1,
    'no-useless-rename': 1,
    'no-var': 2,
    'object-shorthand': 1,
    'prefer-arrow-callback': 2,
    'prefer-const': 1,
    'prefer-destructuring': 0,
    'prefer-numeric-literals': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 0,
    'require-yield': 2,
    'rest-spread-spacing': 1,
    'sort-imports': 0,
    'symbol-description': 0,
    'template-curly-spacing': 1,
    'yield-star-spacing': 1,

    //--- TS
    ...(Object.fromEntries(Object.entries({
      'adjacent-overload-signatures': 1,
      'array-type': 2,
      'await-thenable': 2,
      'ban-ts-comment': 2,
      'ban-tslint-comment': 2,
      'ban-types': 2,
      'class-literal-property-style': 0,
      'consistent-type-assertions': [2, {assertionStyle: 'as'}],
      'consistent-type-definitions': 0,
      'consistent-type-imports': 0,
      'explicit-function-return-type': 0,
      'explicit-function-return-type': 0,
      'explicit-module-boundary-types': 0,
      'member-delimiter-style': [1, {
        multiline: {
          delimiter: 'comma',
          requireLast: true
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }],
      'member-ordering': 0,
      'method-signature-style': 0,
      'naming-convention': 0,
      'no-base-to-string': 0,
      'no-confusing-non-null-assertion': 2,
      'no-dynamic-delete': 1,
      'no-empty-interface': 1,
      'no-explicit-any': [2, {ignoreRestArgs: false, fixToUnknown: true}],
      'no-extra-non-null-assertion': 2,
      'no-extraneous-class': 1,
      'no-floating-promises': 0,
      'no-for-in-array': 2,
      'no-implicit-any-catch': 0,
      'no-implied-eval': 2,
      'no-inferrable-types': 1,
      'no-invalid-void-type': 2,
      'no-misused-new': 2,
      'no-misused-promises': [2, {checksVoidReturn: false}],
      'no-namespace': 0,
      'no-non-null-asserted-optional-chain': 2,
      'no-non-null-assertion': 0,
      'no-parameter-properties': 0,
      'no-require-imports': 0,
      'no-this-alias': 1,
      'no-throw-literal': 1,
      'no-type-alias': 0,
      'no-unnecessary-boolean-literal-compare': 2,
      'no-unnecessary-condition': 0,
      'no-unnecessary-qualifier': 0,
      'no-unnecessary-type-arguments': 1,
      'no-unnecessary-type-assertion': 2,
      'no-unsafe-assignment': 0,
      'no-unsafe-call': 0,
      'no-unsafe-member-access': 0,
      'no-unsafe-return': 0,
      'no-var-requires': 2,
      'prefer-as-const': 2,
      'prefer-enum-initializers': 0,
      'prefer-for-of': 2,
      'prefer-function-type': 1,
      'prefer-includes': 2,
      'prefer-literal-enum-member': 0,
      'prefer-namespace-keyword': 0,
      'prefer-nullish-coalescing': 0,
      'prefer-optional-chain': 1,
      'prefer-readonly': 0,
      'prefer-readonly-parameter-types': 0,
      'prefer-reduce-type-parameter': 1,
      'prefer-regexp-exec': 0,
      'prefer-string-starts-ends-with': 2,
      'prefer-ts-expect-error': 0,
      'promise-function-async': 0,
      'require-array-sort-compare': 2,
      'restrict-plus-operands': 0,
      'restrict-template-expressions': 2,
      'strict-boolean-expressions': 0,
      'switch-exhaustiveness-check': 2,
      'triple-slash-reference': 0,
      'type-annotation-spacing': 1,
      'typedef': 0,
      'unbound-method': 0,
      'unified-signatures': 1
    }).map(([k, v]) => ['@typescript-eslint/' + k, v])))
  }
}
