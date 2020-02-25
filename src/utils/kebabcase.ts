export const kebabCase = (input: string) => {
  let result = input;

  // Convert camelCase capitals to kebab-case.
  result = result.replace(/([a-z][A-Z])/g, function(match) {
    return `${match.substr(0, 1)}-${match.substr(1, 1).toLowerCase()}`;
  });

  // Convert non-camelCase capitals to lowercase.
  result = result.toLowerCase();

  // Convert non-alphanumeric characters to hyphens
  result = result.replace(/[^-a-z0-9]+/g, '-');

  // Remove hyphens from both ends
  result = result.replace(/^-+/, '').replace(/-+$/, '');

  return result;
};
