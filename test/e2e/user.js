describe('noAuth', function(){
  it('should not have an articles link', function(){

  });
}, 10000);

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

    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/');
    expect(element(by.binding('global.user.name')).getText()).toBe('TestUser1');

    element(by.linkText('Signout')).click();
    //var greeting = element(by.binding('yourName'));

    //  expect(greeting.getText()).toEqual('Hello Julie!');
  });

  it('should show an error when signing up', function(){

  });
}, 10000);

describe('signin', function(){

  it('should signin successfully', function() {
    browser.get('http://localhost:3001');

    // element(by.model('yourName')).sendKeys('Julie');
    element(by.linkText('Signin')).click();
    element(by.id('email')).sendKeys('TestUser1@test.com');
    element(by.id('password')).sendKeys('testusr1');
    element(by.className('btn-default')).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/');
    expect(element(by.binding('global.user.name')).getText()).toBe('TestUser1');

    element(by.linkText('Signout')).click();
  });

  it('should show an unknown user error', function(){

  });

  it('should show a wrong password error', function(){

  });
}, 10000);