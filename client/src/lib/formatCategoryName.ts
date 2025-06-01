export function formatCategoryName(name: string): string {
  return name
    .replace(/_/g, ' ')
    .split(' ')
    .map((word) =>
      word
        .split('-')
        .map(
          (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
        )
        .join('-')
    )
    .join(' ')
}
