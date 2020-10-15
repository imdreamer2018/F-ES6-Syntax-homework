const inject = (items, sections) => {
  sections.reverse().map(item => {
    items.splice(item.index, 0, item.content)
  });
  return items;
};
export { inject };
