import { ItunesMediaSearchService } from '../../src/services/itunes.media-search.service';

const itunesMediaSearchService: ItunesMediaSearchService = new ItunesMediaSearchService();

describe('Sample Test', () => {
  it('should test that result count = 50', () => {
    expect(itunesMediaSearchService.search({ keywords: '', limit: 0, page: 0 }).resultCount).toBe(50);
  });
});
