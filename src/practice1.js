const parseData = ({ data , column }) => {
  let columns = [];
  column.map(o => {
    columns.push(o.name);
  });
  return data.map(info => {
    let result = info.reduce((result, value, index) => {
      result[columns[index]] = value;
      return result;
    }, {});
    return result;
  })
};
export { parseData };
