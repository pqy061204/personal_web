/**
 * 读取json
 */
async function loadData(URL0:URL) {
  try {
    const response = await fetch(URL0);
    const data = await response.json();
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}
export {loadData}