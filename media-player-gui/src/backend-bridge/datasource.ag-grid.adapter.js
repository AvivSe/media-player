import MediaSearchService from "./media-search.service";

class DatasourceAgGridAdapter {
  mediaSearchService: MediaSearchService;
  keywords: string;

  destroy(){
  }

  constructor(mediaSearchService, keywords) {
    this.mediaSearchService = mediaSearchService;
    this.keywords = keywords;
  }

  getRows(params) {
    const { request, successCallback, failCallback } = params;
    const {  startRow, endRow } = request;
    const limit = endRow - startRow;
    this.mediaSearchService.search({ keywords: this.keywords, offset: startRow, limit }).then(({data}) => {
      if(!!data) {
        successCallback(data.results, data.lastRow);
      } else {
        failCallback();
      }
    });
  }
}

export default DatasourceAgGridAdapter;
