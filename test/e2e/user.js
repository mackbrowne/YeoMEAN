// myTest.js
describe('signup', function() {
  it('should greet the named user', function() {
    browser.get('http://localhost:3001');

   // element(by.model('yourName')).sendKeys('Julie');
    element(by.linkText('Signup')).click();
    element(by.id('name')).sendKeys('TestUser1');
    element(by.id('email')).sendKeys('TestUser1@test.com');
    element(by.id('username')).sendKeys('testusr1');
    element(by.id('password')).sendKeys('testusr1');
    element(by.className('btn-default')).click();
    
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/')
    
    //var greeting = element(by.binding('yourName'));

  //  expect(greeting.getText()).toEqual('Hello Julie!');
  }, 10000);
});