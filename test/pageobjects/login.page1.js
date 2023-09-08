class LoginPage1 {
  get userName() {
    return $("#username");
  }

  get password() {
    return $("#password");
  }

  get loginButton() {
    return $('button[type="submit"]');
  }

  get message() {
    return $("#flash");
  }

  async loging(username, password) {
    await this.userName.setValue(username);
    await this.password.setValue(password);
    await this.loginButton.click();
  }

  async checkMessage(message) {
    expect(this.message.toHaveTextContaining(message));
  }
}
module.exports = new LoginPage1();
