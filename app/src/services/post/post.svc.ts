import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostService extends BaseService {
    getAllPosts(): async.IAjaxThenable<Array<models.IBlogPost>> {
        return this.http.json<Array<models.IBlogPost>>({
            method: 'GET',
            url: this.host + '/posts'
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
    
    getPost(postId: string): async.IAjaxThenable<models.IBlogPost> {
        return this.http.json<models.IBlogPost>({
            method: 'GET',
            url: this.host + '/posts/' + postId
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
    
    submitPost(blogPost: models.IBlogPost): async.IAjaxThenable<string> {
        return this.http.json({
            method: 'POST',
            url: this.host + '/posts',
            data: blogPost
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
}

register.injectable('post-svc', PostService);
