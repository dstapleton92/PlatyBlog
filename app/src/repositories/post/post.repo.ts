import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostService from '../../services/post/post.svc'; // step 1 in requesting dependency. letting TS know where to find it and what it's called

export default class PostRepository extends BaseRepository {
    
    constructor(private postSvc: PostService) {
        super();
    }

    getAllPosts(): async.IThenable<Array<models.IBlogPost>> {
        return this.postSvc.getAllPosts();
    }
    
    getPost(postId: string): async.IThenable<models.IBlogPost> {
        return this.postSvc.getPost(postId);
    }
    
    submitPost(post: models.IBlogPost): async.IThenable<string> {
        return this.postSvc.submitPost(post);
    }
}

register.injectable('post-repo', PostRepository, [PostService]); // We tell platypusTS that we need access to it (in the dependency array)
