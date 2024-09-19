import { MgwStorage } from "../src";

test('update item local correctly', () => {
  const stype = 'L';
  const sname = 'StoTest';
  const updItemValue = 'Test !';
  const sto = new MgwStorage(stype, sname, true);
  sto.updateItem(updItemValue);
  const result = localStorage.getItem(sname);
  expect(result).toBe(updItemValue);
});
