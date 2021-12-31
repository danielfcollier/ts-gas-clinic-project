import { sheetID } from '../../config/index';
import Sheet from '../library/Sheet';

export function getSearchDataAPI() {
  return Sheet.getData({ id: sheetID, name: 'Database' });
}
