export default class IbtJsError {
  static Version = '0.1.3';
  static Code = 'code';
  static Data = 'data';
  static Error = 'error';
  static Message = 'message';
  static Path = 'path';
  constructor ({ message = null, path = null, error = null, code = null, data = null }) {
    this[IbtJsError.Error] = error || true;
    if (path) {
      this[IbtJsError.Path] = path;
    }
    const _code = code || (error?.code || error?.errorCode ? error?.code || error?.errorCode : null);
    if (_code) {
      this[IbtJsError.Code] = _code;
    }
    this[IbtJsError.Message] =
      message || (error?.message || error?.errorMessage ? error?.message || error?.errorMessage : 'Unknown error');
    if (data) {
      this[IbtJsError.Data] = data;
    }
    return this;
  }
}
