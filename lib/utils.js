// utils
function flatten(obj) {
  const result = Array.isArray(obj) ? obj.slice() : typeof obj === 'object' ? Object.create(obj) : obj;
  for(let key in result) {
    result[key] = typeof result[key] === 'object' ? flatten(result[key]) : result[key];
  }
  return result;
}

function $(obj) {
  return JSON.stringify(flatten(obj));
}

export function log(obj) {
  console.log($(obj));
}
