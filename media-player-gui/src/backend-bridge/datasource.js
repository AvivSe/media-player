import MediaSearchService from "./media-search.service";

class DatasourceAdapter {
  mediaSearchService: MediaSearchService;

  destroy(){
  }

  constructor(mediaSearchService) {
    this.mediaSearchService = mediaSearchService;
  }

  getRows(params) {
    const { request, successCallback, failCallback } = params;
    const {  startRow, endRow } = request;
    const limit = endRow - startRow;
    console.log(startRow, limit);
    this.mediaSearchService.search({ keywords: 'red hot chili', offset: startRow, limit }).then(({data}) => {
      if(!!data) {
        console.log(data.results);
        successCallback(data.results, data.lastRow);
      } else {
        failCallback();
      }
    });
  }
}

export default DatasourceAdapter;
