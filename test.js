// testStoreData.js
const storeData = require('./src/services/storeData'); // Adjust the path to where storeData is located

async function testStoreData() {
  const id = 'test-doc-id';
  const data = {
    result: 'Cancer',
    createdAt: new Date().toISOString(),
    suggestion: 'Segera periksa ke dokter!',
    id: '13e907b3-4213-42ad-b12b-b9b7e12eb90e'
  };

  try {
    await storeData(id, data);
    console.log('Data successfully stored');
  } catch (error) {
    console.error('Error storing data:', error);
  }
}

testStoreData();
