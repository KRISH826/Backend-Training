class apiResponse {
  constructor(stausCode, data, messege = "Success") {
    this.stausCode = stausCode;
    this.data = data;
    this.messege = messege;
    this.success = stausCode < 400;
  }
}
