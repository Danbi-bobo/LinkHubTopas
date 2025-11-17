export const getTagColor = (tag) => {
  switch (tag) {
    case '#design':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case '#q4-report':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case '#onboarding':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  }
};
