
import UserService from "./user.service";

class UserDatasourceAgGridAdapter {
  userService: UserService;

  destroy(): void {
  }

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getRows(params: any): void {
    const { request, successCallback, failCallback } = params;
    this.userService.find(request).then(({data}) => {
      if(!!data) {
        successCallback(data.rows, data.lastRow);
      } else {
        failCallback();
      }
    });
  }
}

export default UserDatasourceAgGridAdapter;
