import { MediaSearchService } from '../../src/media-search-service/media-search.service';

describe('iTunes Media Search Service Test', () => {
  const itunesMediaSearchService: MediaSearchService = new MediaSearchService();
  it('should test that result count=0 and results=[]', () => {
    itunesMediaSearchService.search({ term: null, limit: null, offset: null }).then(({ resultCount, results }) => {
      expect(resultCount).toBe(0);
      expect(Array.isArray(results) && results.length === 0).toBeTruthy();
    });
  });
});
