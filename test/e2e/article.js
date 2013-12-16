function signup(user){
  it('should setup account to use in the article tests', function(){
    element(by.linkText('Signup')).click();
    element(by.id('name')).sendKeys(user.name);
    element(by.id('email')).sendKeys(user.email);
    element(by.id('username')).sendKeys(user.username);
    element(by.id('password')).sendKeys(user.password);
    element(by.className('btn-default')).click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/');
    expect(element(by.binding('global.user.name')).getText()).toBe(user.name);
  });
}

function signout(){
  it('should sign out successfully and route to the home page', function(){
    element(by.linkText('Signout')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3001/#/');
  });
}

function createArticle(article){
  element(by.linkText('Create New Article')).click();
  element(by.id('title')).sendKeys(article.title);
  element(by.id('content')).sendKeys(article.content);
  element(by.className('btn')).click();
}

describe('findAll', function(){
  browser.get('http://localhost:3001');
  signup({name: 'FindUser1', email: 'FindUser1@test.com', username: 'findusr1', password: 'findusr1'});

  it('should check to see if a list exists', function(){
    element(by.linkText('Articles')).click();
    expect(element(by.repeater('article in articles')).isPresent()).toBe(false);
    expect(element(by.className('articlesMsg')).isDisplayed()).toBe(true);
  });

  it('should create a new article to see in the articles menu', function(){
    createArticle({title: 'findTitle', content: 'findContent'});
    expect(browser.getCurrentUrl()).toMatch('http:\/\/localhost:3001\/#\/articles\/[^\\s\\\\]+');
  });

  it('should check to see if a list of articles exists', function(){
    element(by.linkText('Articles')).click();
    expect(element(by.repeater('article in articles')).isDisplayed()).toBe(true);
    expect(element(by.className('articlesMsg')).isDisplayed()).toBe(false);
  });

  signout();
});

describe('findOne', function(){
  browser.get('http://localhost:3001');
  signup({name: 'FindOneUser', email: 'FindOneUser1@test.com', username: 'findoneusr1', password: 'findoneusr1'});

  var article = {title: 'findOneTitle', content: 'findOneContent'};
  it('should create a new article to see in the articles menu', function(){

    createArticle(article);
    expect(browser.getCurrentUrl()).toMatch('http:\/\/localhost:3001\/#\/articles\/[^\\s\\\\]+');
    article.permalink = browser.getCurrentUrl().valueOf();
  });

  it('should check the articles for the specific one', function(){
    element(by.linkText('Articles')).click();
    var title = element(by.binding('article.title'));
    expect(title.getText()).toBe(article.title);
    title.click();
  });

  it('should have the same permalink as the one it created', function(){
    expect(browser.getCurrentUrl().valueOf()).toBe(article.permalink);
  });

  signout();
});

describe('create', function(){
  browser.get('http://localhost:3001');
  signup({name: 'CreateUser1', email: 'CreateUser1@test.com', username: 'createusr1', password: 'createusr1'});

  it('should create an article without problems', function(){
    createArticle({title: 'testTitle', content: 'testContent'});
    expect(browser.getCurrentUrl()).toMatch('http:\/\/localhost:3001\/#\/articles\/[^\\s\\\\]+');
  });

  signout();
});

describe('update', function(){
  // browser.get('http://localhost:3001');
  // signup({name: 'CreateUser1', email: 'CreateUser1@test.com', username: 'createusr1', password: 'createusr1'});
  
  // it('should create an article without problems', function(){
  //   createArticle({title: 'testTitle', content: 'testContent'});
  //   expect(browser.getCurrentUrl()).toMatch('http:\/\/localhost:3001\/#\/articles\/[^\\s\\\\]+');
  // });

  // signout();
});

describe('delete', function(){

});