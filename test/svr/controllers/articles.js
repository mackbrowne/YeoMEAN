/**
 * Module dependencies.
 */
 var should = require('should'),
 app = require('../../../server'),
 mongoose = require('mongoose'),
 controller = require('../../../svr/controllers/articles');
 User = mongoose.model('User'),
 Article = mongoose.model('Article');

//Globals
var user;
var article;
var res;
var req;

//The tests
describe('<Unit Test>', function() {
    describe('Controller Articles:', function() {

        beforeEach(function(done) {
            user = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });

            user.save(function(err) {
                article = new Article({
                    title: 'Article Title',
                    content: 'Article Content',
                    user: user
                });

                article.save(function(err){
                    done();
                });
            });
        });


//  exports.article = function(req, res, next, id) {
//     Article.load(id, function(err, article) {
//         if (err) return next(err);
//         if (!article) return next(new Error('Failed to load article ' + id));
//         req.article = article;
//         next();
//     });
// };

//  exports.create = function(req, res) {
//     var article = new Article(req.body);
//     article.user = req.user;

//     article.save(function(err) {
//         if (err) {
//             return res.send('users/signup', {
//                 errors: err.errors,
//                 article: article
//             });
//         } else {
//             res.jsonp(article);
//         }
//     });
// };


//  exports.destroy = function(req, res) {
//     var article = req.article;

//     article.remove(function(err) {
//         if (err) {
//             req.flash('error', 'error in deleting article');
//             debugger;
//             return res.redirect('/#/articles/'+article._id);
//         } else {
//             res.jsonp(article);
//         }
//     });
// };
describe('Method Destroy', function(){
    it('should be able to delete article', function(done){
        return controller.destroy(
            {'article': article,
            'flash': 
            function(flashSlot, message){
                return done(message);
            },
            'redirect':
            function(redirection){
                redirection.should.not.equal('/#/articles');
                return done(redirection);
            }
        },
        {'jsonp':
        function(articles){
            should.exist(articles);
            done();
        }
    }
    );
    });
});

describe('Method Update', function() {
    it('should be able to update without problems', function(done) {
        return controller.update(
            {'article':article,'body':'This is the NEW article content'},
            {'jsonp':   
            function(savedArticle){ 
                savedArticle.should.equal(article);
                done(); 
            } 
        });
    });

});

describe('Method All', function(){
    it('should be able to return articles', function(done){
        return controller.all(
            {'flash': 
            function(flashSlot, message){
                return done(message);
            },
            'redirect':
            function(redirection){
                redirection.should.not.equal('/#/articles');
                return done();
            }
        },
        {'jsonp':
        function(articles){
            should.exist(articles);
            done();
        }
    }
    );
    });
});

afterEach(function(done) {
    Article.remove({});
    User.remove({});
    done();
});

after(function(done){
    Article.remove().exec();
    User.remove().exec();
    done();
});

});
});
