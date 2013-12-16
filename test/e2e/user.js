describe('noAuth', function(){
  browser.get('http://localhost:3001');

  it('should not have an articles link', function(){
    expect(element(by.linkText('Articles')).isPresent()).toBe(false);
  });

  it('should have a signup link', function(){
    expect(element(by.linkText('Signup')).isPresent()).toBe(true);
  });

  it('should have a signin link', function(){
    expect(element(by.linkText('Signin')).isPresent()).toBe(true);
  });

  it('should not be showing a username', function(){
    expect(element(by.binding('global.user.name')).isDisplayed()).toBe(false);
  });

});

describe('signup: success', function() {
  browser.get('http://localhost:3001');

  it('should sign up the user successfully and route to the home page', function() {

    element(by.linkText('Signup')).click();
    element(by.id('name')).sendKeys('TestUser1');
    element(by.id('email')).sendKeys('TestUser1@test.com');
    element(by.id('username')).sendKeys('testusr1');
    element(by.id('password')).sendKeys('testusr1');
    element(by.className('btn-default')).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/');
  });

  it('should show the username after signed in', function(){
    expect(element(by.binding('global.user.name')).getText()).toBe('TestUser1');
  });

  it('should sign out successfully and route to the home page', function(){
    element(by.linkText('Signout')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/');
  });

});

describe('signup: duplicate email', function(){
  browser.get('http://localhost:3001');

  it('should cause an error when signing up with same user', function(){
    element(by.linkText('Signup')).click();
    element(by.id('name')).sendKeys('TestUser1');
    element(by.id('email')).sendKeys('TestUser1@test.com');
    element(by.id('username')).sendKeys('testusr1');
    element(by.id('password')).sendKeys('testusr1');
    element(by.className('btn-default')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/signup');   
  });

  it('should not be signed in', function(){
    expect(element(by.binding('global.user.name')).isDisplayed()).toBe(false);
  });

  it('should display an error', function(){
    expect(element(by.repeater('error in global.errors')).isPresent()).toEqual(true);
  });

  it('should dismiss the error with no problems', function(){
    element(by.className('close')).click();
    expect(element(by.repeater('error in global.errors')).isPresent()).toBe(false);
  });
});

describe('signin: success', function(){
  browser.get('http://localhost:3001');

  it('should signin successfully and return to the home page', function() {
    element(by.linkText('Signin')).click();
    element(by.id('email')).sendKeys('TestUser1@test.com');
    element(by.id('password')).sendKeys('testusr1');
    element(by.className('btn-default')).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/');
  });

  it('should display the username', function(){
    expect(element(by.binding('global.user.name')).getText()).toBe('TestUser1');
  });

  it('should sign out successfully and route to the home page', function(){
    element(by.linkText('Signout')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/');
  });

  it('should not be displaying a username anymore', function(){
    expect(element(by.binding('global.user.name')).isDisplayed()).toBe(false);
  });
});

describe('signin: invalid user', function(){
  it('should route back to the signin page with a invalid user', function(){
    element(by.linkText('Signin')).click();
    element(by.id('email')).sendKeys('WrongUser1@test.com');
    element(by.id('password')).sendKeys('testusr1');
    element(by.className('btn-default')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/signin');
  });

  it('should not be signed in', function(){
    expect(element(by.binding('global.user.name')).isDisplayed()).toBe(false);
  });

  it('should display an error', function(){
    expect(element(by.repeater('error in global.errors')).isPresent()).toEqual(true);
  });

  it('should dismiss the error with no problems', function(){
    element(by.className('close')).click();
    expect(element(by.repeater('error in global.errors')).isPresent()).toBe(false);
  });
});

describe('signin: bad password', function(){
  it('should route back to the signin page with a wrong password', function(){
    element(by.linkText('Signin')).click();
    element(by.id('email')).sendKeys('TestUser1@test.com');
    element(by.id('password')).sendKeys('wrong');
    element(by.className('btn-default')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/signin');
  });

  it('should not be signed in', function(){
    expect(element(by.binding('global.user.name')).isDisplayed()).toBe(false);
  });

  it('should display an error', function(){
    expect(element(by.repeater('error in global.errors')).isPresent()).toBe(true);
  });

  it('should dismiss the error with no problems', function(){
    element(by.className('close')).click();
    expect(element(by.repeater('error in global.errors')).isPresent()).toBe(false);
  });
});