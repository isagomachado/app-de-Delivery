class ErrorsCode extends Error {
  code = 500;
  constructor(name, message, code) {
    super(message);
    this.name = name;
    this.code = code;
  }
}

module.exports = ErrorsCode;