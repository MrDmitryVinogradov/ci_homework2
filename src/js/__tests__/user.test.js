import sorting from '../app';

test('should sort1', () => {
  const result = sorting([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);
  const equivalent = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).not.toBe(equivalent);
});

test('should sort2', () => {
  const result = sorting([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
  ]);
  const equivalent = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(equivalent);
});
