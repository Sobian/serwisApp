const ticketsOperations = require('./ticketsOperation');

test('Plik CSV został pomyślnie utworzony.', () => {
    expect(ticketsOperations.JsonToCSV('1')).toBe(1);
  });

  