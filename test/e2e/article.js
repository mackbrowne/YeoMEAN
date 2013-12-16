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
  it('should create an article without problems', function(){
    element(by.linkText('Create New Article')).click();
    element(by.id('title')).sendKeys(article.title);
    element(by.id('content')).sendKeys(article.content);
    element(by.className('btn')).click();
    expect(browser.getCurrentUrl()).toMatch('http:\/\/localhost:3001\/#\/articles\/[^\\s\\\\]+');
  });
}

describe('findAll', function(){
  browser.get('http://localhost:3001');
  signup({name: 'FindUser1', email: 'FindUser1@test.com', username: 'findusr1', password: 'findusr1'});

  it('should check to see if a list exists', function(){
    element(by.linkText('Articles')).click();
    expect(element(by.repeater('article in articles')).isPresent()).toBe(false);
    expect(element(by.className('articlesMsg')).isDisplayed()).toBe(true);
  });

  createArticle({title: 'findTitle', content: 'findContent'});

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

  createArticle(article);

  it('should check the articles for the specific one', function(){
    article.permalink = browser.getCurrentUrl().valueOf();
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

  createArticle({title: 'testTitle', content: 'testContent'});

  signout();
});

describe('update', function(){
  browser.get('http://localhost:3001');
  signup({name: 'UpdateUser', email: 'UpdateUser@test.com', username: 'upusr1', password: 'upusr1'});

  createArticle({title: 'updateTitle', content: 'updateContent'});

  it('should edit the new article', function(){
    element(by.linkText('edit')).click();
    expect(browser.getCurrentUrl()).toMatch('http:\/\/localhost:3001\/#\/articles\/[^\\s\\\\]+\/edit');
    element(by.id('title')).clear()
    element(by.id('title')).sendKeys('updated title!');
    element(by.id('content')).clear()
    element(by.id('content')).sendKeys('updated content');
    element(by.className('btn')).click();
    expect(browser.getCurrentUrl()).toMatch('http:\/\/localhost:3001\/#\/articles\/[^\\s\\\\]+');
    expect(element(by.binding('article.title')).getText()).toBe('updated title!');
    expect(element(by.binding('article.content')).getText()).toBe('updated content');
  });

  signout();
});

describe('update fail', function(){
  browser.get('http://localhost:3001');
  signup({name: 'UpdateUser2', email: 'UpdateUser2@test.com', username: 'upusr2', password: 'upusr2'});

  createArticle({title: 'updateTitle', content: 'updateContent'});

  var currentUrl = browser.getCurrentUrl();

  signout();

  it('should not be able to edit this article with no login', function(){
    browser.get('http://localhost:3001/#/articles');
    element(by.linkText('updateTitle')).click();
    expect(element(by.linkText('edit')).isPresent()).toBe(false);
  });

  signup({name: 'UpdateUser3', email: 'UpdateUser3@test.com', username: 'upusr3', password: 'upusr3'});

  it('should not be able to edit this article as a different user', function(){
    element(by.linkText('Articles')).click()
    element(by.linkText('updateTitle')).click();
    expect(element(by.linkText('edit')).isPresent()).toBe(false);
  });

  signout();
});

describe('delete', function(){
  browser.get('http://localhost:3001');
  signup({name: 'DelUser', email: 'DelUser@test.com', username: 'delusr1', password: 'delusr1'});

  createArticle({title: 'delTitle', content: 'delContent'});

  it('should delete your own article without problems', function(){
    element(by.linkText('delete')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3001/#/articles');
  });

  createArticle({title: 'delTitle2', content: 'delContent2'});
  it('should delete an article using the x button', function(){
    element(by.linkText('Articles')).click();
    element(by.className('close')).click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3001/#/articles');
    expect(element(by.linkText('delTitle2')).isPresent()).toBe(false);
  });

  signout();
});

describe('delete fail', function(){
  browser.get('http://localhost:3001');
  signup({name: 'DelUser2', email: 'DelUser2@test.com', username: 'delusr2', password: 'delusr2'});

  createArticle({title: 'delTitleFail', content: 'delContentFail'});

  signout();

  it('should not be able to delete articles with x while signed out', function(){ 
    browser.get('http://localhost:3001/#/articles');
    expect(element(by.className('close')).isPresent()).toBe(false);
  });

  it('should not be able to delete articles with delete link while signed out', function(){
    element(by.linkText('delTitleFail')).click();
    expect(element(by.linkText('delete')).isPresent()).toBe(false);
  });

  signup({name: 'DelUser3', email: 'DelUser3@test.com', username: 'delusr3', password: 'delusr3'});

  it('should not be able to delete articles with x while signed in with a different user', function(){
    element(by.linkText('Articles')).click();
    expect(element(by.className('close')).isPresent()).toBe(false);
  });

  it('should not be able to delete articles with delete link while signed in with a different user', function(){
    element(by.linkText('delTitleFail')).click();
    expect(element(by.linkText('delete')).isPresent()).toBe(false);
  });

  signout();
})