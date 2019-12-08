import { ItunesMediaSearchService } from '../../src/services/itunes.media-search.service';

describe('iTunes Media Search Service Test', () => {
  const itunesMediaSearchService: ItunesMediaSearchService = new ItunesMediaSearchService();
  it('should test that result count=0 and results=[]', () => {
    itunesMediaSearchService.search({ keywords: null, limit: null, page: null }).then(({ resultCount, results }) => {
      expect(resultCount).toBe(0);
      expect(Array.isArray(results) && results.length === 0).toBeTruthy();
    });
  });
});
