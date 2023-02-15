const passwordValidateRules = [
  {
    key: 'length',
    description: 'Must be at least 8 characters',
    regExp: /^.{8,}/,
  },
  {
    key: 'lowercase',
    description: 'Must contain lowercase letter',
    regExp: /.*[a-z]/,
  },
  {
    key: 'uppercase',
    description: 'Must contain uppercase letter',
    regExp: /.*[A-Z]/,
  },
  {
    key: 'symbol',
    description: 'Must contain at least 1 special symbol',
    regExp: /.*[!@#$%^&*)(+=.<>{}[\]:;'"|~`_-]/,
  },
  {
    key: 'number',
    description: 'Must contain at least 1 number',
    regExp: /.*[0-9]/,
  },
  {
    key: 'match',
    description: 'Both passwords must match',
  },
];

export const validatePassword = (password: string, passwordConfirmation: string) => {
  return passwordValidateRules.map((rule) => {
    let checked = false;

    if (rule.key === 'match') {
      checked = password === passwordConfirmation;
    } else if (rule.regExp) {
      checked = rule.regExp.test(password);
    }

    return {
      ...rule,
      checked,
    };
  });
};
